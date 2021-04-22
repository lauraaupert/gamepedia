const router = require("express").Router();
const gameRoutes = require("./games");
const userRoutes = require("./user");

// Book routes
router.use("/api/games", gameRoutes);
router.use("/api/", userRoutes)

module.exports = router;