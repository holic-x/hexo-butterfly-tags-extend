// ----------- 插件注册 --------------------

/**
 * bilibili插件注册
 */
hexo.extend.tag.register('showText', require('./lib/scripts/tag/showText'), { ends: false })
hexo.extend.tag.register('bilibili', 
  function(args){
    // 将hexo传入
    return require('./lib/scripts/tag/bilibili').addBilibiliVideo(hexo,args);
  }
, { ends: false })

// 入口
