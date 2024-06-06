const express = require("express");
const { subcourseControler } = require("../../../controler");

const router = express.Router();

router.get("/list-subcourse/:subcourse_id",
subcourseControler.getsubcourse
);


router.get(
    "/list-subcourse",
    subcourseControler.listsubcourse
);

router.post(
    "/add-subcourse",
    subcourseControler.addsubcourse
);
router.put(
    "/update-subcourse/:subcourse_id",
    subcourseControler.updatesubcourse
);
router.delete(
    "/delete-subcourse/:subcourse_id",
    subcourseControler.deletesubcourse
)
module.exports = router;