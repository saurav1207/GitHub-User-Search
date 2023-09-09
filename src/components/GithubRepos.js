import React, { Fragment } from 'react';

class GithubRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleRepos: 10,
    };
  }

  render() {
    const { repos } = this.props; 

    const { visibleRepos } = this.state;

    const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);

    return (
      <Fragment>
        <div className="card">
          <div className="card-header bg-info text-white">
            <h3>GitHub Repos</h3>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Repository</th>
                  <th className="text-center">Stars</th>
                  <th className="text-center">Watches</th>
                </tr>
              </thead>
              <tbody>
                {sortedRepos.slice(0, visibleRepos).map((repo) => (
                  <tr key={repo.id}>
                    <td>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </td>
                    <td className="text-center">{repo.stargazers_count}</td>
                    <td className="text-center">{repo.watchers_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {visibleRepos < sortedRepos.length && (
              <p className="mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ visibleRepos: visibleRepos + 10 });
                  }}
                >
                  View More Repositories
                </button>
              </p>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GithubRepos;
