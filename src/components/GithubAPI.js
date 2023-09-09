import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import GithubProfile from './GithubProfile';
import GithubEvents from './GithubEvents';
import GithubRepos from './GithubRepos';

class GithubAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profile: null,
      events: null,
      repos: null,
      loading: false, 
      error: null,   
    };
  }

  updateInput = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  // Form Submission
  searchUser = (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null }); 
    this.searchProfile();
    this.searchEvents();
    this.searchRepos();
  };

  // Search a Profile
  searchProfile = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        this.setState({
          profile: response.data,
          loading: false, 
        });
      })
      .catch((err) => {
        this.setState({
          error: 'User not found', 
          loading: false,        
        });
      });
  };

  // Search Events
  searchEvents = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}/events`)
      .then((response) => {
        this.setState({
          events: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Search Repos
  searchRepos = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}/repos`)
      .then((response) => {
        this.setState({
          repos: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
        <Fragment>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <h3>GitHub User Search</h3>
                  </div>
                  <div className="card-body">
                    <form className="form-inline" onSubmit={this.searchUser}>
                      <div className="form-group">
                        <input
                          value={this.state.username}
                          onChange={this.updateInput}
                          size="50"
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="submit"
                          value="Search"
                          className="btn bg-secondary text-white mx-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {this.state.loading && (
            <div className="container mt-3 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
  
          {this.state.error && (
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <p className="text-danger">{this.state.error}</p>
                </div>
              </div>
            </div>
          )}
  
          {this.state.profile && (
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <GithubProfile profile={this.state.profile} />
                </div>
              </div>
            </div>
          )}
  
          {this.state.events && (
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <GithubEvents events={this.state.events} />
                </div>
              </div>
            </div>
          )}
  
          {this.state.repos && (
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <GithubRepos repos={this.state.repos} />
                </div>
              </div>
            </div>
          )}
        </Fragment>
      );
    }
  }

export default GithubAPI;



