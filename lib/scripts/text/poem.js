// 参数处理函数
// function poemRender (hexo,args, content) {
//   args = args.join(' ').split(',')
//   let p0 = args[0]
//   let p1 = args[1]?args[1]:''
//   return `<div class='poem'><div class='poem-title'>${p0}</div><div class='poem-author'>${p1}</div>${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`
// }

// 暴露接口
module.exports = {
  // poemRender
}