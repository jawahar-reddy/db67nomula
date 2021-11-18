var express = require("express");
const fan_controlers = require("../controllers/fan");
var router = express.Router();

/* GET restaurants */
router.get("/", fan_controlers.fan_view_all_Page);
module.exports = router;

/* GET detail fan page */ 
router.get('/detail', fan_controlers.fan_view_one_Page); 

/* GET create fan page */ 
router.get('/create', fan_controlers.fan_create_Page); 

/* GET create update page */ 
router.get('/update', fan_controlers.fan_update_Page);

/* GET create fan page */ 
router.get('/delete', fan_controlers.fan_delete_Page); 