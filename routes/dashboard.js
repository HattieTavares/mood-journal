//Handles initial GET request for dashboard
//Handles POST method request for adding a new task

const express = require("express")
const router = express.Router()
const dashboardController = require("../controllers/dashboard")
const checkinController = require("../controllers/checkin")
const { ensureAuth } = require("../middleware/auth")

//add specific routes for specific tasks
router.get("/", ensureAuth, dashboardController.getDashboard)
router.get("/checkin", ensureAuth, checkinController.getCheckin)

module.exports = router