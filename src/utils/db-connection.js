const { response } = require('express');
const {Pool,Client} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'batel',
    password:'1234',
    port:5434
})




const query= 'SELECT id,name FROM public."Demo "' + "WHERE (name = 'Batel');" 
pool.query(query,(err,res) => {
    if(err){
        console.log('error: querry not good!',err);
        pool.end()
    }else{
        console.log('connected' , res);
        pool.end();
    }
});


// pool.query('SELECT * FROM "Demo" ',(err,res) => {
//     if(err){
//         console.log('error: querry not good!',err);
//         pool.end()
//     }else{
//         console.log('connected' , res);
//         pool.end();
//     }
// });


