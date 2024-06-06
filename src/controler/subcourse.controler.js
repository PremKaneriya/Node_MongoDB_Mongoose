const Subcourse = require("../models/subcourse.models");

const listsubcourse = async (req, res) => {
console.log("GET");
    try {
        const subcourse = await Subcourse.find();
        console.log(subcourse);
        if (!subcourse || subcourse.length === 0) {
            res.status(404).json({
                message: "No subcourse found"
            });
        }
        res.status(200).json({
            message: "subcourse feched",
            success: true,
            data: subcourse
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

const getsubcourse = async (req, res) => {
    try {
        console.log(req.params.subcourse_id);
        const subcourse = await Subcourse.findById(req.params.subcourse_id);
        if (!subcourse) {
            res.status(404).json({
                message: "No subcourse found",
                success: false
            });
        }
        res.status(200).json({
            message: "subcourse feched",
            success: true,
            data: subcourse
        })
        console.log(subcourse);

    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false
        });
    }


}

const addsubcourse = async (req, res) => {
    try {
        console.log(req.body);
        const subcourse = await Subcourse.create(req.body);
        console.log(subcourse);
        res.status(201).json({
            message: "subcourse added",
            success: true,
            data: subcourse
        })
    } catch (error) {
        res.status(500).json({

            message: "Internal server" + error.message,
            success: false
        });
    }
}


const deletesubcourse = async (req, res) => {
    try {
        console.log(req.params.subcourse_id);
        const subcourse = await Subcourse.findByIdAndDelete(req.params.subcourse_id);
        if (!subcourse) {
            res.status(404).json({
                message: "No subcourse found",
                success: false
            });
        }
        res.status(200).json({
            message: "course deleted successfully",
            success: true,
            data: subcourse
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false,
            data: subcourse
        });
    }
}

const updatesubcourse = async (req, res) => {
    try {
        console.log(req.params.subcourse_id);


        const subcourse = await Subcourse.findByIdAndUpdate(req.params.subcourse_id, req.body,{ new: true, runValidators: true });
        if (!subcourse) {
            res.status(404).json({
                message: "No subcourse found",
                success: false
            });
        }
        
        if (!subcourse) {
            res.status(500).json({
                message: "Internal server" + error.message,
                success: true,
                data: subcourse
            });
        }
        res.status(200).json({
            message: "subcourse updated successfully",
            success: true,
            data: subcourse
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false,
            data: subcourse
        });
    }
}



module.exports = {
    listsubcourse,
    getsubcourse,
    addsubcourse,
    deletesubcourse,
    updatesubcourse

}
