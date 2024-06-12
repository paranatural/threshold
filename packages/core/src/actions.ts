export type Action = {
  type: 'create-file'
  path: string
} | {
  type: 'create-directory'
  path: string
} | {
  type: 'modify-file'
  path: string
} | {
  type: 'rename-file'
  path: string
} | {
  type: 'rename-directory'
  path: string
} | {
  type: 'delete-file'
  path: string
} | {
  type: 'delete-directory'
  path: string
}
