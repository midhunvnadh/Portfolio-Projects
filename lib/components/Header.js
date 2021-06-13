import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="header-content">
                <div className="container">
                  <div className="columns is-vcentered is-centered">
                    <div className="column is-3 has-text-centered">
                      <div className="container prof-hold">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src="https://www.gravatar.com/avatar/1d195858f74d0a31af4901dafb89ffd9?s=300"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="container has-text-left p-3">
                        <h1 className="title">Midhun V Nadh</h1>
                        <p className="subtitle">Computer Science Enthusiast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
