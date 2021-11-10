var fan = require('../models/fan'); 
 
// List of all fans 
exports.fan_list = async function(req, res) { 
    try{ 
        thefans = await fan.find(); 
        res.send(thefans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function (req, res) {
    try {
        thefans = await fan.find();
        res.render("fan", {
        title: "fan Search Results",
        results: thefans,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific fan. 
exports.fan_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id); 
}; 
 

 
// Handle Apple delete form on DELETE. 
exports.fan_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id); 
}; 
 
// Handle Apple update form on PUT. 
exports.fan_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id); 
}; 

// Handle Costume create on POST. 
exports.fan_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new fan(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"apple_type":"goat", "quantity":12, "cost":"large"} 
    document.fan_type = req.body.fan_type; 
    document.color = req.body.color; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 