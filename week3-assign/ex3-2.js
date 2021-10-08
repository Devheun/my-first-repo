const express=require('express');
const port=3000;
const app=express();

app.set('views',`${__dirname}/views`);
app.set('view engine','pug');

app.get('/board/page/:page',(req,res)=>{
    const {page}=req.params;
    res.render('semantic.pug',{page});
});


app.listen(port,()=>console.log(`Server listening on port ${port}!`));
