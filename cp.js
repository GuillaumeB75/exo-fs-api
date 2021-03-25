const { readFileSync, writeFileSync } = require('fs')    
const chalk = require('chalk')                           
const fs = require('fs')

// vérifier le nombre d'éléments saisis via la ligne de commande 

if (process.argv.length !== 4) {
  console.log(chalk.red('Utilisateur : node cp.js argument-1 argument-2'))
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


// Code du Programme

const txt = fs.readFileSync(process.argv[2], 'utf-8') 

fs.writeFileSync(process.argv[3], txt)
console.log(chalk.green(`le fichier a été copié`))
