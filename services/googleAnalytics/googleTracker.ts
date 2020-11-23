const GA_ID = process.env.GA_ID;

//google est activé au niveau du index.html
//la var env est injecté depuis webpack plugins

export const googleTracker = (page_path: string, page_title: string) => {
  // @ts-ignore
  window.gtag("config", GA_ID, {
    page_location: window.location.href,
    page_path,
    page_title,
  });
};

