/**
 * Created by fangyi on 2019/10/25.
 */
function echarts7() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts07"));
        option = {
			title:{
					text:'社会消费品零售',
					left: 'center',
					textStyle:{fontWeight:'bold',fontSize:24}
			},
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                top: '70px',
                data:['社会消费品零售总额（亿元）','城镇消费品零售额（亿元）','乡村消费品零售额（亿元）']
            },
            toolbox: {
                show : true,
                x: 'center',
                y: 'bottom',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2012年','2013年','2014年','2015年','2016年','2017年','2018年']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'社会消费品零售总额（亿元）',
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            color: "#0274b0",
                            areaStyle: {
                                type: 'default',
                                color: '#0274b0'
                            }}
                    },
                    data:[54.75, 64.22, 79.37, 100.21, 127.44, 152.78,196.07]
                },
                {
                    name:'城镇消费品零售额（亿元）',
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            color: "#f2a07d",
                            areaStyle: {
                                type: 'default',
                                color: '#f2a07d'
                            }}
                    },
                    data:[41.83, 50.78, 66.75, 83.15, 112.53, 134.99, 173.49]
                },
                {
                    name:'乡村消费品零售额（亿元）',
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
                    data:[12.92, 13.43, 12.62, 17.06, 14.91, 17.79, 22.58]
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
		myChart.showLoading(); //添加loading
        myChart.hideLoading(); //隐藏loading
        myChart.setOption(option);

}
echarts7();