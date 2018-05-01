const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const port = process.env.PORT || 3000;
const app = express();

//server
app.listen(port,() => {
  console.log('App running at port ',port);
})
