const fs = require('fs');
const path=require('path');

const folder='./test';

function recursive(cur_path){
fs.readdir(cur_path,function(err,files){
    if(err){
        console.error(err);
    } 
    
    files.forEach(file=>{

        const next_path = path.join(cur_path,file);
        if(path.extname(next_path)==='.js')console.log(next_path);
        else{
            fs.stat(next_path,(err,stats)=>{
                if(stats.isDirectory()){
                    recursive(next_path);
                }
            })
        }
    });
})
}

recursive(folder);