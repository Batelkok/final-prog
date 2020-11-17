const path = require('path');
const express = require('express')
const hbs = require('hbs')
const Ebay = require('ebay-node-api');

//define paths for Express config
const publicDirPath = path.join(__dirname,'../public')
const viewsDirPath  = path.join(__dirname,'../templets/views')
const partialsDirPath  = path.join(__dirname,'../templets/partials')

//initialize app 
const app = express()

//Setup hedlebars engin and views location
app.set('view engine','hbs');
app.set('views',viewsDirPath);
hbs.registerPartials(partialsDirPath);

//Setup static dir to serve

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index',()=>{
        console.log('hellow world!')
    })
})

//startup the server
app.listen(3000 , () =>{
    console.log('Server is up on port 3000.')
})
