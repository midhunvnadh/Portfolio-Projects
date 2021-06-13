import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft, FaClock, FaGit, FaGithub } from "react-icons/fa";
import GetMarkdown from "../../lib/components/GetMarkdown";
import { BsCode, BsEye } from "react-icons/bs";
import { BiGitBranch, BiStar } from "react-icons/bi";
import timeDifference from "../../lib/timeDifference";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repo_details: {}, loaded: false };
  }
  componentDidMount() {
    this.getProjectDetails();
  }
  async getProjectDetails() {
    const response = await fetch(`/api/${this.props.project}/details`);
    const repo_details = await response.json();
    this.setState({ repo_details, loaded: true });
  }
  render() {
    const work = this.state.repo_details;
    return (
      <section className="p-5">
        {!this.state.loaded ? (
          <div className="loader title" />
        ) : (
          <div>
            <Head>
              <title>
                Project:{" "}
                {work.name
                  ? work.name.replace(/_/g, " ").replace(/-/g, " ")
                  : ""}
              </title>
            </Head>
            <div className="container-fluid">
              <Link href="/" passHref>
                <a className="button is-primary is-rounded">
                  <span className="icon">
                    <FaArrowLeft />
                  </span>
                  <span className="">Home</span>
                </a>
              </Link>{" "}
              <span className="title is-capitalized has-text-weight-light">
                {work.name
                  ? work.name.replace(/_/g, " ").replace(/-/g, " ")
                  : ""}
              </span>
            </div>
            <div className="container-fluid py-5">
              <div className="columns">
                <div className="column is-9">
                  <div className="container">
                    <GetMarkdown repo={this.props.project} />
                  </div>
                </div>
                <div className="column is-3">
                  <aside className="menu py-3">
                    <ul className="menu-list">
                      <li>
                        <a className="button is-light">
                          <span className="icon is-large">
                            <BsCode />
                          </span>
                          <span>{work.language}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="button is-light"
                          href={work.html_url}
                          target="_blank"
                        >
                          <span className="icon is-large">
                            <FaGithub />
                          </span>
                          <span>{work.full_name}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="button is-light"
                          href={work.html_url}
                          target="_blank"
                        >
                          <span className="icon is-large">
                            <BiGitBranch />
                          </span>
                          <span>{work.forks_count} Forks</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="button is-light"
                          href={work.html_url}
                          target="_blank"
                        >
                          <span className="icon is-large">
                            <BiStar />
                          </span>
                          <span>{work.stargazers_count} Stars</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="button is-light"
                          href={work.html_url}
                          target="_blank"
                        >
                          <span className="icon is-large">
                            <BsEye />
                          </span>
                          <span>{work.watchers_count} Watchers</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="button is-light"
                          href={work.html_url}
                          target="_blank"
                        >
                          <span className="icon">
                            <FaClock />
                          </span>
                          <span>Updated {timeDifference(work.updated_at)}</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

function Page() {
  const router = useRouter();
  const [state, setState] = useState(false);
  useEffect(() => {
    if (router.asPath !== router.route) {
      setState(true);
    }
  }, [router.query]);

  return state ? <Project project={router.query.project} /> : <></>;
}

export default Page;
