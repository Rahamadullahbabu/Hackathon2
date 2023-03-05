const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
app.use(cors());
const employeeRoute = require("./routes/employeeRoute");
const studentRoute = require("./routes/studentRoute");
const resultsRoute = require("./routes/resultsRoute");

app.use("/employee/", employeeRoute);
app.use("/student/", studentRoute);
app.use("/results/", resultsRoute);


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Node JS app listening on port ${port}!`));
