const { runQuery } = require('./database');
const express=require('express');
const port=3000;
const app=express();

app.use(express.urlencoded({extended: true}));

app.get('/fare', async(req,res)=>{
    try{
    const {uid} = req.query;

    const sql = `select users.name, `+
                `sum(round(types.fare_rate * trains.distance/1000,-2)) as totalfare `+
                `from tickets inner join users on tickets.user = users.id and users.id = '${uid}' ` +
                `inner join trains on tickets.train = trains.id inner join types on trains.type=types.id`;
    const {name, totalfare} = (await runQuery(sql,[parseInt(uid,10)]))[0];
    return res.send(`Total fare of ${name} is ${totalfare} KRW.`);
    } catch (err){
        console.error(err);
        return res.sendStatus(500);
    }
});

app.get('/train/status',async(req,res)=>{
    try {
        const {tid}=req.query;
        const sql = `select count(*) as occupied, max_seats as maximum from trains `+
                    `inner join tickets on tickets.train=trains.id inner join types on trains.type = types.id and tickets.train='${tid}'`;
        const {occupied, maximum} = (await runQuery(sql,[parseInt(tid,10)]))[0];
        
        const isSeatsLeft = occupied < maximum;
        return res.send(`Train ${tid} is ${isSeatsLeft ? 'not sold out' : 'sold out'}`);
    } catch(err){
        console.error(err);
        return res.sendStatus(500);
    }
});

app.listen(port,()=>console.log(`Server listening on port ${port}!`));

