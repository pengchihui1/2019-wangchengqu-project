/**
 * Created by fy on 2018/11/22.
 */

$(function () {
    /* 控制左右按钮显示 */
    $(".slideBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
    jQuery(".slideBox").slide({titCell: ".hd ul",mainCell: ".bd ul",autoPlay: true,effect: "fold",interTime: 5000,autoPage: true,prevCell:".prev",nextCell:".next"});
    jQuery(".tab_box").slide({titCell: ".hd li",mainCell: ".bd",targetCell: ".more",delayTime: 0,triggerTime: 0});
    jQuery("#nav").slide({type:"menu",titCell:".nLi",delayTime:0 ,triggerTime:0,returnDefault:true});

    if(navigator.appVersion.search(/MSIE 7/i) != -1){
        alert("您当前的浏览器版本过低，不能友好的兼容H5，建议升级浏览器!")
    }

    $('body').append('<div class="mask"></div>');
    function removenav() {
        $('.container').animate({right: "0"});
        $('.nav').stop().animate({right: "-200px"});
        $('.mask').hide();
        $('.app-nav-bottom').removeClass("app-nav-bottoms");
    }
    $(".app-nav-bottom").toggle(function () {
        $('.container').stop().animate({right: "200px"});
        $('.nav').stop().animate({right: "0"});
        $('.mask').show();
        $('.app-nav-bottom').addClass("app-nav-bottoms");
    },function () {
        removenav();
    });
    $(".mask").click(function () {
        $(".app-nav-bottom").click();
    });

    $(window).resize(function(){
        if($(window).width() >= 1200){
            removenav()
        }
    });

    $(".select_box").click(function (e) {  //友情链接
        $(this).siblings(".select_box").find(".select_option").hide();
        $(this).find(".select_option").stop(true,true).slideToggle();
        e.stopPropagation();
    });
    $(document).click(function () {
        if($(".select_option").is(':visible')){
            $(".select_option").hide();
        }
    });
});


function subm(){
    var word = $(".sr").val();
    if(word=="请输入关键词" || word==""){
        $(".search").addClass("error");
        clearTimeout(mysetTime);
        var mysetTime = setTimeout(function () {
            $(".search").removeClass("error");
        },2000);
        return false;
    }
}

// 无障碍浏览
function wzall() {
    $("#Voice-Voicer-smoothTips").toggle()
}

// 设置为主页
function SetHome(obj,vrl){
    try{
        obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
    }
    catch(e){
        if(window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',vrl);
        }else{
            alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入："+vrl+"点击确定。");
        }
    }
}
// 加入收藏 兼容360和IE6
function shoucang(sTitle,sURL)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
