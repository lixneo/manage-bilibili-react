import axios from "axios";
import qs from "qs";

export default class HTTP {
  axiosPost(option) {
    return axios({
      method: "post",
      url: option.url,
      data: qs.stringify(option.data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
      params: option.data,
    })
      .then((res) => {
        option.success(res.data);
      })
      .catch((err) => {
        option.error(err);
      });
  }
};
