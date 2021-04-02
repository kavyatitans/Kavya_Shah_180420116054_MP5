var net = require('net');
var clients = 0;
function sumdigit(value){
    var flag,number,remainder,addition = 0;
		number = value;

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}
        console.log(addition,flag)
		if(addition == flag)
		{
			return("-The inputed number is Armstrong");
		}
		else
		{
			return("-The inputed number is not Armstrong");
		}
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