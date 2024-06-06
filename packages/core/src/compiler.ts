import { File } from './units.js'

export type Compiler = (fileMeta: Pick<File, 'dependencies' | 'dependents'>) => string
