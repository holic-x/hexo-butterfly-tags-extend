const fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    // filePath = path.join(__dirname, './template_chart.html');
    filePath = path.join(__dirname, '../../assets/template/template_chart.html');

function chartRender(args, content) {
    console.log("chart tag Plugin register");
    const template = fs.readFileSync(filePath).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'chart' + ((Math.random() * 9999) | 0),
        option: options,
        width: args[0] || '100%',
        height: args[1] || 300
    });
};

/*
hexo.extend.tag.register('chart', chartRender, {
    async: true,
    ends: true
});
*/
// 暴露函数
module.exports = {
    chartRender
}