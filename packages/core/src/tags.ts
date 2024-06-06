import { VfsUnit } from './units.js'

export interface TagMeta {
  name: string
  description: string
  fn: (vfsUnits: VfsUnit) => boolean
}
