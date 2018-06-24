# FromZero

> 从零开始，记录所有本项目从无到有的构建过程。

[Mark Down 语法](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)

## 预先准备

- node 安装最新版，本次项目使用的是 v10.4.1
- 为 npm 添加淘宝源，方便我们快速下载各种依赖

  ``` bash
  npm config set registry https://registry.npm.taobao.org --global
  npm config set disturl https://npm.taobao.org/dist --global
  npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass --global
  ```

- 首先在 GitHub 创建一个初始化项目，克隆到本地
- `npm install -g yarn`, 安装升级最新版本的 yarn, yarn 也同样添加以上淘宝源
- 添加 .gitignore .editorconfig
- 初始化 package.json, 通过 `yarn init`, 去掉 main 字段，修改 private 为 true，以防意外发布。

## 配置项目

- url-loader 和 file-loader 类似，只是前者可以在文件大小低于某个制定的限制时，返回 DataURL。
- 一个很强力的图片资源压缩loader，[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
