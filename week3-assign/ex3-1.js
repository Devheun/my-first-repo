const express=require('express');
const port=3000;
const app=express();

app.use(express.urlencoded({extended : true}));
app.set('views',`${__dirname}/views`);
app.set('view engine','pug');

app.get('/',(req,res)=>{
    const {query}=req.query;
    
    res.render('get.pug',{query});
});

