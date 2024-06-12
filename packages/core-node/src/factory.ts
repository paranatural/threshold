import chokidar from 'chokidar'

import { ThresholdCore } from '@paranatural/threshold-core'

export const createThresholdWatcher = (core: ThresholdCore) => {
  let chokidarWatcher = chokidar.watch('')

  chokidarWatcher.on('add', (path, stats) => {
    core.unitAdd({
      kind: 'file',
      pathRelative: path,
      pathAbsolute: path,
      dependents: [],
      dependencies: [],
      parent: null,
    })
  })

  return async () => await chokidarWatcher.close()
}
