/**
 * Created by fangyi on 2019/10/25.
 */
function echarts2() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts02"));
    var data5 = {title:"生产总值",
        vdata:
            [{name:"农林牧渔业总产值（亿元）",
                data:[
                    {date:"2011年",val:"49.25"},
                    {date:"2012年",val:"52.22"},
                    {date:"2013年",val:"54.52"},
                    {date:"2014年",val:"62.48"},
                    {date:"2015年",val:"70.41"},
                    {date:"2016年",val:"77.70"},
                    {date:"2017年",val:"82.38"},
                    {date:"2018年",val:"70.5"}
                ]},
                {name:"农业（亿元）",
                    data:[
                        {date:"2011年",val:"28.10"},
                        {date:"2012年",val:"29.96"},
                        {date:"2013年",val:"31.44"},
                        {date:"2014年",val:"38.09"},
                        {date:"2015年",val:"43.13"},
                        {date:"2016年",val:"47.76"},
                        {date:"2017年",val:"51.65"},
                        {date:"2018年",val:"46.18"}
                    ]},
                {name:"林业（亿元）",
                    data:[
                        {date:"2011年",val:"0.58"},
                        {date:"2012年",val:"0.61"},
                        {date:"2013年",val:"0.65"},
                        {date:"2014年",val:"0.71"},
                        {date:"2015年",val:"0.86"},
                        {date:"2016年",val:"1.08"},
                        {date:"2017年",val:"1.25"},
                        {date:"2018年",val:"1.38"}
                    ]},
                {name:"牧业（亿元）",
                    data:[
                        {date:"2011年",val:"17.19"},
                        {date:"2012年",val:"17.74"},
                        {date:"2013年",val:"18.29"},
                        {date:"2014年",val:"18.95"},
                        {date:"2015年",val:"21.29"},
                        {date:"2016年",val:"23.45"},
                        {date:"2017年",val:"23.44"},
                        {date:"2018年",val:"12.74"}
                    ]},
                {name:"渔业（亿元）",
                    data:[
                        {date:"2011年",val:"3.06"},
                        {date:"2012年",val:"3.24"},
                        {date:"2013年",val:"3.43"},
                        {date:"2014年",val:"3.96"},
                        {date:"2015年",val:"4.29"},
                        {date:"2016年",val:"4.51"},
                        {date:"2017年",val:"5.04"},
                        {date:"2018年",val:"4.83"}
                    ]},
            ]
    };

    var  option = {
        color: ['#f2a07d', '#4495c1', '#9a7cd7','#900000', '#04aeb2'],
        title: [{
            text: data5.title,
            left: 'center',
            textStyle:{fontWeight:'bold',fontSize:24}
        }],
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            bottom: '0%',
            data: function(){
                var list = [];
                for (var i = 0; i < data5.vdata.length; i++) {
                    list.push(data5.vdata[i].name);
                }
                return list;
            }()
        },
        xAxis: {
            type: 'category',
            "axisTick": {
                "show": false
            },
            boundaryGap: false,
            axisLabel:{ textStyle: { fontSize:'15'}},
            data: function(){
                var list = [];
                for(var j=0;j<data5.vdata[0].data.length;j++){
                    list.push(data5.vdata[0].data[j].date);
                }
                return list;
            }()
        },
        yAxis: {
            type: 'value',
            axisLabel:{ textStyle: { fontSize:'15'}}
        },
        series: [{
            name: data5.vdata[0].name,
            smooth: true,
            type: 'line',
            symbolSize: 12,
            symbol: 'emptyCircle',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3//折线宽度
                    },
                    label : {show: true}
                }
            },
            data: function(){
                var list = [];
                for(var i = 0;i<data5.vdata.length;i++){
                    for(var j=0;j<data5.vdata[i].data.length;j++){
                        switch(i){
                            case 0:list.push(data5.vdata[i].data[j].val);break;
                        }
                    }
                }
                return list;
            }()
        }, {
            name: data5.vdata[1].name,
            smooth: true,
            type: 'line',
            symbolSize: 12,
            symbol: 'emptyCircle',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3//折线宽度
                    },
                    label : {show: true}
                }
            },
            data: function(){
                var list = [];
                for(var i = 0;i<data5.vdata.length;i++){
                    for(var j=0;j<data5.vdata[i].data.length;j++){
                        switch(i){
                            case 1:list.push(data5.vdata[i].data[j].val);break;
                        }
                    }
                }
                return list;
            }()
        }, {
            name: data5.vdata[2].name,
            smooth: true,
            type: 'line',
            symbolSize: 12,
            symbol: 'emptyCircle',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3//折线宽度
                    },
                    label : {show: false}
                }
            },
            data: function(){
                var list = [];
                for(var i = 0;i<data5.vdata.length;i++){
                    for(var j=0;j<data5.vdata[i].data.length;j++){
                        switch(i){
                            case 2:list.push(data5.vdata[i].data[j].val);break;
                        }
                    }
                }
                return list;
            }()
        }, {
            name: data5.vdata[3].name,
            smooth: true,
            type: 'line',
            symbolSize: 12,
            symbol: 'emptyCircle',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3//折线宽度
                    },
                    label : {show: true}
                }
            },
            data: function(){
                var list = [];
                for(var i = 0;i<data5.vdata.length;i++){
                    for(var j=0;j<data5.vdata[i].data.length;j++){
                        switch(i){
                            case 3:list.push(data5.vdata[i].data[j].val);break;
                        }
                    }
                }
                return list;
            }()
        },
            {
                name: data5.vdata[4].name,
                smooth: true,
                type: 'line',
                symbolSize: 12,
                symbol: 'emptyCircle',
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:3//折线宽度
                        },
                        label : {show: true}
                    }
                },
                data: function(){
                    var list = [];
                    for(var i = 0;i<data5.vdata.length;i++){
                        for(var j=0;j<data5.vdata[i].data.length;j++){
                            switch(i){
                                case 4:list.push(data5.vdata[i].data[j].val);break;
                            }
                        }
                    }
                    return list;
                }()
            }

        ]
    }

// 使用刚指定的配置项和数据显示图表。
    myChart.showLoading(); //添加loading
    myChart.hideLoading(); //隐藏loading
    myChart.setOption(option);

}
echarts2();