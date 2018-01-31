let express = require('express');
let app =express();

app.get('/',(req,res) => res.send('Hello world!'));

app.get('/home',(req,res) => res.send('Hello world see you later!'));

app.listen(3000, ()=> console.log('Example app listening on port 3000!'));