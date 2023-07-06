import express from "express";
const router = express.Router();
// import fun from "../middleware/fun.js";
// import homeController from "../controller/homeController.js";
import {
  CreateDoc,
  DeletDoc,
  UpdateDocById,
  getAlldoc,
  EditDoc,
} from "../controller/homeController.js";

router.post("/", CreateDoc);
router.get("/", getAlldoc);
router.get("/edit/:id", EditDoc);
router.post("/update/:id", UpdateDocById);
router.post("/delete/:id", DeletDoc);

export default router;
