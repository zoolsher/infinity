import { Controller, IControllerOption } from './controller';
import { log } from '../utils/log';

interface iController {
  new (): Controller<IControllerOption>;
}
export class BasePortal {
  public program: any;
  private _knownLoaderPaths: Record<string, string> = {};
  private _loadedClass: Record<string, iController>;
  /**
   * Protal初始化
   * @param program commander 入口
   */
  public constructor(program: any) {
    this.program = program;
  }
  public request(request: string) {
    this.program.parse(request);
  }
  public loadController(loaders: Record<string, string>) {
    this._knownLoaderPaths = loaders;
    const names = Object.keys(loaders);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const path = loaders[name];
      const controller = requireUmd(path);
      this._loadedClass[name] = controller;
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
    this.program.action((...args)=>{
      const controller = new controllerClass(this.program, args);
      controller.run();
    })
  }
}

export function requireUmd(request: string): iController {
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
  return result as iController;
}
