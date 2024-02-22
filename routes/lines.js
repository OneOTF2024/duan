const express = require("express");
const LineDB = require("../model/line");
const router = express.Router();
// hiển thị danh sách các dây
router.get("/lines", (req, res, next) => {
  LineDB.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(401).json({ err: "err", message: err.message }));
});
// tạo dây mới
router.post("/lines", (req, res, next) => {
  const body = req.body;
  LineDB.create({
    price: body.price,
    dateOpen: body.date,
    people: body.people,
    numberLine: body.line,
    thao: body.thao,
    idLine: body.idLine,
  })
    .then(() => {
      res.status(200).json("thêm Dây mới thành công");
    })
    .catch((err) => res.status(401).json({ err: "err", message: err.message }));
});
// tìm kiếm dây theo IdLine
router.get("/lines/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  LineDB.find({
    idLine: id,
  })
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => res.status(401).json({ err: "err", message: err.message }));
});
module.exports = router;
