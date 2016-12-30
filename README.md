# Superproject

## 独白

> 技术是用来解决问题的 <br>
> 所以技术框架是要解决一系列问题的 ... <br>
> 往往在解决问题的过程中又产生了新的问题，所以... <br>
> 不断的解决问题...生产问题...再解决..再生产... <br>
> It's my life. <br>

## 运行

建议：中国用户建议使用cnpm加速下载依赖
```
npm i cnpm -g
```

如果安装了cnpm可以把👇的```npm i```改成```cnpm i```执行

```
cd superproject && npm i
npm start
```

在浏览器打开：```http://localhost:3000```

## 技术栈(计划使用)

组件化 - React <br>
状态管理 - Redux <br>
路由 - React-Router <br>
同构 - React RenderToString <br>
Style导入 - wapper-css-loader <br>
打包工具 - webpack2 <br>
组件库 - Material-UI <br>
CSS编译 - Sass <br>
ES6\7编译 - Babel <br>

单元测试 - Mocha <br>

HTTP服务 - Koa2 <br>
静态服务器 - 七牛云 <br>
缓存服务 - Redis <br>
数据库 - MongoDB <br>

NodeJS进程管理 - PM2 <br>
HTTP反向代理 - Nginx <br>

环境容器 - Docker <br>

代码管理 - Git <br>
持续集成 - Jenkins <br>

## 目录结构

```
superproject
	|
	+---apps
	|	|
	|	+---app
	|		|
	|		+---feature
	|			|
	|			+---client
	|			|	|
	|			|	+---redux
	|			|	|
	|			|	+---componets
	|			|
	|			+---server
	|
	+---base
	| 	|
	| 	+---client
	| 	|	|
	| 	|	+---containers
	| 	|	|
	| 	|	+---roots
	| 	|
	| 	+---server
	| 		|
	| 		+---middlewares
	| 		|
	| 		+---modules
	| 		|
	| 		+---public
	| 		|
	| 		+---app.js
	| 		|
	| 		+---server.js
	|
	+---webpack
	|
	+---config
	|
	+---logs
	|
	+---dist
	|
	+---package.json

```