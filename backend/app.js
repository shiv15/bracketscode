 /*
 dependencies
    express-fileupload ^0.2.0,
    extract-zip ^1.6.5,
*/
//use below middleware first
const fileUpload = require('express-fileupload');
const extract = require('extract-zip');
const fs = require('fs');
const app = require('express')();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ejs = require('ejs');


app.set('view engine', 'ejs');

app.use('*', (req, res, next) => {
    // if unauthenticated and a fyler call, return a JSON
    console.log(req.header('Origin'));
    //log.info('env ', process.env.CORS_ALLOWED_ORIGINS, req.header('Origin'));
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.sendStatus(200);

    } else {
     next();
    }
  });

app.use(fileUpload());
app.get('/', function (req, res ) {
  res.render('index');  
});
app.post('/', function(req, res) {
  //res.send(Blob);
});
app.post('/zipfile', function(req, res) {

  console.log(req.body);
  res.send(req.body);
});


app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

   //The name of the input field (i.e. sampleFile) is used to retrieve the uploaded file
  let sampleFile = req.files.fileField;
  console.log(req.files);

   //Use the mv() method to place the file somewhere on your server
  sampleFile.mv('UserskrishnaDesktopssh-edit-expressuploadsexample.zip', function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    extract('UserskrishnaDesktopssh-edit-expressuploadsexample.zip', {dir: 'C:/Users/Shivendu/Documents/Appler/brackets/backend/views'}, function (err) {
    //  extraction is complete. make sure to handle the err
      if(err) {
        return res.status(500).send(err);
      }
     ///  delete the zip file once the extraction is done
      fs.unlink('UserskrishnaDesktopssh-edit-expressuploadsexample.zip', (err) => {
        if (err) throw err;
        console.log('successfully deleted UserskrishnaDesktopssh-edit-expressuploadsexample.zip');
      });

      res.send('zip File uploaded!');
    })

  });
});
app.listen(8001);