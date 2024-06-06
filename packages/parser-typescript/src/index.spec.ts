import { expect, it } from 'vitest'

import parser from './index.js'

const code = `
export const pi = 3.14;
export let count = 0;
export function increment() {
  count++;
}

export interface Person {
  name: string;
  age: number;
}

export class Greeter {}

export enum Direction { Up, Down, Left, Right }

export type StringOrNumber = string | number;

const defaultExport = 'Default Exported Value';
export default defaultExport;

import { pi, count, increment } from './main';

import { Person, StringOrNumber } from './main';

import { Greeter } from './main';

import { Direction } from './main';

import defaultValue from './main';

import * as MainModule from './main';
`

it('', () => {
  const parseResult = parser(code)

  expect(parseResult).toBe([])
})
