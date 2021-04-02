var net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var client = net.connect(8000);
console.log('Connected to Server !!! - Enter Text (Quit to stop)')
var ask = function() {
    rl.question('', (value) => {
        if (value.toString() != 'Quit') {
            client.write(value.toString());
            ask();
        } else {
            rl.close();
            client.end();
            return;
        }
    });
}
ask();
client.on('data', function(data) {
    console.log(data.toString());
});
client.on('end', function() {
    console.log('I have disconnected !!!')
}); 