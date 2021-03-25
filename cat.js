/*Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.*/


const readlineSync = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')

if (process.argv.length !== 3) {
  console.log(chalk.red(`utilisateur : vous devez saisir le nom du fichier`))
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Erreur : ${process.argv[2]} n'existe pas!`))
  process.exit(1)
}

let reading = fs.readFileSync('./file.txt', 'utf-8')

console.log(reading)
