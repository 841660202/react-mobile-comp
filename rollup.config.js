// rollup.config.js
import path from 'path'
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import ts from 'rollup-plugin-typescript2'

import copy from 'rollup-plugin-copy';

const getPath = _path => path.resolve(__dirname, _path)


const extensions = [
  '.js',
  '.ts',
  '.tsx'
]


export default [
  {
  input: [
    './src/index.ts'
  ],

  output: [
    {
      name: 'comlib',
      sourcemap: true,
      file: './dist/index.js',
      format: 'umd',
      globals: {
        react: 'React',
       "react-dom": "ReactDOM"
      },
    },
  ],

  plugins: [
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      plugins: [autoprefixer(), cssnano()],
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve(extensions),
    commonjs(),
    ts({
      tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
      extensions
    }),
    copy({
        targets: [
          {
            src: ['src/index.css'],
            dest: 'dist',
          },
        ],
      }),
  ],

  external: ['react',
    'react-dom'
  ],
  },
  {
    input: 'src/styles.scss',
    output: {
      file: 'dist/styles.css',
    },
    plugins: [
      postcss({
        extract: true,
        plugins: [autoprefixer(), cssnano()],
      }),
      copy({
        targets: [
          {
            src: ['src/_variables.scss'],
            dest: 'dist',
          },
        ],
      }),
    ],
  },

]