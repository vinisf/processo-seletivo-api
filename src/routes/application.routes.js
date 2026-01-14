const express = require("express");
const {
  apply,
  listByProcess,
  updateStatus
} = require("../controllers/application.controller");

const { ensureAuth, ensureAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", ensureAuth, apply);
router.get("/process/:processId", ensureAuth, ensureAdmin, listByProcess);
router.patch("/:id/status", ensureAuth, ensureAdmin, updateStatus);

module.exports = router;
