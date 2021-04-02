var net = require('net');
var clients = 0;

function CheckPrime(n){
    if (n===1) {
      return "Not Prime";
    }else if(n === 2){
      return "Prime";
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return "Not Prime";
        }
      }
      return "Prime";  
    }
  }

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(CheckPrime(Number(data.toString())));
    })
});

server.listen(8080, function() {
    console.log('Server Started on port 8000');
}) 