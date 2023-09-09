import React, { Fragment } from "react";

class GithubProfileCard extends React.Component {
  render() {
    const { name, avatar_url, bio, html_url} = this.props.profile;

    return (
      <Fragment>
        <div className="card">
          <img src={avatar_url} alt="" className="img-fluid" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{bio}</p>
            <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
              Profile
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GithubProfileCard;
