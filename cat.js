const kitty = require('fs');

module.exports = feline;

function feline() {
    kitty.readFile('/etc/passwd', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}