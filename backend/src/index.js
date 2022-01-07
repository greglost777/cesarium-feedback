const express = require('express');
const routes = require('./routes')
const app = express();
const cors = require ('cors');
app.use(express.json());
app.use(routes);

app.listen(3333);
app.use(cors())