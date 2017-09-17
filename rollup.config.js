
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  dest: 'dist/slaer-core.js',
  format: 'umd',
  moduleName: 'slaer',
  sourceMap: true,
  plugins: [ buble() ]
};
