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
    // bilibili的avId
    var av_id = parseInt(args[0]);
    var page = parseInt(args[1]) || 1;

    // 设定bilibili组件参数(原主配置文件方式引入配置参数)
    /*
    var config = hexo.config.bilibili || {};
    config.width = config.width || 452;
    config.height = config.height || 544;
    */

    // 设定bilibili组件参数(现根据引用直接进行配置)
    var config =  {
      width : parseInt(args[2]) || 450,
      height : parseInt(args[3]) || 550
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