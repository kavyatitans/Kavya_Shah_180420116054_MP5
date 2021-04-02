var net = require('net');
var clients = 0;
function reverse(s){
    return s.split("").reverse().join("");
}

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(reverse(data.toString()));
    })
});

server.listen(8080, function() {
    console.log('Server Started on port 8000');
}) 