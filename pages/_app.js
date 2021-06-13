import "../lib/app.scss";
import "bulma/css/bulma.min.css";
import Progress from "../lib/components/Progress";
import { AnimatePresence } from "framer-motion";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Progress />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
