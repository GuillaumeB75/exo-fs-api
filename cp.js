const { readFileSync, writeFileSync } = require('fs')
const chalk = require('chalk')
const fs = require('fs')

if (process.argv.length !== 4) {
  console.log(chalk.red('Utilisateur : node cp.js argument-1 argument-2'))
  process.exit(1)
}


const txt = fs.readFileSync(process.argv[2], 'utf-8')

fs.writeFileSync(process.argv[3], txt)