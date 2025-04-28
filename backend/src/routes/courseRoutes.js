const express = require("express");
const router = express.Router();
const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
  getCoursesByCompany,
  assignCourseToUser,
  updateUserCourseProgress,
  markCourseAsCompleted
} = require("../controllers/courseController");


const { verifyToken } = require("../middleware/authMiddleware");
const { requireRole } = require("../middleware/roleMiddleware");

router.post("/", verifyToken, requireRole("SuperAdmin"), createCourse);
router.get("/", verifyToken, requireRole("SuperAdmin"), getCourses);
router.patch("/:id", verifyToken, requireRole("SuperAdmin"), updateCourse);
router.delete("/:id", verifyToken, requireRole("SuperAdmin"), deleteCourse);
router.get("/company/:companyId", verifyToken, requireRole("SuperAdmin"), getCoursesByCompany);

// New routes for user-course assignment and progress tracking
router.post("/assign", verifyToken, requireRole("SuperAdmin"), assignCourseToUser); // Assign course to user
router.patch("/progress", verifyToken, requireRole("SuperAdmin"), updateUserCourseProgress); // Update user progress
router.patch("/complete", verifyToken, requireRole("SuperAdmin"), markCourseAsCompleted); // Mark course as completed

module.exports = router;