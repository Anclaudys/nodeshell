//Output prompt
const ls = require('./ls');
const pwd = require('./pwd')
const cat = require('./cat')
process.stdout.write('prompt >');
//The data event sort of like click 
//The stdin 'data' event fires after typing
process.stdin.on('data', (data) => { //similar to event listener-ish input listening. 
    const cmd = data.toString().trim();//String
    const arg = data.toString().split(` `)[1];
    process.stdout.write('\nprompt >');
    if (cmd === `pwd`) {
        pwd()
    }
    else if (cmd === `cat`) {
        cat(arg) //with that second word if first is cat=
    }
    else if (cmd === 'ls')
        ls()
    else {
        process.stdout.write('You typed: ' + cmd)
    }
})

(cmd.split(` `)[0]==='cat' && )