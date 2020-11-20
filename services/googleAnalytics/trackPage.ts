const GA_ID = process.env.GA_ID;

export const trackPage = (page_path: string, page_title: string) => {
  // @ts-ignore
  window.gtag("config", GA_ID, {
    page_location: window.location.href,
    page_path,
    page_title,
  });
};

