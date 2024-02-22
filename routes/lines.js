const express = require("express");
const router = express.Router();
const { ListLine, PostLine, GetLineId } = require("../controllers/lines");
// hiển thị danh sách các dây
router.get("/lines", ListLine);
// tạo dây mới
router.post("/lines", PostLine);
// tìm kiếm dây theo IdLine
router.get("/lines/:id", GetLineId);
module.exports = router;
