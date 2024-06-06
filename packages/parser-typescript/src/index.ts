import { Parser } from '@paranatural/threshold-core'
import { parse as eslintParse } from '@typescript-eslint/parser'

const parser: Parser = (fileContent) => {
  const ast = eslintParse(fileContent, {})

  const dependencies: Array<string> = []
  ast.body.forEach(node => {
    if (node.type === 'ImportDeclaration') {
      dependencies.push(node.source.value)
    }
  })
  return { dependencies, dependents: [] }
}

export default parser
