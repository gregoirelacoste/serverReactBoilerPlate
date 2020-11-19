import ReactGA from 'react-ga';

const initGoogleAnalytics = (browserHistory: any) => {
  const trackingId = process.env.GA_ID || "";

  const optionsGA =
    process.env.NODE_ENV === "development" ? { debug: true } : {};

  ReactGA.initialize(trackingId, optionsGA);
  return browserHistory.listen((location: Location) => {
    ReactGA.set({ page: location.pathname, userId: "visiteur" });
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
};

export default initGoogleAnalytics;
