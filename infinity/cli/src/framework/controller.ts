export interface IProgramOption {
  rawArgs: Record<string, string>
}
export interface IProcessOption {
  cwd: string
}
export class Controller<T extends IProgramOption, K extends IProcessOption> {
  public static command: string = ''
  public static description: string = null
  public static option: string[][] = []
  public programOptions: T
  public processOptions: K
  public constructor(program: any, process: any, argsFromCommand: string[]) {
    this.programOptions = this.formatProgramOption(program)
    this.processOptions = this.formatProcessOption(process)
  }

  public formatProcessOption(process: any): K {
    return {
      cwd: process.cwd,
    } as K
  }
  public formatProgramOption(program: any): T {
    // TODO: check rawArgs
    return {
      rawArgs: program.rawArgs,
    } as T
  }
  /**
   * 去吧比卡丘。
   */
  public run() {
    // TODO: before after
  }
}
