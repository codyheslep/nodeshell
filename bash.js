const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl')

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const splitCommand = cmd.split(' ');
  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if (splitCommand[0] === 'cat') {
    cat(splitCommand[1]);
  }
  if (splitCommand[0] === 'curl') {
    curl(splitCommand[1]);
  }
  process.stdout.write('\nprompt > ');

})
