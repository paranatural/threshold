import process from 'node:process'
import console from 'node:console'

import minimist from 'minimist'

import { createThresholdCore } from '@paranatural/threshold-core'
import { createThresholdLint } from '@paranatural/threshold-lint'
import formatter from '@paranatural/threshold-lint-formatter-pretty'

const thresholdCore = createThresholdCore({
  initialValue: [],
})

thresholdCore.vfsUnitsList.watch(console.log)

const thresholdLint = createThresholdLint({
  core: thresholdCore,
})

thresholdLint.warnings.watch(warnings => {
  console.log(formatter(warnings))
})

console.log(minimist(process.argv.slice(2)))
