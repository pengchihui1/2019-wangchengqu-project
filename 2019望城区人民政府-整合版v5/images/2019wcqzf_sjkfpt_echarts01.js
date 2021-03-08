/**
 * Created by fangyi on 2019/10/25.
 */
function echarts1() {
// 初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts01"));
	var data5 = {title:"生产总值",
	vdata:
		[{name:"地区生产总值（亿元）",
		data:[
			 {date:"2011年",val:"327.42"},
			 {date:"2012年",val:"374.88"},
			 {date:"2013年",val:"427.49"},
			 {date:"2014年",val:"469.77"},
			 {date:"2015年",val:"520.42"},
			 {date:"2016年",val:"582.19"},
			 {date:"2017年",val:"658.76"},
			 {date:"2018年",val:"671.42"}
		]},
		{name:"第一产业（亿元）",
		data:[
			 {date:"2011年",val:"27.68"},
			 {date:"2012年",val:"29.7"},
			 {date:"2013年",val:"29.12"},
			 {date:"2014年",val:"32.46"},
			 {date:"2015年",val:"35.53"},
			 {date:"2016年",val:"39.40"},
			 {date:"2017年",val:"43.31"},
			 {date:"2018年",val:"45.53"}
		]},
		{name:"第二产业（亿元）",
		data:[
			 {date:"2011年",val:"241.92"},
			 {date:"2012年",val:"276.78"},
			 {date:"2013年",val:"314.45"},
			 {date:"2014年",val:"342.12"},
			 {date:"2015年",val:"375.92"},
			 {date:"2016年",val:"416.30"},
			 {date:"2017年",val:"467.42"},
			 {date:"2018年",val:"444.59"}
		]},
		{name:"第三产业（亿元）",
		data:[
			 {date:"2011年",val:"57.83"},
			 {date:"2012年",val:"68.40"},
			 {date:"2013年",val:"80.59"},
			 {date:"2014年",val:"92.11"},
			 {date:"2015年",val:"105.10"},
			 {date:"2016年",val:"122.58"},
			 {date:"2017年",val:"145.81"},
			 {date:"2018年",val:"186.44"}
		]}]
	}

     	var  option = {
				    color: ['#f2a07d', '#4495c1', '#9a7cd7', '#04aeb2'],
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
			                    label : {show: true}
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
				    }
				    
				    ]
				}

// 使用刚指定的配置项和数据显示图表。
		myChart.showLoading(); //添加loading
        myChart.hideLoading(); //隐藏loading
        myChart.setOption(option);

}
echarts1();