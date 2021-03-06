import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com",
});

api.interceptors.request.use(
  function (config) {
    return {
      ...config,
      url: `${config.url}${config.url.includes("?") ? "&" : "?"
        }key=AIzaSyBFeGc1dlPmCJMD-uF2Z-8LxzsHA7r0owg`,
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log(response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function getBooks({ title, category, sortBy, page, maxResults }) {
  let filteredRequest = `/books/v1/volumes?`;
  filteredRequest += `q=${title}`;
  filteredRequest += category === "all" ? "" : `+subject:${category}`;
  filteredRequest += `&orderBy=${sortBy}`;
  filteredRequest += `&startIndex=${page * maxResults}`;
  filteredRequest += `&maxResults=${maxResults}`;

  return api.get(filteredRequest);
}
