// src/routes/companyRoutes.js
const express = require("express");
const router = express.Router();
const { createCompany, getAllCompanies, toggleCompanyStatus, deleteCompany} = require("../controllers/companyController");
const { verifyToken } = require("../middleware/authMiddleware");
const { requireRole } = require("../middleware/roleMiddleware");

router.post("/", verifyToken, requireRole("SuperAdmin"), createCompany);
router.get("/", verifyToken, requireRole("SuperAdmin"), getAllCompanies);
router.patch("/:id/status", verifyToken, requireRole("SuperAdmin"), toggleCompanyStatus);
router.delete('/:id', verifyToken, requireRole('SuperAdmin'), deleteCompany);

module.exports = router;
