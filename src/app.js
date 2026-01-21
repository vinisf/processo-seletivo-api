const express = require("express");
const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://processo-seletivo-web.vercel.app" 
  ],
  credentials: true
}));


const authRoutes = require("./routes/auth.routes");

const app = express();
const processRoutes = require("./routes/process.routes");
const applicationRoutes = require("./routes/application.routes");

app.use("/processes", processRoutes);
app.use("/applications", applicationRoutes);

const dashboardRoutes = require("./routes/dashboard.routes.js");

app.use("/dashboard", dashboardRoutes);



app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

module.exports = app;
