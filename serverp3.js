var net = require('net');
var clients = 0;
function sumdigit(value){
    var sum = 0;
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
return sum.toString();
}

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(sumdigit(Number(data.toString())));
    })
});

server.listen(8080, function() {
    console.log('Server Started on port 8000');
}) 