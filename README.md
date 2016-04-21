# leancloud-nodejs-angular seed project

该项目为基于 leancloud

## 目录结构
```
.
├── public          // LeanEngine Web 前端发布目录，前端（HTML\CSS\JavaScript）构建后放在此目录中
├── server-modules  // 服务器端代码模块目录
│    ├── app.js            // LeanEngine 服务端代码主入口
│    ├── api-router.js     // API 接口路由配置
│    ├── tool.js           // 工具方法
│    └── hello.js          // 示例代码
├── web-project     // Web 前端项目目录
│    ├── gulp           // 自动化构建的逻辑模块
│    ├── dist           // 构建之后的源码目录
│    └── src            // 源码目录
└── server.js       // LeanEngine 的环境配置
```

### 依赖安装

* 系统依赖 nodejs 环境为 0.12.x 版本，如果启动遇到错误，请首先确保 nodejs 版本
* 首先 clone 这个代码库到本地目录中
```
$ git clone https://github.com/qianhaikeji/leancloud-nodejs-angular-seed.git
$ cd leancloud-nodejs-angular-seed

$ npm install

$ cd web-project
$ npm install
$ bower install
```

### 调试

* 在根目录执行
```
$ lean app add <name> <app id>
$ lean up
```

运行服务器端环境，通过 `http://localhost:3000/api/hello` 可以测试

* 在 web-project 目录中执行
```
$ gulp serve
```
运行 web 端环境，通过 `http://localhost:3000` 可以调试

* 开发时需要同时运行这两个任务（开两个 terminal），就可以同时调试 Server 与 Web

### 部署

首先请确保项目已经配置[通过 GitHub 部署](https://leancloud.cn/docs/leanengine_guide-node.html#使用_GitHub_托管源码)。

* 在 `web-project 目录`中执行
```
$ gulp build
```
构建系统会自动打包，自动压缩合并代码，发布到 public 目录中

* 将最新代码，连同 public 目录中的代码，全部提交到对应的 GitHub 仓库中

* 在根目录执行
```
$ lean deploy
```
可以部署到 LeanEngine 的测试环境中，通过配置的测试地址访问

* （ 在根目录执行
```
$ lean publish
```
发布整个项目到线上环境）

