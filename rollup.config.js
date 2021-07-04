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

console.log('12121')
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
          "react-dom": "ReactDOM",
          "classnames": "classNames",
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
      babel(
        {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          // "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-arrow-functions", "external-helpers"],
          "plugins": [
            "@babel/plugin-transform-arrow-functions", // 这个是箭头函数的处理
            [
              "@babel/plugin-proposal-decorators",
              { "legacy": true }
            ], // 这个是装饰器
          ],
          "exclude": ["node_modules/**"]
        }
      ),
      // {
      //   exclude: 'node_modules/**',
      //   plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-arrow-functions",]
      // }
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

    external: [
      'react',
      'react-dom',
      'classnames'
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