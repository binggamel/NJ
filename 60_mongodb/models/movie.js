const mongoose = require("mongoose");

//schema create
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim : true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    year: {
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
module.exports = mongoose.model("movie", MovieSchema);