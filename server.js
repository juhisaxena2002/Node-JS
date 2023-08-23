// server connection

//https module

const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req,res) =>{
    console.log("request has been made from browser to server");


    // console.log(req.method);
    // console.log(req.url);
    // res.setHeader('content-type','text/html');
    // res.write('<h1>Hello everyone! :)</h1>');
    // res.write('<h2>How you doing ! :)</h2>');
    // res.end();
//lodash

let num = _.random(0,200);
console.log(num);
    let path = './views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
        default :
        path += '/404.html';
        res.statusCode = 404;
    }
    fs.readFile(path,(err,filedata)=>{
        if(err) {
            console.log(err);
        }
        else {
            // res.write(filedata); // if we only want to render one page than no need to for "write" you can use "end"
            res.end(filedata);
        }
    })
});

//port number, host, callback number

server.listen(3000, 'localhost', ()=>{
    console.log("the server is listening on port number 3000");
})
