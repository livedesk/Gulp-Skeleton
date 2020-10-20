var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './public/',
    port: 3000
});

server.start(function(){
    
    console.log('Server started on port ' + server.port);
});


// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();

// // router.get('/',function(req,res){
// //   console.log('dir: ' + __dirname);
// //   res.sendFile(path.join(__dirname+'/public/index.html'));
// //   //__dirname : It will resolve to your project folder.
// // });

// // router.get('about',function(req,res){
// //   res.sendFile(path.join(__dirname+'/public/about.html'));
// // });

// // router.get('sitemap',function(req,res){
// //   res.sendFile(path.join(__dirname+'/public/sitemap.html'));
// // });

// //add the router
// //app.use('/', router);
// app.use(express.static('public'));
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');