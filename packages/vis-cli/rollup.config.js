import Module from 'node:module'

import { defineConfig } from 'rollup'
import typescriptPlugin from '@rollup/plugin-typescript'
import { readPackageUpSync } from 'read-pkg-up'
import typescriptDtsPlugin from 'rollup-plugin-dts'

const packageJson = readPackageUpSync({ normalize: true }).packageJson

const external = [
  ...Object.keys(packageJson.devDependencies ?? {}),
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
  ...Module.builtinModules.map((m) => `node:${m}`),
  ...Module.builtinModules,
]

export default defineConfig([
  {
    input: 'src/bin.ts',
    plugins: [typescriptPlugin()],
    output: [
      {
        file: packageJson.bin['threshold-vis'],
        format: 'es',
        banner: '#!/usr/bin/env node\n'
      },
    ],
    external,
  },
  {
    input: 'src/index.ts',
    plugins: [typescriptPlugin()],
    output: [
      {
        file: packageJson.main,
        format: 'es',
      },
    ],
    external,
  },
  {
    input: 'src/index.ts',
    plugins: [typescriptPlugin(), typescriptDtsPlugin()],
    output: {
      file: packageJson.types,
      format: 'es',
    },
    external,
  },
  {
    input: 'src/command.ts',
    plugins: [typescriptPlugin()],
    output: [
      {
        file: packageJson.exports["./command"].default,
        format: 'es',
      },
    ],
    external,
  },
  {
    input: 'src/command.ts',
    plugins: [typescriptPlugin(), typescriptDtsPlugin()],
    output: {
      file: packageJson.exports["./command"].types,
      format: 'es',
    },
    external,
  },
])
