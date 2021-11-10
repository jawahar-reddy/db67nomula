var express = require("express");
const fan_controlers = require("../controllers/fan");
var router = express.Router();

/* GET restaurants */
router.get("/", fan_controlers.fan_view_all_Page);
module.exports = router;