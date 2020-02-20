const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const url=require('url');
const multer=require('multer');
const session=require('express-session');
const sql=require('mysql');

app.set('view engine','ejs');
// app.set('views',__dirname+'/../views');//指定ejs的路徑，不一定要設定

app.get('/shopcart1',(req,res)=>{
    res.render('shopcart1')
})


app.use((req,res)=>{
    res.type('text/html');
    res.status(404);
    res.send('找不到頁面');
})

app.listen(3000,()=>{
    console.log('啟動 port3000')
})