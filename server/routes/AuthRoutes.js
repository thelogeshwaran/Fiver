import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/signup", signup);

export default authRoutes;
