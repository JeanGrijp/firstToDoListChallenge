const mongoose = require('mongoose');

module.exports = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      },
    );

    mongoose.connection.once('open', () => {
      console.log('DB connected');
    });
  } catch (error) {
    console.log(`Couldn't connect to database: ${error}`);
  }
}
