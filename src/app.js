const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const processRoutes = require("./routes/process.routes");
const applicationRoutes = require("./routes/application.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

/**
 * 🔥 MIDDLEWARES 
 */

// ✅ CORS
app.use(cors());             
app.use(express.json());

/**
 * 🔥 ROTAS
 */
app.use("/auth", authRoutes);
app.use("/processes", processRoutes);
app.use("/applications", applicationRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;
