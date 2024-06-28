const express = require("express"); //express module got
const app = express(); //app created using express module

// need to add path of config.env
const dotenv = require("dotenv");
const path = require("path"); //path module got from node modules
dotenv.config({ path: path.join(__dirname, "config", "config.env") }); //helps in getting in both linux and windows

const products = require("./routes/product");
const orders = require("./routes/order");

app.use("/api/v1/", products);
app.use("/api/v1/", orders);

// using app making it to listen server in port 8000
// app.listen(8000, () => {
//   console.log("Server listening to port 8000 in production");
// });
// process in node has env field.
app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
