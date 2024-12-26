import React, { Component } from "react";
import "./index.scss";

import CourseService from "../../../service/course";
const courseService = new CourseService();

export default class Course extends Component {
  componentDidMount() {
    courseService.getCourseData().then((res) => {
      const errorCode = res.error_code;
      if (errorCode === 1006) {
        const { history } = this.props;
        history.push("/login");
        return;
      }
      if (errorCode === 3001) {
        alert("获取失败，请检查网络状态");
        return;
      }
      const data = res.data;
      console.log(data);
    });

    courseService
      .postDataDemo({
        usename: "xiaoxiao",
        password: "123456",
      })
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return <div>course</div>;
  }
}
