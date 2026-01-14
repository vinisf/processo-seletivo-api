const express = require("express");
const {
  createProcess,
  listProcesses,
  getProcess,
  updateStatus
} = require("../controllers/process.controller");

const { ensureAuth, ensureAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", ensureAuth, ensureAdmin, createProcess);
router.get("/", listProcesses);
router.get("/:id", getProcess);
router.patch("/:id/status", ensureAuth, ensureAdmin, updateStatus);

module.exports = router;
