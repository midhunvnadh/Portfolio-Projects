import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import Link from "next/link";
import timeDifference from "../timeDifference";
import { motion, AnimatePresence } from "framer-motion";
import { withRouter } from "next/router";

class Work extends React.Component {
  render() {
    const work = this.props.details;
    return (
      <motion.div
        className="column is-3"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -15, opacity: 0 }}
        key={this.props.router.route}
      >
        <div className="box work">
          <div className="work-title">
            <h1>
              {work.name ? work.name.replace(/_/g, " ").replace(/-/g, " ") : ""}
            </h1>
          </div>
          <div className="last_updated">
            <span>
              <span>Updated {timeDifference(work.updated_at)}</span>
            </span>
          </div>
          <div className="description">
            <p>
              {work.description ? work.description : "No description given"}
            </p>
          </div>
          <div className="work-footer py-5 pb-0">
            <div className="level">
              <div className="level-left">
                <button className="button is-light is-small has-text-weight-bold">
                  <span className="icon is-small">
                    <BiCodeCurly />
                  </span>
                  <span className="">
                    {work.language ? work.language : "unknown?"}
                  </span>
                </button>
                <a
                  className="mx-1 is-small button is-dark"
                  href={work.html_url}
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="level-right">
                <Link href={`/project/${work.name}`} passHref>
                  <a className="button is-light is-small">
                    <span>View</span>
                    <span className="icon">
                      <FaArrowRight />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default withRouter(Work);
