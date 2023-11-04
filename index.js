const express = require("express");
const usecontroller = require('./route/user')
const app = express();

app.use(express.json());
app.use(usecontroller)




app.listen(8000,console.log('server listening to port 8000'));