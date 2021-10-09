const express=require('express');
const port=3000;
const app=express();

app.use(express.urlencoded({extended: true}));
app.set('views',`${__dirname}/views`);
app.set('view engine','pug');

app.get('/',(req,res)=>{
    let query=req.query;
    let str=Object.keys(query).map(k=>`${k} : ${query[k]}`).join('\n');
    res.send(str);
});

app.post('/',(req,res)=>{
    let body=req.body;
    let str=Object.keys(body).map(k=>`${k} : ${body[k]}`).join('\n');
    res.send(str);
});

app.put('/',(req,res)=>{
    let body=req.body;
    let str=Object.keys(body).map(k=>`${k} : ${body[k]}`).join('\n');
    res.send(str);
});

app.delete('/',(req,res)=>{
    let body=req.body;
    let str=Object.keys(body).map(k=>`${k} : ${body[k]}`).join('\n');
    res.send(str);
});

app.listen(port,()=>console.log(`Server listening on port ${port}!`));