import React, { Fragment } from "react";

class GithubProfileDetails extends React.Component {
  formatJoinDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  render() {
    const {
      followers,
      public_repos,
      public_gists,
      following,
      name,
      location,
      email,
      company,
      blog,
      created_at,
      html_url,
    } = this.props.profile;

    return (
      <Fragment>
        <div className="card">
          <div className="card-header bg-light">
            <span className="badge badge-primary mx-2">Followers: {followers}</span>
            <span className="badge badge-success mx-2">Repos: {public_repos}</span>
            <span className="badge badge-warning mx-2">Gists: {public_gists}</span>
            <span className="badge badge-danger mx-2">Following: {following}</span>
          </div>
          <div className="card-body">
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Name:</strong> {name}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {location || "Not provided"}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {email || "Not provided"}
              </li>
              <li className="list-group-item">
                <strong>Company:</strong> {company || "Not provided"}
              </li>
              <li className="list-group-item">
                <strong>Blog:</strong> {blog || "Not provided"}
              </li>
              <li className="list-group-item">
                <strong>Member Since:</strong> {this.formatJoinDate(created_at)}
              </li>
              <li className="list-group-item">
                <strong>Profile URL:</strong>{" "}
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {html_url}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </Fragment>
    );
  }
}

export default GithubProfileDetails;
