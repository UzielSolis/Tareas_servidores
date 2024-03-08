const router = require("express").Router();
const authRoutes = require("../routes/auth.routes");
const newsRoutes = require("../routes/news.routes");

router.get("/", (req, res) => {
    res.send("index routes works!");
});

router.use("/auth", authRoutes);
router.use("/news", newsRoutes);

module.exports = router;