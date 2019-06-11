function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


function getRequirement(code) {
    $.ajax({
        url: 'https://47.106.112.137:9002/djwebservices/v2/b2b-apparel-zh/orders/requirement/' + code + '/withoutLogin',
        type:'GET',
        contentType:'application/json',
        success: function (data) {
            console.log(data);
            return JSON.stringify(data);
        },
        error: function () {
            alert('页面出错啦！');
        }
    });
}

function getLocalTime(nS) {
    var d = new Date(parseInt(nS));
    var resTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return resTime;
}

