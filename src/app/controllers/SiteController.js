const Account = require('../models/account');
const Lesson = require('../models/lesson');
const Kanji = require('../models/kanjitext');
const {mutipleMongooseToObject}=require('../../util/mongoose')
class SiteController{
    
    
    listaccount(req,res,next){
        
        
        Account.find({}, function(err,account){
            if(!err){
                res.json({account});
            } else{
                res.status(400).json({error:'ERROR'});
            }
            // res.render('home');
        })
       

    }
    // search(req,res){
    //     res.render('search');
    // }
    search(req,res,next){//tim kiem chu kanji bang hinh anh
        
    }
    listlesson(req,res,next){
        
        
        Lesson.find({}, function(err,lesson){
            if(!err){
                res.json({lesson});
            } else{
                res.status(400).json({error:'ERROR'});
            }
            
        })
    }
    lesson(req,res,next){
        
        
        Kanji.find({idlesson:req.body.id}, function(err,kanji){
            if(!err){
                res.json({kanji});
            } else{
                res.status(400).json({error:'ERROR'});
            }
            
        })
    }

}

module.exports = new SiteController;