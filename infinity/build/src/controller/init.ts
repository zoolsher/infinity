import { Controller, IControllerOption } from '../framework/controller';

interface InitControllerOption extends IControllerOption {
  path: string;
}

export class InitController extends Controller<InitControllerOption> {
  public static command = 'init [path]';
  public static option = [['-ns --no-store', 'not using lux store']];
  public constructor(program: any, argsFromCommand: string[]){
    super(program, argsFromCommand);
  }
}
