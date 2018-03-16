# nuxt-test

> Nuxt.js project

 `Nuxt.js + Express + Sequelize + Mysql ` to Build Server
 
 `Vue.js + Element-UI + Axios` to Build Web
 
 That is `Vue-ssr`


```

 The block is written in Chinese on more tips for Chinese Developer.

  vue-ssr 架构说明
  1、技术选型：
  
      后端方面采用 nuxt + express + sequelize + mysql 实现服务的搭建与接口的配对， 前端方面采用vue+elementUI
      
  2、目录结果说明：
  
    .nuxt  // nuxt服务层
    
    assets // 用于前端静态资源存储
    
    build  // 打包后目录
    
    components // 前端公用组件
    
    layouts // 前端布局组件
    
    pages // 前端页面层（对应文件会生成动态路由）
    
    plugins // 插件 如（axios、ui框架）
    
    server 
      + config // 配置目录，如code_msg、配置环境
      + database 
        - connect.js // 连接 
        - db-config.js // 数据库基础信息配置
      + middleware // 中间件
      + module // 业务模块
      + router // 路由
      + schema // sequelize的表模型
      index.js // 服务端入口
      
    static // 服务端静态资源（如favicon.io）
    
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).
