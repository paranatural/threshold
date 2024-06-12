import { createEvent, createStore } from 'effector'

import { VfsUnit } from './units.js'

export interface ThresholdCoreConfig {
  initialValue: Array<VfsUnit>
}

const thresholdCoreConfigFallback: ThresholdCoreConfig = {
  initialValue: [],
}

export const createThresholdCore = (
  config: ThresholdCoreConfig = thresholdCoreConfigFallback,
) => {
  const vfsUnitsList = createStore<Array<VfsUnit>>(config.initialValue)
  const unitAdd = createEvent<VfsUnit>()
  vfsUnitsList.on(unitAdd, (state, payload) => [...state, payload])

  return {
    vfsUnitsList,
    unitAdd,
  }
}

export type ThresholdCore = ReturnType<typeof createThresholdCore>
