/*Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt
Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas.*/


const readlineSync = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')                        

// vérification du  nombre d'arguments saisis en ligne de commande

if (process.argv.length !== 5) {
  console.log(chalk.red('Utilisateur : node cp.js argument-1 argument-2 argument-3'))
  process.exit(1)
}

// vérifier que le fichier existe

for (i = 2; i < process.argv.length; ++i) {
  if (!fs.existsSync) {
  console.log(chalk.red(`Erreur : ${process.argv[i]} n'existe pas!`))
  process.exit(1)
 }


// code principal

let reading = fs.readFileSync(process.argv[i], 'utf-8')

console.log(reading)
}