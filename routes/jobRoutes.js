import express from "express";
import {
  showStats,
  createJob,
  updateJob,
  deleteJob,
  getAllJobs,
  showStatsAlt,
} from "../controllers/jobController.js";
import testUser from "../middleware/testUser.js";

const router = express.Router();

// add testUser middleware to block some route (all except the GETs)
router.route("/").post(testUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/statsAlt").get(showStatsAlt);
//:id MUST BE THE LAST!!!!!!!!
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);

export default router;
