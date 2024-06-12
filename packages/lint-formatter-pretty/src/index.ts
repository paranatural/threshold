import { Formatter } from '@paranatural/threshold-lint-cli'

const formatter: Formatter = (warnings) => {
  let result = ''

  result += `Found ${warnings.length} warnings\n`

  warnings.forEach(w => {
    result += `${w.rule}\n`
  })

  return result
}

export default formatter
