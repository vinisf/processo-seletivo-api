const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const processRoutes = require("./routes/process.routes");
const applicationRoutes = require("./routes/application.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

/**
 * 🔥 MIDDLEWARES PRIMEIRO
 */
app.use(cors());              // ✅ CORS PRIMEIRO
app.use(express.json());

/**
 * 🔥 ROTAS DEPOIS
 */
app.use("/auth", authRoutes);
app.use("/processes", processRoutes);
app.use("/applications", applicationRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;
