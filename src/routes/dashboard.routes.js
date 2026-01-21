import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getDashboardSummary } from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/summary", authMiddleware, getDashboardSummary);

export default router;
