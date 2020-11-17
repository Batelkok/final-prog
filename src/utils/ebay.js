
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



















