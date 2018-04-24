process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const commands = {
    pwd : function(){
      return process.cwd();
    }
  }

  const cmd = data.toString().trim();

  if (commands.hasOwnProperty(cmd)) {
    console.log(commands[cmd]());
  }

  process.stdout.write('\nprompt > ');

})

//process.cwd()
