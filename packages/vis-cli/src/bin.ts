import console from 'node:console'
import process from 'node:process'

import { program } from './command.js'

console.log(program.parse(process.argv))
