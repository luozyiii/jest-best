# jest-best

前端自动化测试-Jest 入门

### 入门

- 基础

```javascript
// package.json 初始化   -y 跳过选项
npm init
// 安装
yarn add jest -D
// package.json
"scripts": {
  "test": "jest"
},
// 新建 .test.js文件 编写测试用例
```

- 修改 jest 配置

```javascript
// 运行
yarn jest --init
// 根据需求选择后 根目录生成jest.config.js
```

- 添加 bable 处理 es6
  > jest 默认是 CommonJs

```javascript
// 安装依赖
yarn add @babel/node -D
yarn add @babel/core -D
yarn add @babel/preset-env -D
yarn add core-js@3 -D

// 新建.babelrc 配置更新  useBuiltIns 按需引入 polyfill
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "debug": false
      }
    ]
  ]
}
```

- 简单的例子

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js
import { add } from './math';
test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10);
});

// 运行
yarn test
```

### 匹配器

- 基础用法

```javascript
// matchers.test.js
```

- 监听测试文件的变化

```javascript
// package.json
"test": "jest --watchAll"
```

### Jest 命令模式

```
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

### 异步代码的测试

```javascript
// 引入axios
yarn add axios -D
// fetchData.js

// fetchData.test.js
```

### Jest 中的钩子函数

```javascript
// Counter.js
// Counter.test.js
```

### Jest Mock

- 特点  
  1.捕获函数的调用和返回结果，以及 this 和调用顺序  
  2.它可以让我们自由的设置返回结果  
  3.改变函数的内部实现

```javascript
// mock.js
// mock.test.js
```

### vscode 插件

```javascript
// 安装jest 插件， 可以不用执行yarn test, vscode jest 会自动检测
// 通过测试，代码前面✅
Jest

command + shift + p
// 安装
code command in Path

// 以后可以在终端 在代码当前目录下 打开vscoe编辑器
code ./
```
