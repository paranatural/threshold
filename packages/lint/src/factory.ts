import { createStore } from 'effector'

import { ThresholdCore } from '@paranatural/threshold-core'

import { Warning } from './warnings.js'

export interface ThresholdLintConfig {
  core: ThresholdCore
}

export const createThresholdLint = (config: ThresholdLintConfig) => {
  config.core.vfsUnitsList

  const warnings = createStore<Array<Warning>>([])

  return {
    warnings,
  }
}

export type ThresholdLint = ReturnType<typeof createThresholdLint>
