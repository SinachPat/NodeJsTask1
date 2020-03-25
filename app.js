const http = require('http');
const fs = require('fs');

//var postHTML =

http.createServer(function (req, res) {
    //res.writeHead(200);
    const BASE = res.end('<html><head><title>Post Example</title></head>' +
    '<body>' +
    '<form method="post" action "/message">' +
    '<input type= "text" name="Message"><br>' +
    '<input type="submit" value="Submit">' +
    '</form>' +
    '</body></html>');

    if (req.method == "POST" && req.url == "/message")
    var body = "";
req.on('data', function (chunk) {
body += chunk.toString();
  });
req.on('end', function () {
    const POSTed = BASE;
    fs.writeFile('message.txt', POSTed, err => {
        if (err) throw err
    
        fs.appendFile('message.txt', "Finally!", err => {
            if (err) throw err 
            console.log('File created and saved!')
        });
    });
    //console.log('POSTed');
});
}).listen(8080);

//postHTML