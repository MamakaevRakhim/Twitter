const { Router } = require("express");
const { savedController } = require("../controllers/saved.controller");

const router = Router();

router.post("/saved/:post", savedController.addSaved);
router.get("/saved", savedController.showSaved);
router.delete("/saved/:post", savedController.removeSaved);

module.exports = router;
