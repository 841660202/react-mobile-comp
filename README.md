```
yarn add rollup-plugin-babel rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-postcss rollup-plugin-peer-deps-external -D
```
```sh
# 此项目
yarn build
```

```sh
# 此项目
yarn link
```

```sh
# 其他项目
yarn link my-react-library
```

```js
// react-lib-boilerplate
// https://github.com/MomenSherif/react-lib-boilerplate/blob/main/rollup.config.js

// react-modern-library-boilerplate
// https://github.com/transitive-bullshit/react-modern-library-boilerplate


// react-component-library
// https://github.com/HarveyD/react-component-library
```
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./lib", // 输出目录
    "sourceMap": false, // 是否生成sourceMap
    "target": "esnext", // 编译目标
    "module": "esnext", // 模块类型
    "moduleResolution": "node",
    "allowJs": false, // 是否编辑js文件
    "strict": true, // 严格模式
    "noUnusedLocals": true, // 未使用变量报错
    "experimentalDecorators": true, // 启动装饰器
    "resolveJsonModule": true, // 加载json
    "esModuleInterop": true, 
    "removeComments": false, // 删除注释


    "declaration": true, // 生成定义文件
    "declarationMap": false, // 生成定义sourceMap
    "declarationDir": "./lib/types", // 定义文件输出目录


    "lib": ["esnext", "dom"],  // 导入库类型定义
    "types": ["node"] // 导入指定类型包
  },
  "include": [
    "src/*"  // 导入目录
  ]
}


```