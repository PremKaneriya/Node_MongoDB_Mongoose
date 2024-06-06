const express = require("express");
const { courseControler } = require("../../../controler");

const router = express.Router();


router.get(
    "/list-course",
    courseControler.listcourse
);


router.get("/list-course/:course_id",
  courseControler.getcourse
);



router.post(
    "/add-course",
    courseControler.addcourse
   
);
router.put(
    "/update-course/:course_id",
    courseControler.updatecourse
)
    
router.delete(
    "/delete-course/:course_id",
    courseControler.deletecourse
)
module.exports = router;