export interface IRunOption {
  input: string;
  output: string;
  verbose: boolean;
  watch: boolean;
}

export const DEFAULT_CONFIG = {
  input: './src',
  output: './dist',
  verbose: false,
  watch: false,
};
/**
 * 让Cli直接把配置文件解析好传进来
 */
export function run(option: any) {
  const context = formatOption(option);
}

function formatOption(option: any): IRunOption {
  if (!option) {
    return DEFAULT_CONFIG;
  }
  return Object.assign({}, DEFAULT_CONFIG, option);
}

function setUpContext() {}
