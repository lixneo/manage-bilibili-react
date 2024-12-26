import axios from "axios";
// import qs from "qs";

export default class HTTP {
  axiosPost(option) {
    return axios({
      method: "post",
      url: option.url,
      // data: qs.stringify(option.data),
      data: option.data,
      withCredentials: true,
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        option.success(res.data);
      })
      .catch((err) => {
        option.error(err);
      });
  }
  axiosGet(option) {
    return axios({
      method: "get",
      url: option.url,
      withCredentials: true,
      params: option.data,
    })
      .then((res) => {
        option.success(res.data);
      })
      .catch((err) => {
        option.error(err);
      });
  }
}
