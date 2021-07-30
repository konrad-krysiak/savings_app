const mongoose = require('mongoose');
const { database } = require('../config');

//db connect
mongoose.connect('mongodb://127.0.0.1:27017/savings_app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

