import Axios from "axios";

export const MainURL = "https://api.smooth-bear.live";
export const JwURL = "http://api.potatochips.live/";

const token = `${localStorage.getItem("access-token")}`;

export const fetcher = (url) =>
  Axios.get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const authFetcher = (url) =>
  Axios.get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data)
    .catch((error) => console.log(error));

export function request(method, url, header, data) {
  return Axios({
    method,
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      throw e;
    });
}

export function requestJW(method, url, header, data) {
  return Axios({
    method,
    url: JwURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      throw e;
    });
}

export function requestJW(method, url, header, data) {
  return Axios({
    method,
    url: JwURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      throw e;
    });
}