/**
 * Created by fangyi on 2019/10/25.
 */
function echarts4() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts03"));
    option = {
        title:{
            text:'工业总产值',
            left: 'center',
            textStyle:{fontWeight:'bold',fontSize:24}
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ddc0e2'
                }
            }
        },
        toolbox: {
            show : true,
            x: 'center',
            y: 'bottom',
            itemGap:20,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        legend: {
            data:['工业总产值（亿元）']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap : false,
                data: ['2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '总产值（亿元）',
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'总产值（亿元）',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        color: "#ddc0e2",
                        areaStyle: {
                            type: 'default',
                            color: '#ddc0e2'
                        }}
                },
                data:['538.4','667.2','812.0','944.6', '1099.58', '1281.49', '1478.94']
            },

        ]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.showLoading(); //添加loading
    myChart.hideLoading(); //隐藏loading
    myChart.setOption(option);

}
echarts4();