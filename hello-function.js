const readline = require('readline');

function formatGreeting(name) {
  name = (name || '').trim();
  return 'Hello World' + (name ? ' ' + name : '');
}

function askAndGreet(promptText) {
  promptText = promptText || 'ป้อนชื่อ: ';
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(promptText, function(name) {
    console.log(formatGreeting(name));
    rl.close();
  });
}

if (require.main === module) {
  askAndGreet();
}
