import HTTP from "../utils/http";
import { API } from "../config/config";
const ADMIN = API.ADMIN

export default class LoginService extends HTTP {
  login(userInf) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: ADMIN.LOGIN,
        data: userInf,
        success: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
  logout() {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: ADMIN.LOGOUT,
        success: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
  loginCheck() {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: ADMIN.LOGIN_CHECK,
        success: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
