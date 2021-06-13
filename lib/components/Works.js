import React from "react";
import InView from "react-intersection-observer";
import Work from "./Work";

export default class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = { works: [], page: 1, ended: false };
    this.changeInProgress = false;
  }
  async getWorks() {
    this.changeInProgress = true;
    const works = await fetch(`/api/works?page=${this.state.page}`);
    const data = await works.json();
    var finalData = { error: true };
    try {
      finalData = data.filter((one) => one.fork == false);
    } catch (e) {}
    const newWorks = [...this.state.works, ...finalData];
    this.setState({ works: newWorks, ended: finalData.length < 3 });
    this.changeInProgress = false;
  }
  componentDidMount() {
    this.getWorks();
  }
  loadMore() {
    if (!this.changeInProgress)
      this.setState({ page: this.state.page + 1 }, () => {
        this.getWorks();
      });
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered works-title">Projects</h1>
          <div className="py-3"></div>
          {this.state.works.error && (
            <div className="notification is-danger">
              Something went wrong. Please try again later!
            </div>
          )}
          {this.state.works.length === 0 && (
            <div className="force-center">
              <div className="loader title" />
            </div>
          )}
          <div className="columns works-holder">
            {this.state.works.length > 0 &&
              this.state.works.map((work) => {
                return <Work details={work} key={work.id} />;
              })}
          </div>
          {this.state.works.length > 0 && !this.state.ended && (
            <InView
              as="div"
              onChange={(inView, entry) => (inView ? this.loadMore() : "")}
            >
              <center>
                <div className="loader title" />
              </center>
            </InView>
          )}
          <div className="py-5"></div>
        </div>
      </section>
    );
  }
}
