import { createStore } from 'effector'

import { VfsUnit } from './units.js'

export interface RuleMeta<Options extends {} = {}> {
  name: string
  description: string
  fn: (vfsUnits: Array<VfsUnit>, options: Options) => boolean
}

export const store = createStore<Array<RuleMeta>>([])

export const rules = {}
