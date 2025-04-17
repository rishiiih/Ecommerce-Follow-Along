require("dotenv").config({ path: "../.env" });
const app = require("./app");
const connectDatabase = require("./db/database");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to an uncaught exception.`);
  process.exit(1);
});

try {
  connectDatabase();
} catch (err) {
  console.log(`Database Connection Error: ${err.message}`);
  process.exit(1);
}

// Create server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    "Shutting down the server due to an unhandled promise rejection."
  );

  server.close(() => {
    process.exit(1);
  });
});
