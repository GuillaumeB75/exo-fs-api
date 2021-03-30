const readlineSync = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')

if(process.argv.length === 4) {
  console.log(chalk.red('Utilisateur : node cp.js argument-1'))
  process.exit(1)
}

// vérifier l'existence du fichier

if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Erreur : ${process.argv[2]} n existe pas`))
  process.exit(1)
}

// vérifier s'il s'agit bien d'un fichier

const checkFile = fs.statSync(process.argv[2])

if (!checkFile.isFile()) {                                          // dans le cas où ce n'est pas un fichier
  console.log(chalk.red(`Erreur : ${process.argv[2]} n est pas un fichier`))
  process.exit(1)
}

let reading = fs.readFileSync('./file.txt', 'utf-8')
const line = reading.split(`\n`)


console.log(line.slice(-10))