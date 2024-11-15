const express = require("express");
const app = express();
const http = require("http");
const db = require("./models");
const cors = require("cors");
const dotenv = require("dotenv");
const server = http.createServer(app);
// Load environment variables before accessing them
dotenv.config();

//ROUTES

const loginRoute = require("./routes/loginRoute");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/login", loginRoute);

const PORT = process.env.PORT || 9001;

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(
      `Server is running on port: http://localhost:${PORT}, Server running in ${process.env.NODE_ENV} mode`
    );
  });
});
