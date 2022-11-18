const express=require("express")
const router=express.Router();

const siteController = require('../app/controllers/SiteController');
const accountController = require('../app/controllers/AccountController');
const kanjiController= require('../app/controllers/KanjiController');
const compoundController = require('../app/controllers/CompoundController');

router.get('/listlesson',siteController.listlesson)
router.get('/lesson',kanjiController.lesson)
router.post('/login',accountController.login)
router.post('/logout',accountController.logout)
router.post('/signin',accountController.signin)
router.post('/detail',kanjiController.detail)

//router.get('/showtughep',kanjiControlle.show)
router.post('/search',kanjiController.search)


//just admin
router.get('/listaccount',accountController.requiresLogin,accountController.isAdmin,siteController.listaccount)


//compound
router.post('/compound/create',accountController.requiresLogin,accountController.isAdmin,compoundController.create)

router.post('/compound/update',accountController.requiresLogin,accountController.isAdmin,compoundController.update)
router.post('/compound/delete',accountController.requiresLogin,accountController.isAdmin,compoundController.delete)


module.exports=router;