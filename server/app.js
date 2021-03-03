const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const {isProtect, notFound} = require("./utils/404");
const cookieParser = require("cookie-parser");
const user = require("./routes/user");
const forum = require("./routes/forum");
const classes = require("./routes/class");
const upload = require("./routes/upload");
const { sendError, sendSuccess } = require("./utils/error")
dotenv.config({path: "./config.env"});

const app = express();

app.enable("trust proxy");

app.use(express.static(path.join(__dirname, "public")));

// Access cors
app.use(cors());

// Access cors for origin site
// app.use(cors({
//   origin: 'https://www.google.com'
// }))

app.options("*", cors());

// Set security HTTP headers
// Detect data not secure in headers
// Prevent XSS, SQL injection
app.use(helmet());

// Limit requests
// Detect DOS & DDOS
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
});

if (process.env.NODE_ENV === "production") {
    app.use("/api", limiter);
    app.use(isProtect);
}

// body parser
// Detect DOS & DDOS
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: true, limit: "10kb"}));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

//connect DB
mongoose
    .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connect successfull"))
    .catch((err) => console.log(`${err}`));



// Route
app.use("/api/v1/users",user);
app.use("/api/v1/uploads",upload);
app.use("/api/v1/forums",forum);
app.use("/api/v1/classes",classes);
//404
app.all("*", notFound);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
