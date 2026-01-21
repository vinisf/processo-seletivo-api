const express = require("express");
const { getDashboardSummary } = require("../controllers/dashboard.controller");
const { ensureAuth, ensureAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/summary", ensureAuth, ensureAdmin, getDashboardSummary);

module.exports = router;
