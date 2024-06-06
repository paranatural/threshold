import { File } from './units.js'

export type Parser = (fileContent: string) => Pick<File, 'dependencies' | 'dependents'>
