import typescript from 'rollup-plugin-typescript';
module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'bundle.js',
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
};