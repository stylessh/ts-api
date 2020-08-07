import { Router } from "express";
const router: Router = Router();
import { profile, signin, signup } from "../controllers/auth.controller";
import { tokenValidation } from "../lib/verifyToken";

// register
router.post("/signup", signup);
// login
router.post("/signin", signin);
// profile
router.get("/profile", tokenValidation, profile);

export default router;
