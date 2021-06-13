import ReactMarkdown from "react-markdown";
import React from "react";
import "github-markdown-css/github-markdown.css";

export default class GetMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdownContent: "" };
  }
  componentDidMount() {
    this.getMarkDownContent();
  }
  async getMarkDownContent() {
    const response = await fetch(`/api/${this.props.repo}/md`);
    const data = await response.json();
    this.setState({ markdownContent: data.content });
  }
  render() {
    return (
      <div className="has-background-light p-5 m-3">
        {this.state.markdownContent === "error" && (
          <div className="notification is-danger">
            Something went wrong. Please try again later!
          </div>
        )}
        {this.state.markdownContent === "404" && (
          <div className="notification is-warning">
            No README.md found for project!
          </div>
        )}
        {this.state.markdownContent !== "404" &&
          this.state.markdownContent !== "error" &&
          this.state.markdownContent !== "" && (
            <ReactMarkdown className="markdown-body">
              {this.state.markdownContent}
            </ReactMarkdown>
          )}
        {this.state.markdownContent === "" && <div className="loader title" />}
      </div>
    );
  }
}
