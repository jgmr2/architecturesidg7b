const express = require("express");
const router = express.Router();
const reporteController = require("../controllers/reporteController");
//http://localhost:3000/api/reportes/getAllReports
//GET
router.get("getAllReports", reporteController.getReportes);
//POST
router.post("/createReports", reporteController.createReporte);

module.exports = router;
