const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/client/public'))


app.get('/', function(req, res) {
  res.render('index.html');
});



app.listen(port);
