import express from "express";
const router = express.Router();
import routeGet from "../controllers/userControllers.js";

router.get("/", routeGet);
export default router;
