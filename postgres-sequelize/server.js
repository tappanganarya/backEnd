const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
