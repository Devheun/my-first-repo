const express=require('express');
const port=3000;
const app=express();

app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/ex3-4.html`);
});

app.post('/login',(req,res)=>{

    let body=req.body;
    let str=Object.keys(body).map(k=>`${k} : ${body[k]}`).join('\n');
    res.send(str);

});

app.listen(port,()=>console.log(`Server listening on port ${port}!`));