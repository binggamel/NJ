const mongoose = require("mongoose");

//schema create
const MusicSchema = new mongoose.Schema({
    singer: {
        type: String,
        required: true,
        trim : true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


//스키마를 통한 모델 객체 생성  
//mongoose.model("모델 명", 스키마) -> 모델명s
module.exports = mongoose.model("music", MusicSchema);