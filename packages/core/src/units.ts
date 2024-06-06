export interface File {
  kind: 'file'
  pathAbsolute: string
  pathRelative: string
  parent: Directory['pathRelative'] | null
  dependencies: Array<File['pathRelative']>
  dependents: Array<File['pathRelative']>
}

export interface Directory {
  kind: 'directory'
  pathAbsolute: string
  pathRelative: string
  parent: VfsUnit | null
  nested: Array<Directory['pathRelative'] | File['pathRelative']>
}

export interface Module {
  type: 'module'
  name: string
  dependents: Array<File['pathRelative']>
}

export type VfsUnit = File | Directory
