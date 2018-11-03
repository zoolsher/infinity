import { log } from '../utils/log';
import { Controller, IProcessOption, IProgramOption } from './controller';

interface IController {
  new (): Controller<IProgramOption, IProcessOption>;
}
export class BasePortal {
  public program: any;
  public process: any;
  private loadedClass: Record<string, typeof Controller>;
  /**
   * Protal初始化
   * @param program commander 入口
   */
  public constructor(program: any, process: any) {
    this.program = program;
    this.process = process;
  }
  public request(request: string) {
    this.program.parse(request);
  }
  public loadController(loaders: Record<string, string>) {
    const names = Object.keys(loaders);
    for (const name of names) {
      const path = loaders[name];
      const controller = requireUmd(path);
      this.loadedClass[name] = controller;
    }
  }
  public hookController(controllerClass: typeof Controller) {
    this.program.command(controllerClass.command);
    const options = controllerClass.option;
    if (options) {
      options.forEach(option => {
        this.program.option(option);
      });
    }
    this.program.action((...args: any[]) => {
      const controller = new controllerClass(this.program, this.process, args);
      controller.run();
    });
  }
}

export function requireUmd(request: string): typeof Controller {
  let result: any = null;
  try {
    result = require(request);
  } catch (e) {
    log(`error happened in requiring ${request}, error is ${e.message}`);
  }

  /* support esModule */
  if (result.__esModule === true) {
    result = result.default;
  }
  return result as typeof Controller;
}
