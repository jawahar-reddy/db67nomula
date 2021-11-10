var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fan_controller = require('../controllers/fan'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/fans', fan_controller.fan_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/fans/:id', fan_controller.fan_delete); 
 
// PUT request to update Costume. 
router.put('/resource/fans/:id', 
fan_controller.fan_update_put); 
 
// GET request for one Costume. 
router.get('/resource/fans/:id', fan_controller.fan_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/fans', fan_controller.fan_list); 
 
module.exports = router; 