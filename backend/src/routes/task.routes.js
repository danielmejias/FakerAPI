const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Hello World");
  res.json({
    status: "API Works!",
  });
});
module.exports = router;
