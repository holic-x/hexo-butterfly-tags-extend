// 引入必要组件
var bili_convert = require('bilibili-embed-convert');

module.exports = {
   addBilibiliVideo
}

/**
 * 方式3定义，module.exports输出一个函数。在index中直接引入无需指定函数名称
 * hexo.extend.tag.register('bilibili', require('./lib/scripts/tag/bilibili'), { ends: false })
 */
/*
module.exports = function (hexo,args) {
  // 执行转换操作
  return addBilibiliVideo(hexo,args);
}
*/

// 定义函数
function addBilibiliVideo (hexo,args) {
    console.log("bilibili tag Plugin register");

    // 需要对args[0]，args[1]作非空校验，否则如果参数不指定则相应调用split会出现调用异常
    if(args[0]==""){
      console.log('需指定参数！');
    }
    // 数据源配置
    var sourceConfig = args[0].split(',');
    var av_id = parseInt(sourceConfig[0]);
    var page = parseInt(sourceConfig[1]) || 1;

    // 设定bilibili组件参数(原主配置文件方式引入配置参数)
    /*
    var config = hexo.config.bilibili || {};
    config.width = config.width || 452;
    config.height = config.height || 544;
    */

    // 设定bilibili组件参数(现根据引用直接进行配置)
    var styleConfig = (args[1]!=null&args[1]!="")?args[1].split(','):'450,500'.split(',');
    var config =  {
      width : styleConfig[0] || 450,
      height : styleConfig[1] || 550
    };

    // 根据av_id、page加载指定视频
    var bili_video = new bili_convert(av_id, page);
    // 转html
    return '<div class="bili_video">'
         + bili_video.embedAddr(config.width, config.height)
         + '</div>';
}

/**
 * 方式1:注册插件
 * hexo.extend.tag.register('bilibili', addBilibiliVideo, { ends: false })
 */

/**
 * 方式2定义:module.exports
 *  module.exports = {
 *    addBilibiliVideo
 * }
 * 在index.js中统一进行定义,引入指定的方法
 * hexo.extend.tag.register('bilibili', require('./lib/scripts/bilibili').addBilibiliVideo, { ends: false })
 */