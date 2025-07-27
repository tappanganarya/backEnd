const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome page" });
});

const itemRouters = require("./item");
const userRouters = require("./user");

router.use("/items", itemRouters);
router.use("/users", userRouters);

module.exports = router;
