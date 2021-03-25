const chalk = require('chalk')

console.log('commande echo')

if (process.argv.length === 2) {
  console.log(chalk.red('utilisateur : veuillez saisir plus d informations'))
  process.exit(1)
}

let string = ''

for (let i = 2 ; i < process.argv.length ; ++i) {
  string += `${process.argv[i]}`
}

console.log(chalk.green(string))
