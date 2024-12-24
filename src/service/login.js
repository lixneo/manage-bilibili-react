import HTTP from "../utils/http";
import { API } from "../config/config";

export default class LoginService extends HTTP {
  login(userInf) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.LOGIN,
        data: userInf,
        success: (res) => {
          resolve(res);
        },
        error: (err) => {
          alert("网络请求失败");
          // window.location.reload();
          reject(err);
        },
      });
    });
  }
}
