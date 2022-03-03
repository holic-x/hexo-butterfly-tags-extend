var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, '../../assets/template/template_echarts.html');

function echartsRender(args, content) {

    console.log("echarts tag Plugin register");

    var template = fs.readFileSync(filePath).toString(),
        tag_content = {};

    if (content.length) {
        var tag_content = content;
    }

    return _.template(template)({
        id: 'echarts' + ((Math.random() * 9999) | 0),
        tag_content: tag_content,
        width: args[0] || '85%',
        height: args[1] || 400
    });
}

/**
 * hexo.extend.tag.register('echarts', echartsMaps, {
    async: true,
    ends: true
});
 */
module.exports = {
    echartsRender
}