/**
 * Created by fangyi on 2019/10/25.
 */
function echarts6() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts06"));
        option = {
			title:{
					text:'外贸进出口总额',
					left: 'center',
					textStyle:{fontWeight:'bold',fontSize:24}
			},
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                top: '70px',
                data:['进出口总额（万美元）','出口额（万美元）','进口额（万美元）']
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
                    name:'进出口总额（万美元）',
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
                    data:[10300, 12154, 21829, 31969, 29008, 38686,70542]
                },
                {
                    name:'出口额（万美元）',
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
                    data:[5789, 9301, 16189, 19636, 25085, 31396,30519]
                },
                {
                    name:'进口额（万美元）',
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
                    data:[4511, 2853, 5640, 12333, 3923, 7290,40023]
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
		myChart.showLoading(); //添加loading
        myChart.hideLoading(); //隐藏loading
        myChart.setOption(option);

}
echarts6();