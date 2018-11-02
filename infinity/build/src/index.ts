import * as path from 'path';
import { BasePortal } from './framework/base-portal';
const program = require('commander');
const packageJsonPath = path.resolve(__dirname, './../package.json');
const packageJson = require(packageJsonPath);

export function run(args: any) {
  program.version(packageJson.version);
  new BasePortal(program).request(args);
}
