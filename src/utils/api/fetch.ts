import { baseHeadersInterface } from "./types";

const baseURL: String = "https://patron.lunchbox.dev";
const baseHeaders: baseHeadersInterface = {
  Client: "bareburger",
  Version: "web",
  Location: "5beaf8a278b2c13fbb2e5147",
};

const handleStatus = (response: Promise<any>) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};
const toJSON = (response: Promise) => {
  return response.json();
};

const request = async (url, { method, ...config }) => {
  const params = new URLSearchParams(config.params);
  let absoluteURL: String = `${baseURL}/${url}`;

  if (params) {
    absoluteURL = `${absoluteURL}?${params}`;
  }

  const headers: any = {
    ...baseHeaders,
    ...config.headers,
  };

  return window
    .fetch(absoluteURL, { method, headers })
    .then(handleStatus)
    .then(toJSON);
};

const [get, post, put, destroy] = ["get", "post", "put", "delete"].map(
  (method) => {
    return (url, config) => fetcher(url, { method, ...config });
  },
);

export { request, get, post, put, destroy };
