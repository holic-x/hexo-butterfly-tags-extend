// ----------- 标签注册 --------------------
const defaultTagList = [
  'showText','bilibili','githubRepo',
  'highcharts','chart','echarts',
  'asciinema','poem'
]

// 参数配置校验
const config = hexo.config.tags_extend || hexo.theme.config.tags_extend;
// 校验配置开关
if(!config || !config.enable){
  return ;
}

// 配置项控制
const urlFor = require('hexo-util').url_for.bind(hexo)
const tagConfig = {
  tags_extend_css: config.CDN.tags_extend_css ? urlFor(config.CDN.tags_extend_css) : 'https://pic-bed-1305292171.cos.ap-shanghai.myqcloud.com/tags_extend.css'
}

// 装载样式,注入css资源
const css_text = `<link rel="stylesheet" href=${tagConfig.tags_extend_css} media="defer" onload="this.media='all'">`
hexo.extend.injector.register('head_end', css_text, "default");


// 校验所需参数配置列表
const enableTagList = config.tagList?defaultTagList:config.tagList;// 启动对应参数配置列表
for(var i=0;i<enableTagList.length;i++){
  switch (enableTagList[i]) {
    // showText标签注册
    case 'showText':{
      hexo.extend.tag.register('showText', require('./lib/scripts/text/showText'), { ends: false })
      break;
    }
    
    //  bilibili标签注册
    case 'bilibili':{
      hexo.extend.tag.register('bilibili', 
      function(args){
        // 将hexo传入
        return require('./lib/scripts/av/bilibili').addBilibiliVideo(hexo,args);
      }
      , { ends: false })
      break;
    }
       
    // githubRepo标签注册
    case 'githubRepo':{
      // 注册标签
      hexo.extend.tag.register('githubRepo', async function (args, content) {
        return require('./lib/scripts/tag/githubRepo').githubRepoRender(args, content);
      }, { async: true });

      break;
    }

    // highcharts标签注册
    case 'highcharts':{
      hexo.extend.tag.register('highcharts',function (args, content) {
        // 其中content对应的是图标的options配置
        return require('./lib/scripts/chart/highcharts').highchartsRender(args, content);
      },{
        async: true,
        ends: true
      })
      break;
    }


    // chart标签注册
    case 'chart':{
      hexo.extend.tag.register('chart',function (args, content) {
        // 其中content对应的是图标的options配置
        return require('./lib/scripts/chart/chart.js').chartRender(args, content);
      },{
        async: true,
        ends: true
      })
      break;
    }
    
     // echarts标签注册
     case 'echarts':{
      hexo.extend.tag.register('echarts',function (args, content) {
        // 其中content对应的是图标的options配置
        return require('./lib/scripts/chart/echarts.js').echartsRender(args, content);
      },{
        async: true,
        ends: true
      })
      break;
    }

    // asciinema标签注册
    case 'asciinema':{
      hexo.extend.tag.register('asciinema',function (args, content) {
        // 其中content对应的是图标的options配置
        return require('./lib/scripts/tag/asciinema.js').asciinemaRender(args, content);
      },{
        ends: false
      })
      break;
    }

    // poem标签注册
    /*
    case 'poem':{
      hexo.extend.tag.register('poem',function (args, content) {
        // 其中content对应的是图标的options配置
        return require('./lib/scripts/text/poem.js').poemRender(hexo,args, content);
      },{
        ends: true
      })
      break;
    }
    */


    // 其他配置
    default:{
      console.log("未知的标签类型定义"+enableTagList[i]);
    }
  }

}



 

 
