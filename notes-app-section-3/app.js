const getNotes = require('./notes.js')
const chalk = require('chalk');
const msg = getNotes()
console.log(msg)
console.log(chalk.green('Success!'));
console.log(chalk.inverse.red('Failure!'));
console.log(chalk.inverse.yellow('Chinese!'));
console.log(chalk.blue.bgGreen.bold.italic('this is blue text with green bg and with bold and italics'));