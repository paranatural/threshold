import { Warning } from '@paranatural/threshold-lint'

export type Formatter = (warnings: Array<Warning>) => string
