/*百度主动实时自动推送代码开始*/
!function() {
    var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi
      , r = window.location.href
      , t = document.referrer;
    if (!e.test(r)) {
        var o = "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif";
        t ? (o += "?r=" + encodeURIComponent(document.referrer),
        r && (o += "&l=" + r)) : r && (o += "?l=" + r);
        var i = new Image;
        i.src = o
    }
}(window);

/*百度主动实时自动推送代码束*/

/*<!--360自动收录--> */
/*
(function(){
var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();*/
/*<!--360自动收录--> */
/*<!--头条搜索收录--> */

/*<!--头条搜索收录--> */
