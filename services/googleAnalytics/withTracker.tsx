import React, { Component } from "react";
import { trackPage } from './trackPage'

// Au niveau du router, encapsule le composant pour le tracker

interface OptionsTracker {
  title: string;
}

export default function withTracker(
  WrappedComponent: any,
  options: OptionsTracker = { title: "Sans Titre" }
) {
  const HOC = class extends Component {
    componentDidMount() {
      const {
        // @ts-ignore
        location: { pathname: page },
      } = this.props;

      trackPage(page, options.title);
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillReceiveProps(nextProps: any) {
      const {
        // @ts-ignore
        location: { pathname: currentPage },
      } = this.props;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage, options.title);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
}
