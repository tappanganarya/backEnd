const router = require("express").Router();
const base = "api";

router.get(`/${base}`, (req, res) => {
  res.json({ message: "WEB API" });
});

const itemRouters = require("./item");
// const userRouters = require("./user");
// const typeRouters = require("./type");
// const profileRouters = require("./profile");
// const locationRouters = require("./location");

router.use(`/${base}/items`, itemRouters);
// router.use("/users", userRouters);
// router.use("/types", typeRouters);
// router.use("/profiles", profileRouters);
// router.use("/locations", locationRouters);

module.exports = router;
