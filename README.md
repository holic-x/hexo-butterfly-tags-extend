# hexo-butterfly-tags-extend

## About | 关于

​	基于hexo-butterfly的基础上扩展自定义标签插件，标签插件开发基本内容参考hexo插件库，针对项目和日常应用引入自定义的外置标签，对部分标签内容做了相应的调整和优化



## Installation | 安装

```
npm -i hexo-butterfly-tags-extend
```



## 使用手册参考

​	针对现有标签库的应用参考文章，会结合插件库开发进行调整



## 更新说明

> 202109

👻add：bilibili-视频引入（调整参数配置项）

👻add：githubRepo-github仓库卡片展示（将css、js引用抽离，调整部分样式）

👻add：图表类型-highcharts、chart、echarts多样图表展示（引入不同类型的图表）

👻add：asciinema-linux终端记录&回放组件嵌入（图片、视频）



> 202110

💣fix：修复githubRepo样式重复引用以及和其他组件冲突问题

💣fix：调整样式引用和标签注册，将样式定义和标签渲染函数注册进行分离

💣fix：tag标签迭代，重新优化代码结构，调整配置项




## License

Copyright (c) 2021, holic-x. Licensed under the [MIT license](https://github.com/Z4Tech/hexo-tag-bilibili/blob/master/LICENSE).