const formidable = require("formidable");
const fs = require("fs");
const {sendError, sendSuccess} = require("./error");
const sharp = require("sharp");

exports.resize = (path, format, width, height) => {
    try {
        const readStream = fs.createReadStream(path);
        let transform = sharp();
        if (format) transform = transform.toFormat(format);
        if (width || height) transform = transform.resize(width, height);
        return readStream.pipe(transform);
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    upload: async (req, res, next) => {
        const form = new formidable.IncomingForm();
        form.uploadDir = "public/uploads";
        form.keepExtensions = true;
        form.maxFieldsSize = 10 * 1024 * 1024;
        form.multiples = true;
        try {
            form.parse(req, (error, fields, files) => {
                if (error)
                    return sendError(
                        res,
                        "Something went wrong,  try later",
                        500
                    );
                if (files["photos"].length == undefined) {
                    fileName = files["photos"].path.split("\\")[2];
                    return sendSuccess(
                        res,
                        {message: "upload file successfull", file: "localhost:3000/api/v1/uploads/image?name="+fileName},
                        200
                    );
                }
                let arrayOfFiles = files["photos"];
                if (arrayOfFiles.length > 0) {
                    let fileNames = [];
                    arrayOfFiles.forEach((file) => {
                        fileNames.push("localhost:3000/api/v1/uploads/image?name="+file.path.split("\\")[2]);
                    });
                    return sendSuccess(
                        res,
                        {
                            message: "upload file successfull",
                            listFile: fileNames,
                        },
                        200
                    );
                }
                return sendError(res, "No image to upload", 400);
            });
        } catch (error) {
            return sendError(res, `${error}`, 500);
        }
    },
    view: async (req, res, next) => {
        const {name} = req.query;
        try {
            let image = "public/uploads/" + name;
            if (!name) {
                res.type(`image/jpg || "png"}`);
                return this.resize(
                    "public/uploads/404.jpg",
                    "jpg",
                    800,
                    800
                ).pipe(res);
            }
            if (!fs.existsSync(image)) {
                res.type(`image/jpg || "png"}`);
                return this.resize(
                    "public/uploads/404.jpg",
                    "jpg",
                    800,
                    800
                ).pipe(res);
            }
            const widthLength = req.query.width;
            const heightLength = req.query.height;
            const format = req.query.format;
            let width, height;
            if (widthLength) width = parseInt(widthLength);
            if (heightLength) height = parseInt(heightLength);
            res.type(`image/${format || "png"}`);
            this.resize(image, format, width, height).pipe(res);
        } catch (error) {
            return sendError(res, `${error}`, 500);
        }
    },
};
