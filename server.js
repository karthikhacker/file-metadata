const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const port = process.env.PORT || 3000;
const app = express();
//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(__dirname + '/public'));
//routes
app.post('/upload',upload.single('file'),(req,res) => {
  if(!req.file){
    res.json({message:"Select a file"});
  }
  res.json(req.file);
});
//server
app.listen(port,() => {
  console.log('App running at port ',port);
})
