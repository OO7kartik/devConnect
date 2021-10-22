const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('mongodb connected...');
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
