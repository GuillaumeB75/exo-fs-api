/*
Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas.*/




const readlineSync = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')

if(process.argv.length < 4 ) {
  console.log(chalk.red(`Error : node append.js file.txt (file(s) optionnal(s)...) dst.txt`))
  process.exit(1)
}

for (i = 2; i < process.argv.length -1; ++i) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error : ${process.argv[i]} doesn't exist !`)
    process.exit(1)
}

const checkFile = fs.statSync(process.argv[i])

if (!checkFile.isFile()) {                                         
  console.log(chalk.red(`Error : ${process.argv[i]} isn't a file`))
  process.exit(1)
}
}

let readingfile = ''

for (i = 2; i < process.argv.length - 1; ++i) {
  readingfile += fs.readFileSync(process.argv[i], 'utf-8')

}

const copy = process.argv[process.argv.length - 1]
fs.writeFileSync(copy, readingfile)