module.exports = function (args,content) {
  // 执行转换操作
  return addText(args,content);
}

// 定义函数
function addText (args, content) {
    const text = args[0] || 'non'
  
    console.log("showText Plugin");
    return `<h1>${text}</h1>`;
  
  }
  // 注册插件
// hexo.extend.tag.register('showText', addText, { ends: false })