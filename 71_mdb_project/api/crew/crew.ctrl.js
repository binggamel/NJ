const UserModel = require("../../../70_mdb_project/models/user");
const mongoose = require("mongoose");

//유효한 id인지 체크 function
const checkId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).end();
  }
  next();
};

//목록 조회
// - 성공 : limit 수만큼 music 객체를 담는 배열을 리턴 (200: OK)
// - 실패 : limit가 숫자가 아닌경우 (400: Bad Request)
const list = (req, res) => {
  const limit = parseInt(req.query.limit || 10, 10);
  if (Number.isNaN(limit)) return res.status(400).end();

  // res.json(music.slice(0, limit));

  var channel = res.locals.user.channel;

  UserModel.find({ channel: channel }, err, result => {
    if (err) return res.status(500).end();
    console.log("~UserModel에서 찾음");
    res.render("crew/list", { result });
  }).sort({ _id: -1 });
};

//상세조회 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 music 객체 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400 : Bad Request)
//          해당하는 id가 없는 경우(404 : Not Found)

const detail = (req, res) => {
  const id = req.params.id;

  //id로 조회
  UserModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.render("crew/detail", { result });
  });
};

//delete (DELETE localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체를 배열에서 삭제 후 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//         해당하는 id가 없는 경우(404 : Not Found)
const remove = (req, res) => {
  const id = req.params.id;

  //2. id에 해당하는 Document를 찾아ㅏ서 DB에서 삭제
  UserModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).send("삭제 시 오류가 발생했습니다!");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
};

module.exports = {
  list,
  detail,
  remove,
  checkId
};
