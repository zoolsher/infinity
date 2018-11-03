import {
  Controller,
  IProcessOption,
  IProgramOption,
} from '../framework/controller'

interface InitProcessOption extends IProcessOption {
  path: string
}

export class InitController extends Controller<
  IProgramOption,
  InitProcessOption
> {
  public static command = 'init [path]'
  public static option = [['-ns --no-store', 'not using lux store']]
  public constructor(program: any, process: any, argsFromCommand: string[]) {
    super(program, process, argsFromCommand)
  }
  public formatProcessOption(process: any) {
    return {
      ...super.formatProcessOption(process),
    }
  }
  public formatProgramOption(program: any) {
    return {
      ...super.formatProgramOption(program),
      path: program.path,
    }
  }
  public run() {
    // TODO: get git repo
  }
}
