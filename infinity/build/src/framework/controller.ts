export interface IControllerOption {
  rawArgs: Record<string, string>;
}
export class Controller<T extends IControllerOption> {
  public static command: string = '';
  public static description: string = null;
  public static option: Array<string[]> = [];
  public formatOptions: T;
  public constructor(program: any, argsFromCommand: string[]) {
    this.formatOptions = this.formatOption(program);
  }
  public formatOption(program: any): T {
    // TODO: check rawArgs
    return {
      rawArgs: program.rawArgs,
    } as T;
  }
  /**
   * 去吧比卡丘。
   */
  public run(){

  }
}
