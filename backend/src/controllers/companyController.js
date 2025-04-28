// src/controllers/companyController.js
const { Company } = require("../models");

// Create Company
exports.createCompany = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const existing = await Company.findOne({ where: { email } });

    if (existing) {
      return res.status(400).json({ message: "Company with this email already exists." });
    }

    const company = await Company.create({ name, email });
    res.status(201).json({ message: "Company created", company });
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All Companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json({ companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Toggle Company Status
exports.toggleCompanyStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    company.status = !company.status;
    await company.save();

    res.status(200).json({ message: "Status updated", company });
  } catch (error) {
    console.error("Error toggling status:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete Company
exports.deleteCompany = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    await company.destroy();
    res.status(200).json({ message: "Company deleted successfully", company });
  } catch (error) {
    console.error("Error deleting company:", error);
    res.status(500).json({ message: "Error deleting company", error: error.message });
  }
};
