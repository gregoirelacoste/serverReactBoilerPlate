import React, { Component } from "react";
import { googleTracker } from "./googleTracker";

interface OptionsTracker {
  title: string;
}

//englobe les composants au niveau du router

export default function withTracker(
  WrappedComponent: any,
  options: OptionsTracker = { title: "Sans Titre" }
) {
  return class extends Component {
    componentDidMount() {
      const {
        // @ts-ignore
        location: { pathname: page },
      } = this.props;

      googleTracker(page, options.title);
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillReceiveProps(nextProps: any) {
      const {
        // @ts-ignore
        location: { pathname: currentPage },
      } = this.props;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        googleTracker(nextPage, options.title);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
