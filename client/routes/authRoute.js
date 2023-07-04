import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
//router object:
const router = express.Router();

//routing:
//REGISTER || METHOD POST:
// post takes two parameters: (url_pattern,callBack func);
// this callBack function controls the method used which we define in the controllers folder.
// here register is our url-pattern and
router.post("/register", registerController);

//LOGIN || METHOD POST:
router.post("/login", loginController);

//FORGOT PASSWORD || POST:
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route for user:
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
//update profile:
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//admin-all-orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update:
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
