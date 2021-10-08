const express=require('express');
const port=3000;
const app=express();

app.set('views',`${__dirname}/views`);
app.set('view engine','pug');

//Redirect
app.get('/factorial',(req,res)=>{
    const {number}=req.query;
    res.redirect('/factorial/' + number);
});

//semantic URL
app.get('/factorial/:numb',(req,res)=>{
    const {numb}=req.params;
    const num=parseInt(numb,10);
    cnt=1;
    for(let i=1;i<=num;i++){
        cnt*=i;
    }
    res.render('factorial.pug',{numb,cnt});
});




app.listen(port,()=>console.log(`Server listening on port ${port}!`));
