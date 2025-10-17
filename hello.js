const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ป้อนชื่อ: ', (name) => {
  name = name.trim();
  console.log('Hello World' + (name ? ' ' + name : ''));
  rl.close();
});