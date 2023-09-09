import React, { Fragment } from 'react';

class GithubEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleEvents: 10, 
    };
  }

  render() {
    const { events } = this.props;
    const { visibleEvents } = this.state;

    return (
      <Fragment>
        <div className="card">
          <div className="card-header bg-info text-white">
            <h3>GitHub Events</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {events.slice(0, visibleEvents).map((event) => (
                <li key={event.id} className="list-group-item">
                  <div className="event-details">
                    <a href={`https://github.com/${event.actor.login}`}>
                      <strong>{event.actor.login}</strong>
                    </a>{' '}
                    {event.payload.action} on{' '}
                    <a href={`https://github.com/${event.repo.name}`}>
                      <strong>{event.repo.name}</strong>
                    </a>
                  </div>
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <strong>Type:</strong> {event.type}
                    </div>
                    <div className="event-meta-item">
                      <strong>Created:</strong> {new Date(event.created_at).toLocaleString()}
                    </div>
                  </div>
                  {event.payload.commits && (
                    <div className="related-commits">
                      <strong>Related Commits:</strong>
                      <ul>
                        {event.payload.commits.map((commit, index) => (
                          <li key={index}>
                            {index + 1} ➡️ {commit.message}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {visibleEvents < events.length && (
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  this.setState({ visibleEvents: visibleEvents + 10 });
                }}
              >
                View More Events
              </button>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GithubEvents;
