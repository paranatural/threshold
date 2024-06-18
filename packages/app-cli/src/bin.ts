import console from 'node:console'
import process from 'node:process'

import { Command } from 'commander'

import { program as visProgram } from '@paranatural/threshold-vis-cli/command'
import { program as lintProgram } from '@paranatural/threshold-lint-cli/command'

const program = new Command()

program.usage('[command] [options]')
program.description('project structure and architecture toolkit')

program.addCommand(visProgram.name('vis'))
program.addCommand(lintProgram.name('lint'))

program.configureHelp({
  sortSubcommands: true,
})

program.parse(process.argv)

console.log(program.opts())
