const express = require("express");
const { studentControler } = require("../../../controler");

const router = express.Router();

router.get(
    "/ list - students /: students_id",
    studentControler.getstudent
);


router.get(
    "/list-students",
    studentControler.liststudent
);

router.post(
    "/add-students",
    studentControler.addstudent
);
router.put(
    "/update-students/:students_id",
    studentControler.updatestudent
);
router.delete(
    "/delete-students/:students_id",
    studentControler.deletestudent
)
module.exports = router;