const express = require("express");
const router = express.Router();
const housingController = require("../controllers/housingcontroller");

// Route untuk mendapatkan semua data housing
router.get("/", housingController.Index);

module.exports = router;