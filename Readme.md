# VueCli3.x 最新入门教程

## vscode

插件安装

- Live Server 实现热更新
- Vetur vue 语法的关键词高亮，快捷方式
- vue.js

- setting

```
//代码保存时，进行格式化
{
    "editor.formatOnSave": true,
    "editor.formatOnType": true
}
```

- Vue

```
//CDN
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

- Axios

```
//CDN
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## Vue-Cli 脚手架

<b>脚手架需要的环境</b>

- 1、Node.js 运行环境
- 2、npm（node package manage）依赖包

<b>脚手架的好处</b>

- 1、脚手架可以大大的提高开发效率
- 2、可使用最主流的 ECMScript 语法
- 3、通过 Webpack 实现编译查看效果（非浏览器编译）
- 4、自动更新，可实时查看最新效果等

<b>安装 cnpm</b>

```
//npm 安装都是去访问国外的服务器，所以一般都用 cnpm，cnpm 是淘宝弄的一个国内的代理服务器
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
```

<b>安装 vue-cli</b>

```
//全局安装vue-cli脚手架
sudo cnpm install -g @vue/cli
```
# Vue生命周期

![Vue生命周期](https://cn.vuejs.org/images/lifecycle.png)