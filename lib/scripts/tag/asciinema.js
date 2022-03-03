// 暴露函数
module.exports = {
    asciinemaRender,
};
  
function asciinemaRender(args,content) {
    console.log("asciinema tag Plugin register");

    // 获取嵌入方式，videoId
    // const config = args[0]?args[0]:'2';
    const config = args[0];
    const videoId = args[1];
    /**
     * config说明:
     * 1.图片形式嵌入
     * 2.视频形式嵌入
     * other.默认以视频方式嵌入
     */
    let html = '';
    switch(config){
        case '1':{
            html += "<a href=\"https://asciinema.org/a/"+ videoId + "\"" + " target=\"_blank\"><img src=\"https://asciinema.org/a/"+ videoId+ ".svg\" /></a>";
            break;
        }
        case '2':{
            html += "<script type=\"text/javascript\" src=\"https://asciinema.org/a/" + videoId + ".js\" id=\"asciicast-"+ videoId + "\" async></script>";
            break;
        }
            

    }
    return html;
}