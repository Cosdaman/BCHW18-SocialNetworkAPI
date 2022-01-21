const mongoose = require('mongoose');
const dbName = 'socialNetworkDB';

mongoose.connect(`localhost://127.0.0.1:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;
