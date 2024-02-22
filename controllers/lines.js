const LineDB = require("../model/line");

// hiển thị danh sách các dây
exports.ListLine = (req, res, next) => {
  LineDB.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.status(401).json({ err: "err", message: err.message }));
};
exports.PostLine = (req, res, next) => {
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
};
exports.GetLineId = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  LineDB.find({
    idLine: id,
  })
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => res.status(401).json({ err: "err", message: err.message }));
};
