import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      name: pkg.name,
      file: pkg.umd,
      format: 'umd',
    },
    {
      name: pkg.name,
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      name: pkg.name,
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react',
    'reat-dom',
    'react/jsx-runtime',
  ],
  plugins: [
    autoExternal({ builtins: false }),
    postcss({
      extensions: ['.css'],
      inject: {
        insertAt: "top",
      },
      config: {
        path: './postcss.config.js',
      },
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    nodePolyfills(),
    nodeResolve(),
    terser(),
  ],
}
