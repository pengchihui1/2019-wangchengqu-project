/*
* recommend 省网 央网推荐
* */
function wwtj1() {
    $.ajax({
        url : 'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
        dataType : "jsonp",
        jsonp : "pushInfoJsonpCallBack",
        jsonpCallback:"pushInfoJsonpCallBack",
        timeout:2000,
        success : function(data) {
            var count=1;
            var dataStr="";
            $.each(data,function(i,json){
                if(count++<=5){
                    dataStr+="<li><span>"+json.pubDate+"</span><a href='"+json.link+"' target='_blank' title='"+json.title+"'>"+json.title+"</a></li>";
                }
                if(count==6){
                    $("#govInfo").html(dataStr);
                }
            })
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            $("#govInfo").html("<li><a>加载失败正在自动刷新,请稍候！</a></li>");
            setTimeout(function () { wwtj1() },1000)
        }
    });
}

function wwtj2() {
    setTimeout(function () {
        $.ajax({
            url : 'http://www.hunan.gov.cn/szf/zfhyjtj/pushinfo.jsonp',
            dataType : "jsonp",
            jsonp : "pushInfoJsonpCallBack",
            jsonpCallback:"pushInfoJsonpCallBack",
            timeout:2000,
            success : function(data) {
                var count=1;
                var dataStr="";
                $.each(data,function(i,json){
                    //console.log(json);
                    if(count++<=5){
                        dataStr+="<li><span>"+json.pubDate+"</span><a href='"+json.link+"' target='_blank' title='"+json.title+"'>"+json.title+"</a></li>";
                    }
                    if(count==6){
                        $("#hunanInfo").html(dataStr);
                    }
                });
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                $("#hunanInfo").html("<li><a>加载失败正在自动刷新,请稍候！</a></li>");
                setTimeout(function () { wwtj2(); },1000)
            }
        });
    },100)
}

$(document).ready(function(){
    wwtj1();
    setTimeout('wwtj2()', 200);
})