module.exports = {
    sendError : (res,message,statusCode) => {
        res.status(200).json({
            success : false,
            data : {
                error : message,
                code : statusCode
            }
        })
    },
    sendSuccess : (res,data,statusCode) => {
        res.status(200).json({
            success : true,
            code : statusCode,
            data : data
        })
    }
}