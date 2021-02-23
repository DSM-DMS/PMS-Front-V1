import Axios from "axios";
import { useHistory } from "react-router-dom";

export const MainURL = "http://52.231.93.45:8080/";

export function request(method, url, header, data) {
  return Axios({
    method,
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log("받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(MainURL + url);
      console.error(e);
    });
}
