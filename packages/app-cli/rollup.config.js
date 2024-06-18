import Module from 'node:module'

import { defineConfig } from 'rollup'
import typescriptPlugin from '@rollup/plugin-typescript'
import { readPackageUpSync } from 'read-pkg-up'

const packageJson = readPackageUpSync({ normalize: true }).packageJson

export default defineConfig([
  {
    input: 'src/bin.ts',
    plugins: [typescriptPlugin()],
    output: [
      {
        file: packageJson.bin['threshold'],
        format: 'es',
        banner: '#!/usr/bin/env node\n'
      },
    ],
    external: [
      ...Object.keys(packageJson.devDependencies ?? {}),
      ...Object.keys(packageJson.dependencies ?? {}),
      ...Object.keys(packageJson.peerDependencies ?? {}),
      ...Module.builtinModules.map((m) => `node:${m}`),
      ...Module.builtinModules,
    ],
  },
])
