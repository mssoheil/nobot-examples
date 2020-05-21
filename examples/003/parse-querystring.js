const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));
console.log(`hi my name is ${parsedUrl.myName}`);
console.log(`hi my age is ${parsedUrl.myAge}`);
console.log(`hi my comment is ${parsedUrl.comment}`);
