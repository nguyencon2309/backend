const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const kanjitext =  new Schema({
    kanji:String,
    vocabulary:String,
    onyomi:String,
    kunyomi:String,
    mean:String,
    level:String

})

module.exports = mongoose.model('kanjis',kanjitext);
