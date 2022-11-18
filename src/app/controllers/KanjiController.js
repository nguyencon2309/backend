const Kanjitext = require('../models/kanjitext');
const Compound = require('../models/compound')
const {mutipleMongooseToObject}=require('../../util/mongoose');
class KanjiController{
    lesson(req,res,next){
        let a=req.query.level
        Kanjitext.find({
           level:a 
        },{ _id:0,kanji:1,vocabulary:1},function(err,kanjitext){
            if (!err){
                res.json({
                    kanjitext
                });
            }
        })

    }

    detail(req,res,next){
        let a=req.body.text
        let kanj;
        Kanjitext.find({
            kanji:a        
        },{_id:0}, function(err,kanjitext){
            if(!err){
                kanj=kanjitext
                
            } else{
                res.status(400).json({error:'ERROR'});
            }
            // res.render('home');
        },
        );
        
        Compound.find({
            compound: {$regex: a, $options: 'i'}

        },{_id:0}, function(err,compound){
            if(!err){
                res.json({"kanji":kanj,"compounds":compound});
            } else{
                res.status(400).json({error:'ERROR'});
            }
        }

        );
        res.end;

    }

    //tim kiem theo hanviet nghia,...
    search(req,res,next){
        let arr;
        let a=req.body.text
        Kanjitext.find({
            $or:[{kanji:a},
                {vocabulary:{$regex: a, $options: 'i'}},
                {onyomi:{$regex: a, $options: 'i'}},
                {kunyomi:{$regex: a, $options: 'i'}},
                {mean:{$regex: a, $options: 'i'}}
            ]
        
        },{_id:0}, function(err,kanjitext){
            if(!err){
                // res.json({kanji});
                arr=kanjitext
                
            } else{
                res.status(400).json({error:'ERROR'});
            }
            // res.render('home');
        },
        );
        Compound.find({
            $or:[
            {vocabulary:{$regex: a, $options: 'i'}},
            {hiragana:{$regex: a, $options: 'i'}},
            {compound:{$regex: a, $options: 'i'}},
            {mean:{$regex: a, $options: 'i'}}
        ]

        },{_id:0}, function(err,compound){
            if(!err){
                res.json({"kanji":arr,"compounds":compound});
            } else{
                res.status(400).json({error:'ERROR'});
            }
        }

        );
    }

    searchimg(req,res,next){

        Kanji.find({
            kanjitext:req.body.text

            //tim kiem theo hinh anh or tu khoá

        }, function(err,kanji){
            if(!err){
                res.json({kanji});
            } else{
                res.status(400).json({error:'ERROR'});
            }
            // res.render('home');
        })

    }
}
module.exports = new KanjiController;