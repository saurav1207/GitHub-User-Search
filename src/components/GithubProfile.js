import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

class GithubProfile extends React.Component {
  render() {
    const { profile } = this.props;

    if (!profile) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <GithubProfileCard profile={profile} />
          </div>
          <div className="col-md-9">
            <GithubProfileDetails profile={profile} />
          </div>
        </div>
      </div>
    );
  }
}

export default GithubProfile;
