import HTTP from "../utils/http";
import { API } from "../config/config";
const COURSE = API.COURSE

export default class CourseService extends HTTP {
  getCourseData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: COURSE.GET_COURSES,
        success: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
  postDataDemo(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: "http://localhost:4000/post_data_demo",
        data: data,
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
