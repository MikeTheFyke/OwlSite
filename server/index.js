var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());

const signs = require('./routes/api/signs');
const items = require('./routes/api/items');
const orders = require('./routes/api/orders');
const receipts = require('./routes/api/receipt');
const carriers = require('./routes/api/carriers');

app.use('/api/signs', signs)
app.use('/api/items', items)
app.use('/api/orders', orders)
app.use('/api/receipt', receipts)
app.use('/api/carriers', carriers)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));