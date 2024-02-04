var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

//Комментарий из ветки моделей 
router.get('/',adminController.getArticleAll);
router.get('/idArticle',adminController.getArticle);
router.post('/addArticle',adminController.addArticle);
router.post('/ediArticle',adminController.ediArticle);
router.post('/deleteArticle',adminController.deleteArticle);

module.exports = router;