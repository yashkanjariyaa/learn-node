var http = require('http');
var dt = require('./Modules/myModule.js');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The date and time are : "+dt.myDateTime());
    res.end();
}).listen(8080);