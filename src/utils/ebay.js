d// const EbayAuthToken = require('ebay-oauth-nodejs-client');

// const ebayAuthToken = new EbayAuthToken({
//     clientId: 'BatelTab-Finalpro-SBX-f7a727799-b24b5d5a',
//     clientSecret: 'SBX-7a727799fd5c-c7a7-4360-b1f5-4e0e',
//     env: 'SANDBOX',
//     redirectUri: 'https://auth.sandbox.ebay.com/oauth2/authorize?client_id=BatelTab-Finalpro-SBX-f7a727799-b24b5d5a&response_type=code&redirect_uri=Batel_Tabachnik-BatelTab-Finalp-ianqrykg&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item'
// });

// if(ebayAuthToken){
//     console.log('good ' + ebayAuthToken)
// }else{
//     console.log('bed ' + ebayAuthToken)
// }



// const Ebay = require('ebay-node-api');
// let ebay = new Ebay({
//     clientID: 'BatelTab-Finalpro-SBX-f7a727799-b24b5d5a',
//     clientSecret: 'SBX-7a727799fd5c-c7a7-4360-b1f5-4e0e',
//     env: 'SANDBOX',
//     body: {
//         grant_type: 'client_credentials',
//     //you may need to define the oauth scope
//         scope: 'https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item'
//     }
// });

// //This call searches for items on eBay by a keyword query (keywords).
// ebay.findItemsByKeywords('iphone').then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });





const Ebay = require('ebay-node-api');

let ebay = new Ebay({
    clientID: '',
    clientSecret: '',
    body: {
        grant_type: 'client_credentials',
    //you may need to define the oauth scope
    scope:''
    }
});
ebay.getAccessToken().then((data) => {
    console.log('data ' + data); // data.access_token
}, (error) => {
    console.log(error);
});



















