var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // xu ly du lieu hoac la truy van vao database
    var array = [
        {id: 0, name: 'Huy Nguyen 0'},
        {id: 1, name: 'Huy Nguyen 1'},
        {id: 2, name: 'Huy Nguyen 2'},
        {id: 3, name: 'Huy Nguyen 3'},
        {id: 4, name: 'Huy Nguyen 4'},
        {id: 5, name: 'Huy Nguyen 5'},
    ]
    res.render('index', {data : array,title: 'Express', name: 'Huy Nguyen'});
});

router.get('/asia',function (req,res) {
    console.log('asia')
    res.render('category',{title : 'Asia'});
})
router.get('/euro',function (req,res) {
    console.log('euro')
    res.render('category',{title : 'Euro'});
})
router.get('/america',function (req,res) {
    console.log('America')
    res.render('category',{title : 'America'});
})

router.get('/about',function (req,res) {
    console.log('About')
    res.render('about',{title : 'About'});
})

module.exports = router;
