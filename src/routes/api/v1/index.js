const express = require("express");

const route =express.Router();

const courseRouter=require("./course.routes");
const studentsRouter=require("./students.routes");
const subcourseRouter=require("./subcourse.routes");

route.use("/students",studentsRouter);
route.use("/courses",courseRouter);
route.use("/subcourses",subcourseRouter);

module.exports=route;