import * as Sentry from "@sentry/react";

const sentryConf = {
  init: () =>
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRY_DSN,
      release: process.env.REACT_APP_SENTRY_RELEASE,
      environment: process.env.REACT_APP_ENABLE_SENTRY
    }),
  scope: () =>
    Sentry.configureScope(scope => {
      scope.setUser({
        id: "visiteur",
      });
    })
};

export const initSentry = () => {
  if (!process.env.REACT_APP_ENABLE_SENTRY) {
    console.log("SENTRY DISABLED");
    return null;
  } else {
    sentryConf.init();
    sentryConf.scope();
  }
};
