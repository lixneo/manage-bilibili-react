const BASE_URL = "http://localhost:4000";

const API = {
  ADMIN: {
    LOGIN: `${BASE_URL}/login`,
    LOGOUT: `${BASE_URL}/logout`,
    LOGIN_CHECK: `${BASE_URL}/login_check`,
  },
  COURSE:{
    GET_COURSES: `${BASE_URL}/get_courses`,
  }
};

const NAV = [
  {
    field: "course",
    title: "课程管理", // 课程上下架，课程分类选择
  },
  {
    field: "recom_course",
    title: "推荐课程", // 推荐课程的上下架
  },
  {
    field: "slider",
    title: "轮播图管理", // 轮播图数据上下线
  },
  {
    field: "collection",
    title: "课程集合管理", // 课程集合的上下线
  },
  {
    field: "teacher",
    title: "老师管理", // 老师的上下线   明星老师的设置
  },
  {
    field: "student",
    title: "学生管理", // 学生的上下线
  },
  {
    field: "crawler",
    title: "数据爬取", // 爬取各种数据
  },
];

export { API, NAV };
