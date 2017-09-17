
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  dest: 'dist/semtex-core.js',
  format: 'umd',
  moduleName: 'semtex',
  sourceMap: true,
  plugins: [ buble() ]
};
