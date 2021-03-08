/**
 * Created by fangyi on 2019/10/25.
 */
function echarts4(id) {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts04"));
        option = {
			title:{
					text:'固定资产投资',
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
                data:['投资总额（亿元）','增长率（百分比）']
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
                    name: '投资总额（亿元）',
                    axisLabel: {
                        formatter: '{value} 亿元'
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
                            color: "#ddc0e2",
                            barMaxWidth:40,
                            shadowBlur:0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 218, 226, 0.42)',
                            barBorderRadius: [0, 0, 0, 0],
                            label: {
                                show: false,
                            }
                        }
                    },
                    name:'投资总额',
                    barMaxWidth:40,
                    type:'bar',
                    data:['336.2','475.5','571.8', '681.04', '607.08', '752.35', '837.37']
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
                    name:'增长率',
                    type:'line',
                    yAxisIndex: 1,
                    data:['33.3','46.9','20.3','17.2', '14.6', '17.1', '11.3']
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
    myChart.showLoading(); //添加loading

        myChart.hideLoading(); //隐藏loading
        myChart.setOption(option);

}
echarts4();