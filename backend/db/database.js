const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbUrl = process.env.DB_URL;

  if (!dbUrl) {
    console.error("❌ Error: DB_URL is undefined. Check your .env file.");
    process.exit(1);
  }

  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    })
    .then((data) => {
      console.log(`✅ MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`❌ Database connection failed: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
