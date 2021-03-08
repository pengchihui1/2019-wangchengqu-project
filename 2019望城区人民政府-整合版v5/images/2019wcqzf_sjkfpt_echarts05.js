/**
 * Created by fangyi on 2019/10/25.
 */
function echarts5(id) {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts05"));
    option = {
        title:{
            text:'三次产业结构',
            left: 'center',
            textStyle:{fontWeight:'bold',fontSize:24}
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
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
            data:['产业比重（百分比）','增长率（百分比）']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
                axisPointer: {
                    type: 'shadow',
                    lineStyle: {
                        color: '#e5e5e5'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '产业比重（%）',
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            {
                type: 'value',
                name: '增长率（%）',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                itemStyle: {
                    normal: {
                        color: "#66ea5d",
                        barMaxWidth:10,
                        shadowBlur:0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 218, 226, 0.42)',
                        barBorderRadius: [0, 0, 0, 0],
                        label: {
                            show: false,
                        }
                    }
                },
                name:'第一产业',
                barMaxWidth:40,
                type:'bar',
                data:['7.9','7.6','7.6', '7.6', '7.4', '6.9', '6.0']
            },
            {
                itemStyle: {
                    normal: {
                        color: "#f2a07d",
                        barMaxWidth:10,
                        shadowBlur:0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 218, 226, 0.42)',
                        barBorderRadius: [0, 0, 0, 0],
                        label: {
                            show: false,
                        }
                    }
                },
                name:'第二产业',
                barMaxWidth:40,
                type:'bar',
                data:['73.8','73.5','72.8', '72.2', '71.5', '71.0', '66.2']
            },
            {
                itemStyle: {
                    normal: {
                        color: "#1c82d7",
                        barMaxWidth:10,
                        shadowBlur:0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 218, 226, 0.42)',
                        barBorderRadius: [0, 0, 0, 0],
                        label: {
                            show: false,
                        }
                    }
                },
                name:'第三产业',
                barMaxWidth:40,
                type:'bar',
                data:['18.3','18.9','19.6', '20.2', '21.1', '22.1', '27.8']
            },
            {
                itemStyle: {
                    normal: {
                        color: "#fa2b2a",
                        shadowBlur:0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 218, 226, 0.42)',
                        barBorderRadius: [0, 0, 0, 0],
                        label: {
                            show: false,
                        }
                    }
                },
                name:'工业对经济贡献率',
                type:'line',
                yAxisIndex: 1,
                data:['67.2','67.9','62.7','62.7', '66.3', '59.7', '52.3']
            },
            {
                itemStyle: {
                    normal: {
                        color: "#9a7cd7",
                        shadowBlur:0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 218, 226, 0.42)',
                        barBorderRadius: [0, 0, 0, 0],
                        label: {
                            show: false,
                        }
                    }
                },
                name:'工业增加值比重',
                type:'line',
                yAxisIndex: 1,
                data:['57.5','59.6','58.3','57.7', '57.7', '56.3', '49.3']
            }
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.showLoading(); //添加loading

    myChart.hideLoading(); //隐藏loading
    myChart.setOption(option);

}
echarts5();