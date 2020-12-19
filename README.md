## 安装
  1. yarn or npm install

 注意：`webpack/vendor.js`文件中，vendor列表中的包有更新时，一定要更新`webpack/config.js`中`vendorVersion`版本号，并重新执行`yarn run vendor`

## 运行
  - yarn start
进入项目文件夹，在终端中运行以下命令，在浏览器中打开 [localhost:3003](http://localhost:3003/)

首页路由 http://localhost:3003/main  设备页 http://localhost:3003/device

## 发布

### 正式环境打包
1. yarn run build