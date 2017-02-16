var express = require('express');
var router = express.Router();

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBBqoKA5F1E5_MR427Z1kyGwMP5zNGjejQ', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

router.post('/lookup',function(req,res,next){
    geocoder.geocode(req.body.address, function(err, res2) {
        return res.json(res2);
    });
});
module.exports = router;