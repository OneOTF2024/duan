const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// lấy dữ liêu từ Database
//1024officecenter
//L14cBQkttn9m6BBK
mongoose.connect(
  "mongodb+srv://1024officecenter:L14cBQkttn9m6BBK@cluster0.nou8gsk.mongodb.net/duan?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const line = new Schema({
  price: Number,
  dateOpen: Date,
  people: Number,
  numberLine: Number,
  thao: Number,
  idLine: String,
});
const LineModel = mongoose.model("listline", line);
module.exports = LineModel;
