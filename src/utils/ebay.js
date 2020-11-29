const Ebay = require('ebay-node-api');
const fs = require('fs');

let ebay = new Ebay({
    clientID: 'BatelTab-Finalpro-PRD-37c01d8ca-c4148cf3',
    clientSecret: 'PRD-7c01d8ca41a4-1fe7-4484-9c1a-93d3',
    body: {
        grant_type: 'client_credentials',
        //you may need to define the oauth scope
        scope: 'https://api.ebay.com/oauth/api_scope'
    }
});

// ebay.getAccessToken().then((data) => {
    
//     ebay.findItemsByKeywords({
//         keywords: 'cell phone',
//         //filter:' "priceCurrency" : "ILS" , "minPrice" : "1160.00" , "condition" : "Buy It Now"  ',
//         filter:{price: '[300..800]', priceCurrency: 'USD', conditions: 'NEW'}, 
//         limit: 3
//     }).then((data1) => {
//         console.log('lalalalalalalala')
//         const JasonBook =JSON.stringify(data1);
//         fs.writeFileSync('ebay.json',JasonBook);
//     }, (error) => {
//         console.log(error);
//     });

// }, (error) => {
//     console.log(error);
// });

ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'cell phone',
            limit:50,
            offset:1,
          filter: 'price:[1600],priceCurrency:ILS,buyingOptions:{FIXED_PRICE},conditions:{NEW}' 
        }).then((data1) => {
            fs.writeFileSync('ebay.json',data1);
        })
});



















































// const findPhons = function () {
//     const url = 'https://svcs.ebay.com/services/search/FindingService/v1?'
//     const serviceName = '&SERVICE-NAME=FindingService'
//     const serviceVertion = '&SERVICE-VERSION=1.0.0'
//     const servicrAppID = '&SECURITY-APPNAME=YourAppID'

// }

// https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords
  
   
//    &RESPONSE-DATA-FORMAT=XML
//    &REST-PAYLOAD
//    &keywords=harry%20potter%20phoenix

























// const dataBuffer = fs.readFileSync('ebay.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);

// console.log(data[0].searchResult[0].item[2])







// const request = require ('request')

// const forecast = (long, lat, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=686cef5e667dff17bfd807e370258ec2&query='+encodeURIComponent(lat)+','+encodeURIComponent(long)+'&units=f'
//     request({url,json:true},(error,{body}) => {    
//         if(error){
//             callback('Unbable to connect to weather serveses!',undefined);
//         }else if(body.success === false){
//             callback('Unable to find location',undefined);
//         }else{ 
//             const current = body.current
//             const str = current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degress out. It feels like '+current.feelslike +' degress out.'
//             callback(undefined,str);
//         }
//     })
// }

// module.exports = forecast





// ebay.findItemsByKeywords({
//     keywords: 'cell phone',
//     filter:{"minPrice":300},
//     limit: 3
// }).then((data1) => {
//     const JasonBook =JSON.stringify(data1);
//     fs.writeFileSync('ebay.json',JasonBook);
// }, (error) => {
//     console.log(error);
// });






















