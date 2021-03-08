/**
 * Created by fangyi on 2019/10/25.
 */
function echarts8() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts08"));
        option = {
			title:{
					text:'人均可支配收入',
					left: 'center',
					textStyle:{fontWeight:'bold',fontSize:24}
			},
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                top: '70px',
                data:['全体居民人均可支配收入（元）','城镇居民人均可支配收入（元）','乡村居民人均可支配收入（元）']
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
                    data : ['2015年','2016年','2017年','2018年']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'全体居民人均可支配收入（元）',
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
                    data:[ 31352, 34025, 37049,40255]
                },
                {
                    name:'城镇居民人均可支配收入（元）',
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
                    data:[ 40179, 40179, 43548, 47201]
                },
                {
                    name:'乡村居民人均可支配收入（元）',
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
                    data:[ 27639, 27639, 29737, 32232]
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
		myChart.showLoading(); //添加loading
        myChart.hideLoading(); //隐藏loading
        myChart.setOption(option);

}
echarts8();