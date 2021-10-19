const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/epl-survivor-pool");
// mongoose.connect("mongodb+srv://cluster0.cdbit.mongodb.net/epl-survivor-pool" )

// require route
app.use("/", require("./routes/picksRoute"))

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
