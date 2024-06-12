import { VfsUnit } from '@paranatural/threshold-core'

export interface RuleMeta<Options extends {} = {}> {
  name: string
  description: string
  fn: (vfsUnits: Array<VfsUnit>, options: Options) => boolean
}
