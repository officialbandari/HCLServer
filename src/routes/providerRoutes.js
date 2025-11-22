const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");
const { authenticateToken, requireProvider } = require("../middleware/auth");

// Protect all routes with authentication
// router.use(authenticateToken);

// Public route for provider registration
router.post("/", providerController.createProvider);

// Protected routes for providers only
router.use(requireProvider);
router.get("/", providerController.getAllProviders);
router.get("/:id", providerController.getProviderById);
router.put("/:id", providerController.updateProvider);
router.delete("/:id", providerController.deleteProvider);

module.exports = router;
