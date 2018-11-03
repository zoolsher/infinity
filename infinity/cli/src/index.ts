import { BasePortal } from './framework/base-portal';
const program = require('commander');
const packageJson = require('../package.json');

export function run(args: any) {
  program.version(packageJson.version);
  new BasePortal(program, process).request(args);
}
