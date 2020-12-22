<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base
            ref="collapse"
            @selectionChange="selectionChange"
            @searchQuery="searchQuery"
            @ClickTotal="ClickTotal"
            nav-bar-show
            :totalCount="totalCount"
            :collapseData="collapseData">
    </my-collapse-base>
  </div>
</template>

<script>
	import MyCollapseBase from "../../../components/common/myCollapseBase";
	import common from "../../../components/js/common";

	export default {
		name: "huangGang",
		components: {MyCollapseBase},
		mixins: [common],
		props: {
			viewChange: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				collapseData: [
					{
						id: "revenueTable",
						name: "黄冈基础信息",
						allShow: true,
						icon: require("../../../assets/business/icon_1-1.png"),
						iconActive: require("../../../assets/business/icon_1-2.png"),
						collapseItem: [
							{
								id: "ab_2019",
								collapseTitle: "黄冈基础信息",
								EChartsBox: [
									{
										title: "黄冈服务区列表",
										time: true,
										input: true,
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "550px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												type: "table",
												height: "550px",
												style: {
													width: "100%",
													background: "#FFF",
												},
												isPagination: true,
												columns: [
													{prop: "serviceName", label: "服务区名称"},
													{prop: "B", label: "高速名称"},
													{
														prop: "C",
														label: "车流量(辆)",
														children: [
															{prop: "maxcart", label: "大车"},
															{prop: "mincart", label: "小车"},
														],
													},
													{prop: "shouyi", label: "收益(元)"},
													{prop: "G", label: "利润(元)"},
													{prop: "H", label: "坪效(元)"},
													{prop: "I", label: "面积(m)"},

													{
														prop: "J",
														label: "业态订单数",
														children: [
															{prop: "refuel", label: "加油"},
															{prop: "snack", label: "小吃"},
															{prop: "convenience", label: "便利店"},
															{prop: "catering", label: "餐饮"},
														],
													},
												],
												tableData: [],
											},
										],
									},
									{
										title: "接管运营总量",
										style: {
											cursor: 'pointer',
											width: "59.5%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'

										},
										EChartsItem: [
											{
												serviceName: '',
												unit: '个',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "等级分类占比",
										style: {
											cursor: 'pointer',
											width: "39.5%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {

													title: {
														text: '暂无数据',
														left: '43%',
														top: '48%'
													},
													tooltip: {
														trigger: 'item',
														formatter: '{a} <br/>{b}: {c} ({d}%)'
													},
													legend: {
														orient: 'vertical',
														right: 10,
														top: 'center',
														data: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类']
													},
													series: [
														{
															name: '访问来源',
															type: 'pie',
															radius: ['50%', '70%'],
															avoidLabelOverlap: false,
															label: {
																show: false,
																position: 'center'
															},
															emphasis: {
																label: {
																	show: true,
																	fontSize: '30',
																	fontWeight: 'bold'
																}
															},
															labelLine: {
																show: false
															},
															itemStyle: {
																normal: {
																	color: function (v) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[v.dataIndex];
																	},
																},
															},
															data: [
																{value: 335, name: 'Ⅰ类'},
																{value: 310, name: 'Ⅱ类'},
																{value: 234, name: 'Ⅲ类'},
																{value: 135, name: 'Ⅳ类'},
																{value: 1548, name: 'Ⅴ类'}
															]
														}
													]
												}
											},
										],
									},
									{
										title: "占地面积增长率",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '㎡',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "经营面积增长率",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '㎡',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "车流量",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '辆',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "订单增长率",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",
											marginBottom: '10px'
										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '单',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "客单价",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",

										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '元',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
									{
										title: "转换率",
										style: {
											cursor: 'pointer',
											width: "100%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											overflow: "hidden",

										},
										EChartsItem: [
											{
												serviceName: '大悟服务区',
												unit: '%',
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													xAxis: {
														type: 'category',
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													grid: {
														top: "70",
														right: "60",
														left: "60",
														bottom: "30",
													},
													tooltip: {
														trigger: "axis",
														formatter: "{b} : {c}",
														axisPointer: {
															type: "shadow"
														},
													},
													yAxis: {
														type: 'value',
														splitLine: {
															show: false
														},
														axisTick: {
															show: false,
														},
													},
													series: [{
														data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
														type: 'line',
														lineStyle: {
															color: "#fea528",
															width: 2,
															shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
															shadowBlur: 10,
															shadowOffsetY: 10,
														},
													}]
												}
											},
										],
									},
								],
							},
						],
					},
					{
						id: "revenue",
						name: "营收",
						icon: require("../../../assets/business/icon_1-1.png"),
						iconActive: require("../../../assets/business/icon_1-2.png"),
						collapseItem: [
							{
								id: "revenue_2020",
								year: 2020,
								collapseTitle: "2020年营收",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2020年营收",
										time: false,
										timeValue: "",
										style: {
											width: "35%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + "<br />" +
																val[0].value / 10000 +
																"万元"
															);
														},
													},
													grid: {
														top: "50",
														right: "60",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													dataZoom: [{
														type: 'inside'
													}, {
														type: 'slider'
													}],
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (val) {
																	return val / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
													],
												},
											}
										],
									},
									{
										title: "2020年营收业态占比/片区占比",
										time: false,
										select: false,
										style: {
											width: "64.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: "",},
													grid: {
														top: "20%",
														right: "40",
														left: "0",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													tooltip: {trigger: "item",},
													series: [{
														type: "pie",
														center: ["40%", "50%"],
														radius: ["25%", "40%"],
														clockwise: true,
														avoidLabelOverlap: true,
														hoverOffset: 15,
														itemStyle: {
															normal: {
																// 设置扇形的阴影
																shadowBlur: 30,
																shadowColor: 'rgba(0,0,0,0.3)',
																shadowOffsetX: -5,
																shadowOffsetY: 5,
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	// let text = v.name + "\n" + v.percent + "%";
																	let text = v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {

																length: 30,
																length2: 25,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: ""},
													tooltip: {trigger: "item"},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													series: [{
														type: "pie",
														minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
														avoidLabelOverlap: true, //是否启用防止标签重叠策略
														center: ["45%", "50%"],
														radius: ["30%", "45%"],
														clockwise: true,
														hoverOffset: 20,
														itemStyle: {
															normal: {
																// 设置扇形的阴影
																shadowBlur: 30,
																shadowColor: 'rgba(0,0,0,0.3)',
																shadowOffsetX: -5,
																shadowOffsetY: 5,
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	// let text = v.name + "\n" + v.percent + "%";
																	let text = v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {
																length: 30,
																length2: 10,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											}],
									},


								]
							},
							{
								id: "revenue_2019",
								year: 2019,
								collapseTitle: "2019年营收",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2019年营收",
										time: false,
										timeValue: "",
										style: {
											width: "35%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + "<br />" +
																(val[0].value / 10000).toFixed(2) +
																"万元"
															);
														},
													},
													grid: {
														top: "50",
														right: "60",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													dataZoom: [{
														type: 'inside'
													}, {
														type: 'slider'
													}],
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (val) {
																	return val / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
														// {
														//     type: 'value',
														//     min: '',//最小坐标
														//     max: '',//最大坐标
														//     axisLabel: {
														//         fontSize: 14,
														//         color: "#999",
														//         formatter: '{value} %'
														//     },
														//     axisLine: {
														//         lineStyle: {
														//             color:
														//                 "rgba(107,107,107,0.37)",
														//         },
														//     },
														//     splitLine: {
														//         show: false//是否显示分隔线。
														//     },
														//     axisTick: {
														//         show: false,
														//     },
														// }
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
														// {
														//     data: [],
														//     type: "line",
														//     name: "折线图",
														//     yAxisIndex: 1,
														//     // symbol: 'none',
														//     lineStyle: {
														//         color: "#fea2a2",
														//         width: 2,
														//         shadowColor:
														//             "rgba(0, 0, 0, 0.3)", //设置折线阴影
														//         shadowBlur: 10,
														//         shadowOffsetY: 10,
														//     },
														//     itemStyle: {
														//         normal: {
														//             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
														//                 offset: 0,
														//                 color: 'rgb(255, 204, 102)'
														//             }, {
														//                 offset: 1,
														//                 color: 'rgb(255, 153, 51)'
														//             }]),
														//             label: {
														//                 show: true,
														//                 position: 'top',
														//                 textStyle: {
														//                     fontSize: '16',
														//                     color: 'rgb(255, 156, 54)',
														//                 }
														//             }
														//         },
														//     },
														//     areaStyle: {
														//         normal: {
														//             color:
														//                 "rgba(0,0,0,0)",
														//         },
														//     },
														// },
													],
												},
											}
										],
									},
									{
										title: "2019年营收业态占比/片区占比",
										time: false,
										select: false,
										style: {
											width: "64.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: "",},
													grid: {
														top: "20%",
														right: "40",
														left: "0",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													tooltip: {trigger: "item",},
													series: [{
														type: "pie",
														center: ["40%", "50%"],
														radius: ["25%", "40%"],
														clockwise: true,
														avoidLabelOverlap: true,
														hoverOffset: 15,
														itemStyle: {
															normal: {
																// 设置扇形的阴影
																shadowBlur: 30,
																shadowColor: 'rgba(0,0,0,0.3)',
																shadowOffsetX: -5,
																shadowOffsetY: 5,
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	// let text = v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {

																length: 30,
																length2: 25,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: ""},
													tooltip: {trigger: "item"},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													series: [{
														type: "pie",
														minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
														avoidLabelOverlap: true, //是否启用防止标签重叠策略
														center: ["45%", "50%"],
														radius: ["30%", "45%"],
														clockwise: true,
														hoverOffset: 20,
														itemStyle: {
															normal: {
																// 设置扇形的阴影
																shadowBlur: 30,
																shadowColor: 'rgba(0,0,0,0.3)',
																shadowOffsetX: -5,
																shadowOffsetY: 5,
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	// let text = v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {
																length: 30,
																length2: 10,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											}],
									},


								]
							},
							{
								id: "revenue_gd",
								collapseTitle: "查看更多",
								EChartsBox: []
							},
						],
					},
					{
						id: "profit",
						name: "利润",
						icon: require("../../../assets/business/icon_2-1.png"),
						iconActive: require("../../../assets/business/icon_2-2.png"),
						collapseItem: [
							{
								id: "profit_2020",
								year: 2020,
								collapseTitle: "2020年利润",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2020年利润",
										time: false,
										timeValue: "",
										style: {
											width: "35%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + "<br />" +
																val[0].value / 10000 +
																"万元"
															);
														},
													},
													grid: {
														top: "50",
														right: "60",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													dataZoom: [{
														type: 'inside'
													}, {
														type: 'slider'
													}],
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (val) {
																	return val / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
														// {
														//     type: 'value',
														//     min: '',//最小坐标
														//     max: '',//最大坐标
														//     axisLabel: {
														//         fontSize: 14,
														//         color: "#999",
														//         formatter: '{value} %'
														//     },
														//     axisLine: {
														//         lineStyle: {
														//             color:
														//                 "rgba(107,107,107,0.37)",
														//         },
														//     },
														//     splitLine: {
														//         show: false//是否显示分隔线。
														//     },
														//     axisTick: {
														//         show: false,
														//     },
														// }
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
														// {
														//     data: [],
														//     type: "line",
														//     name: "折线图",
														//     yAxisIndex: 1,
														//     // symbol: 'none',
														//     lineStyle: {
														//         color: "#fea2a2",
														//         width: 2,
														//         shadowColor:
														//             "rgba(0, 0, 0, 0.3)", //设置折线阴影
														//         shadowBlur: 10,
														//         shadowOffsetY: 10,
														//     },
														//     itemStyle: {
														//         normal: {
														//             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
														//                 offset: 0,
														//                 color: 'rgb(255, 204, 102)'
														//             }, {
														//                 offset: 1,
														//                 color: 'rgb(255, 153, 51)'
														//             }]),
														//             label: {
														//                 show: true,
														//                 position: 'top',
														//                 textStyle: {
														//                     fontSize: '16',
														//                     color: 'rgb(255, 156, 54)',
														//                 }
														//             }
														//         },
														//     },
														//     areaStyle: {
														//         normal: {
														//             color:
														//                 "rgba(0,0,0,0)",
														//         },
														//     },
														// },
													],
												},
											}
										],
									},
									{
										title: "2020年利润业态占比/片区占比",
										time: false,
										select: false,
										style: {
											width: "64.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: "",},
													grid: {
														top: "20%",
														right: "40",
														left: "0",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													tooltip: {trigger: "item",},
													series: [{
														type: "pie",
														center: ["40%", "50%"],
														radius: ["25%", "40%"],
														clockwise: true,
														avoidLabelOverlap: true,
														hoverOffset: 15,
														itemStyle: {
															normal: {
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {

																length: 30,
																length2: 25,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: ""},
													tooltip: {trigger: "item"},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													series: [{
														type: "pie",
														minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
														avoidLabelOverlap: true, //是否启用防止标签重叠策略
														center: ["45%", "50%"],
														radius: ["30%", "45%"],
														clockwise: true,
														hoverOffset: 20,
														itemStyle: {
															normal: {
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {
																length: 30,
																length2: 10,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											}],
									},


								]
							},
							{
								id: "profit_2019",
								year: 2019,
								collapseTitle: "2019年利润",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2019年利润",
										time: false,
										timeValue: "",
										style: {
											width: "35%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + "<br />" +
																val[0].value / 10000 +
																"万元"
															);
														},
													},
													grid: {
														top: "50",
														right: "60",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													dataZoom: [{
														type: 'inside'
													}, {
														type: 'slider'
													}],
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (val) {
																	return val / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
														// {
														//     type: 'value',
														//     min: '',//最小坐标
														//     max: '',//最大坐标
														//     axisLabel: {
														//         fontSize: 14,
														//         color: "#999",
														//         formatter: '{value} %'
														//     },
														//     axisLine: {
														//         lineStyle: {
														//             color:
														//                 "rgba(107,107,107,0.37)",
														//         },
														//     },
														//     splitLine: {
														//         show: false//是否显示分隔线。
														//     },
														//     axisTick: {
														//         show: false,
														//     },
														// }
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
														// {
														//     data: [],
														//     type: "line",
														//     name: "折线图",
														//     yAxisIndex: 1,
														//     // symbol: 'none',
														//     lineStyle: {
														//         color: "#fea2a2",
														//         width: 2,
														//         shadowColor:
														//             "rgba(0, 0, 0, 0.3)", //设置折线阴影
														//         shadowBlur: 10,
														//         shadowOffsetY: 10,
														//     },
														//     itemStyle: {
														//         normal: {
														//             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
														//                 offset: 0,
														//                 color: 'rgb(255, 204, 102)'
														//             }, {
														//                 offset: 1,
														//                 color: 'rgb(255, 153, 51)'
														//             }]),
														//             label: {
														//                 show: true,
														//                 position: 'top',
														//                 textStyle: {
														//                     fontSize: '16',
														//                     color: 'rgb(255, 156, 54)',
														//                 }
														//             }
														//         },
														//     },
														//     areaStyle: {
														//         normal: {
														//             color:
														//                 "rgba(0,0,0,0)",
														//         },
														//     },
														// },
													],
												},
											}
										],
									},
									{
										title: "2019年利润业态占比/片区占比",
										time: false,
										select: false,
										style: {
											width: "64.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: "",},
													grid: {
														top: "20%",
														right: "40",
														left: "0",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													tooltip: {trigger: "item",},
													series: [{
														type: "pie",
														center: ["40%", "50%"],
														radius: ["25%", "40%"],
														clockwise: true,
														avoidLabelOverlap: true,
														hoverOffset: 15,
														itemStyle: {
															normal: {
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {

																length: 30,
																length2: 25,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "50%",
													height: "300px",
												},
												option: {
													title: {text: ""},
													tooltip: {trigger: "item"},
													legend: {
														orient: "vertical",
														top: 'center',
														right: 10,
													},
													series: [{
														type: "pie",
														minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
														avoidLabelOverlap: true, //是否启用防止标签重叠策略
														center: ["45%", "50%"],
														radius: ["30%", "45%"],
														clockwise: true,
														hoverOffset: 20,
														itemStyle: {
															normal: {
																color: function (v) {
																	let colorList = [
																		"#76c15c",
																		"#15b3e2",
																		"#2e65fd",
																		"#1fcaa8",
																		"#ee6565",
																		"#fec02a",
																		"#fe3922",
																		"#52fe36",
																		"#fe3afc",
																	];
																	return colorList[v.dataIndex];
																},
															},
														},
														label: {
															show: true,
															position: "outer",
															width: 0,
															height: 0,
															lineHeight: 0,
															backgroundColor: "auto",
															padding: [2, -2, 2, -2,],
															borderRadius: 2,
															distanceToLabelLine: 0,
															normal: {
																formatter(v) {
																	let text = v.name + "\n" + v.percent + "%";
																	return text;
																},
																textStyle: {
																	fontSize: 14,
																},
															},
														},
														labelLine: {
															normal: {
																length: 30,
																length2: 10,
																lineStyle: {
																	width: 1,
																},
															},
														},
														data: [],
													}],
												},
											}],
									},


								]
							},
							{
								id: "revenue_gd",
								collapseTitle: "查看更多",
								EChartsBox: []
							},
						],
					},
					{
						id: "cost",
						name: "成本",
						icon: require("../../../assets/business/icon_3-1.png"),
						iconActive: require("../../../assets/business/icon_3-2.png"),
						collapseItem: [
							{
								id: "cost_2020",
								year: 2020,
								collapseTitle: "2020年成本",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2020年实际成本",
										time: false,
										timeValue: "",
										style: {
											width: "40%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + '<br>' +
																val[0].value / 10000 +
																"元"
															);
														},
													},
													grid: {
														top: "50",
														right: "40",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (value) {
																	return value / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
														{
															data: [],
															type: "line",
															name: "折线图",
															// symbol: 'none',
															lineStyle: {
																color: "#fea2a2",
																width: 2,
																shadowColor:
																	"rgba(0, 0, 0, 0.3)", //设置折线阴影
																shadowBlur: 10,
																shadowOffsetY: 10,
															},
															areaStyle: {
																normal: {
																	color:
																		"rgba(0,0,0,0)",
																},
															},
														},
													],
												},
											},
										],
									},
									{
										title: "2020年业态占比",
										time: false,
										select: false,
										style: {
											width: "29.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40",
													},
													legend: {
														orient: "horizontal",
														bottom: 10,
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["50%", "50%"],
															radius: ["25%", "40%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	color: function (v) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[v.dataIndex];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [2, -2, 2, -2,],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text = v.name + "\n" + v.percent + "%";
																		// let text = v.percent + "%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 25,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: (function () {
																let data = [];
																let title = [
																	"特产",
																	"小吃",
																	"餐饮",
																	"便利店",
																	"加油",
																];
																let datas = [];
																datas.forEach((element, index) => {
																	data.push({
																		name: title[index],
																		value: element,
																	});
																});
																return data;
															})(),
														},
													],
												},
											},
										],
									},
									{
										title: "2020年片区占比",
										time: false,
										select: false,
										style: {
											width: "29.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "item",
													},

													legend: {
														orient: "horizontal",
														bottom: 10,
													},

													series: [
														{
															type: "pie",
															minAngle: 5,
															avoidLabelOverlap: true,
															center: ["48%", "50%"],
															radius: ["30%", "38%"],
															clockwise: true,
															hoverOffset: 20,
															itemStyle: {
																normal: {
																	color: function (v) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[v.dataIndex];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [2, -2, 2, -2,],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		// let text = v.percent + "%";
																		let text = v.name + "\n" + v.percent + "%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															labelLine: {
																normal: {
																	length: 30,
																	length2: 10,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: [],
														},
													],
												},
											},
										],
									},
									{
										title: "2020年公司种类预算控制",
										time: false,
										select: false,
										style: {
											width: "40%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: "5px",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												isbar: true,
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: 20,
														left: 20,
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name +
																":" +
																val[0].value +
																"万元" +
																"<br>" +
																val[1].value +
																"万元" +
																"<br>" +
																"执行率:" +
																val[2].value +
																"%"
															);
														},
													},
													grid: {
														left: "3%",
														right: "4%",
														bottom: "3%",
														containLabel: true,
													},
													xAxis: {
														type: "value",
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
														axisLabel: {
															show: false,
														},
													},
													yAxis: {
														type: "category",
														data: [
															"办公费",
															"交通",
															"误餐费",
															"业务招待费",
															"差旅费",
														],
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
													},
													series: [
														{
															name: "A门店",
															type: "bar",
															stack: "总量",
															barWidth: 20,
															itemStyle: {
																normal: {
																	color:
																		"#379DFB",
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#fff",
																	position:
																		"insideRight",
																},
															},
															z: 10,
															data: [

																0.00,
																3.41,
																8.16,
																52.36,
																86.64,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"#dfe5f1",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#000",
																	position:
																		"insideRight",
																},
															},
															z: 5,
															data: [

																0.00,
																2.17,
																1.05,
																28.26,
																60.99,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"rgba(237,125,49, 0)",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	color: "red",
																	show: true,
																	position: [
																		10,
																		5,
																	],
																	formatter: function (params) {
																		return params.value + '%'
																	}

																},
															},
															z: 5,
															data: [

																'0',
																'63.78',
																'12.90',
																'53.97',
																'70.40',
															],
														},
													],
												},
											},
										],
									},
									{
										title: "实际/预算",
										time: false,
										select: false,
										style: {
											width: "59.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: "5px",
										},
										EChartsItem: [
											// {
											//     type: "box",
											//     style: {
											//         width: "30%",
											//         height: "300px",
											//         position: "relative",
											//         style: {
											//             content: "差旅费实际:86.64万元",
											//             width: "80%",
											//             color: "#fff",
											//             height: "120px",
											//             background: "#38d",
											//             position: "absolute",
											//             top: "80px",
											//             left: "10%",
											//             borderRadius: "10px",
											//             lineHeight: "120px",
											//             fontWeight: 700,
											//             textAlign: "center",
											//             fontSize: "20px",
											//         },
											//     },
											//     option: {},
											// },
											// {
											//     type: "box",
											//     /*ECharts的属性*/
											//     style: {
											//         width: "30%",
											//         height: "300px",
											//         position: "relative",
											//         style: {
											//             content: "差旅费预算:60.99万元",
											//             width: "80%",
											//             color: "#fff",
											//             height: "120px",
											//             background: "#81dd9d",
											//             position: "absolute",
											//             top: "130px",
											//             left: "10%",
											//             borderRadius: "10px",
											//             lineHeight: "120px",
											//             fontWeight: 700,
											//             textAlign: "center",
											//             fontSize: "20px",
											//         },
											//     },
											//     option: {},
											// },
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: '',
														x: "15%",
														y: "center",
														textStyle: {
															fontWeight: "normal",
															color: "#29EEF3",
															fontSize: "25",
														},
													},
													legend: {
														left: 'center',
														top: 'center',
														orient: "vertical",
														data: ['差旅费', '业务招待费', '误餐费', '交通', '办公费']
													},
													tooltip: {
														formatter: function (
															params
														) {
															return (
																params.name +
																"：" +
																params.percent +
																" %"
															);
														},
													},
													series: [{
														name: '半径模式',
														type: 'pie',
														radius: [30, 110],
														center: ['75%', '50%'],
														roseType: 'radius',
														label: {
															show: false
														},
														emphasis: {
															label: {
																show: true
															}
														},
														itemStyle: {
															emphasis: {
																shadowBlur: 10,
																shadowOffsetX: 0,
																shadowColor: 'rgba(0, 0, 0, 0.5)'
															},
															normal: {
																color: function (params) {
																	//自定义颜色
																	var colorList = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
																	return colorList[params.dataIndex]
																}
															}
														},
														data: [
															{value: 60.99, name: '差旅费'},
															{value: 28.26, name: '业务招待费'},
															{value: 1.05, name: '误餐费'},
															{value: 2.17, name: '交通'},
															// {value: 0, name: '办公费'}
														]
													},
														{
															name: '面积模式',
															type: 'pie',
															radius: [30, 110],
															center: ['25%', '50%'],
															roseType: 'radius',
															itemStyle: {
																emphasis: {
																	shadowBlur: 10,
																	shadowOffsetX: 0,
																	shadowColor: 'rgba(0, 0, 0, 0.5)'
																},
																normal: {
																	color: function (params) {
																		//自定义颜色
																		var colorList = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
																		return colorList[params.dataIndex]
																	}
																}
															},
															data: [
																{value: 86.64, name: '差旅费',},
																{value: 52.36, name: '业务招待费'},
																{value: 8.16, name: '误餐费'},
																{value: 3.14, name: '交通'},
																// {value: 0, name: '办公费'}

															]
														}],
												},
											},

										],
									},
								],
							},
							{
								id: "cost_2019",
								year: 2019,
								collapseTitle: "2019年成本",
								allQuery: true,
								allQueryData: {
									input: false,
									select: false,
									time: true
								},
								EChartsBox: [
									{
										title: "2019年实际成本",
										time: false,
										timeValue: "",
										style: {
											width: "40%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name + '月' +
																":" + '<br>' +
																val[0].value / 10000 +
																"元"
															);
														},
													},
													grid: {
														top: "50",
														right: "40",
														left: "60",
														bottom: "60", //图表尺寸大小
													},
													xAxis: [
														{
															type: "category",
															color: "#59588D",
															data: [],
															axisLabel: {
																margin: 10,
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
														},
													],
													yAxis: [
														{
															axisLabel: {
																formatter: function (params) {
																	return params / 10000
																},
																color: "#999",
																textStyle: {
																	fontSize: 12,
																},
															},
															axisLine: {
																lineStyle: {
																	color:
																		"rgba(107,107,107,0.37)",
																},
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																lineStyle: {
																	color:
																		"rgba(131,101,101,0.2)",
																	type: "dashed",
																},
															},
														},
													],
													series: [
														{
															type: "bar",
															data: [],
															barWidth: "16px",
															itemStyle: {
																normal: {
																	color:
																		"#38A0FF",
																	barBorderRadius: [
																		30,
																		30,
																		30,
																		30,
																	],
																},
															},
														},
														{
															data: [],
															type: "line",
															name: "折线图",
															// symbol: 'none',
															lineStyle: {
																color: "#fea2a2",
																width: 2,
																shadowColor:
																	"rgba(0, 0, 0, 0.3)", //设置折线阴影
																shadowBlur: 10,
																shadowOffsetY: 10,
															},
															areaStyle: {
																normal: {
																	color:
																		"rgba(0,0,0,0)",
																},
															},
														},
													],
												},
											},
										],
									},
									{
										title: "2019年业态占比",
										time: false,
										select: false,
										style: {
											width: "29.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40",
													},
													legend: {
														orient: "horizontal",
														bottom: 10,
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["50%", "50%"],
															radius: ["25%", "40%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	color: function (v) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[v.dataIndex];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [2, -2, 2, -2,],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text = v.name + "\n" + v.percent + "%";
																		// let text = v.percent + "%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 25,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: (function () {
																let data = [];
																let title = [
																	"特产",
																	"小吃",
																	"餐饮",
																	"便利店",
																	"加油",
																];
																let datas = [];
																datas.forEach((element, index) => {
																	data.push({
																		name: title[index],
																		value: element,
																	});
																});
																return data;
															})(),
														},
													],
												},
											},
										],
									},
									{
										title: "2019年片区占比",
										time: false,
										select: false,
										style: {
											width: "29.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
													},
													tooltip: {
														trigger: "item",
													},

													legend: {
														orient: "horizontal",
														bottom: 10,
													},

													series: [
														{
															type: "pie",
															minAngle: 5,
															avoidLabelOverlap: true,
															center: ["48%", "50%"],
															radius: ["30%", "38%"],
															clockwise: true,
															hoverOffset: 20,
															itemStyle: {
																normal: {
																	color: function (v) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[v.dataIndex];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [2, -2, 2, -2,],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		// let text = v.percent + "%";
																		let text = v.name + "\n" + v.percent + "%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															labelLine: {
																normal: {
																	length: 30,
																	length2: 10,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: [],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年公司种类预算控制",
										time: false,
										select: false,
										style: {
											width: "50%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: "5px",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: 20,
														left: 20,
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name +
																":" +
																val[0].value +
																"元" +
																"<br>" +
																val[1].value +
																"元" +
																"<br>" +
																"实际占比:" +
																val[2].value +
																"%"
															);
														},
													},
													grid: {
														left: "3%",
														right: "4%",
														bottom: "3%",
														containLabel: true,
													},
													xAxis: {
														type: "value",
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
														axisLabel: {
															show: false,
														},
													},
													yAxis: {
														type: "category",
														data: [
															"北京",
															"上海",
															"天津",
															"深圳",
															"456",
															"7889",
															"99789",
														],
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
													},
													series: [
														{
															name: "A门店",
															type: "bar",
															stack: "总量",
															barWidth: 20,
															itemStyle: {
																normal: {
																	color:
																		"#379DFB",
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: true,
																	color: "#fff",
																	position:
																		"insideRight",
																},
															},
															z: 10,
															data: [],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"#dfe5f1",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: true,
																	color: "#000",
																	position:
																		"insideRight",
																},
															},
															z: 5,
															data: [],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"rgba(237,125,49, 0)",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	color: "red",
																	show: true,
																	position: [
																		10,
																		5,
																	],
																	formatter:
																		"{c}%",
																},
															},
															z: 5,
															data: [],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年预算控制",
										time: false,
										select: false,
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: "5px",
										},
										EChartsItem: [
											{
												type: "box",
												style: {
													width: "30%",
													height: "300px",
													position: "relative",
													style: {
														content: "实际:暂无数据",
														width: "80%",
														color: "#fff",
														height: "120px",
														background: "#38d",
														position: "absolute",
														top: "80px",
														left: "10%",
														borderRadius: "10px",
														lineHeight: "120px",
														fontWeight: 700,
														textAlign: "center",
														fontSize: "20px",
													},
												},
												option: {},
											},
											{
												type: "box",
												/*ECharts的属性*/
												style: {
													width: "30%",
													height: "300px",
													position: "relative",
													style: {
														content: "预算:暂无数据",
														width: "80%",
														color: "#fff",
														height: "120px",
														background: "#81dd9d",
														position: "absolute",
														top: "130px",
														left: "10%",
														borderRadius: "10px",
														lineHeight: "120px",
														fontWeight: 700,
														textAlign: "center",
														fontSize: "20px",
													},
												},
												option: {},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "40%",
													height: "300px",
												},
												option: {
													title: {
														text: 66 + "%",
														x: "center",
														y: "center",
														textStyle: {
															fontWeight: "normal",
															color: "#29EEF3",
															fontSize: "25",
														},
													},
													tooltip: {
														formatter: function (
															params
														) {
															return (
																params.name +
																"：" +
																params.percent +
																" %"
															);
														},
													},
													series: [
														{
															name: "circle",
															type: "pie",
															clockWise: true,
															radius: ["50%", "66%"],
															itemStyle: {
																normal: {
																	label: {
																		show: false,
																	},
																	labelLine: {
																		show: false,
																	},
																},
															},
															hoverAnimation: false,
															data: [
																{
																	value: 66,
																	name: "占比",
																	itemStyle: {
																		normal: {
																			color: {
																				// 颜色渐变
																				colorStops: [
																					{
																						offset: 0,
																						color:
																							"#4FADFD", // 0% 处的颜色
																					},
																					{
																						offset: 1,
																						color:
																							"#28E8FA", // 100% 处的颜色1
																					},
																				],
																			},
																			label: {
																				show: false,
																			},
																			labelLine: {
																				show: false,
																			},
																		},
																	},
																},
																{
																	name: "剩余",
																	value: 100 - 66,
																	itemStyle: {
																		normal: {
																			color:
																				"#E1E8EE",
																		},
																	},
																},
															],
														},
													],
												},
											},
										],
									},
								],
							},
							{
								id: "cost_gd",
								collapseTitle: "查看更多",
								EChartsBox: []
							},
						],
					},
					{
						id: "construction",
						name: "结构",
						icon: require("../../../assets/business/icon_5-1.png"),
						iconActive: require("../../../assets/business/icon_5-2.png"),
						collapseItem: [
							{
								id: "construction_2020",
								year: 2020,
								collapseTitle: "2020年业态结构",
								EChartsBox: [
									{
										title: "2020年品牌店面收入占比",
										time: false,
										timeValue: "",
										style: {
											width: "50%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: "43%",
														left: "55%",
														textStyle: {
															fontSize: 16,
														},
														subtext: "暂无数据",
														subtextStyle: {
															fontSize: 20,
															color: "#F98B2F",
															"fontWeight": "bolder"
														},
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 100,
														// padding:['1000px','100px','10px','10px']
														itemGap: 25
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["60%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	borderWidth: 0,
																	borderColor: 'rgba(255,255,255,0)',
																	shadowBlur: 20,
																	shadowColor: 'rgba(57,39,132,0.3)',
																	shadowOffsetX: -5,
																	shadowOffsetY: -5,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
																emphasis: {
																	borderWidth: 10,

																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [0, -100, 25, -100],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		return (
																			'{name|' + v.name + '}\n{value|' +
																			v.percent + '}'
																		);
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																	rich: {
																		name: {
																			fontSize: 14,
																			padding: [0, 10, 0, 4],

																		},
																		value: {
																			fontSize: 16,

																		}
																	}
																},
															},
															labelLine: {
																normal: {
																	length: 35,
																	length2: 35,
																	lineStyle: {
																		width: 1.5,
																	},
																},
															},
															data: [
																{
																	name: "一线品牌",
																	value: 1.45,
																},
																{
																	name: "二线品牌",
																	value: 2.93,
																},
																{
																	name: "无品牌",
																	value: 3.15,
																},
															],
														},

													],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "49.5%",
													height: "300px",
												},
												option: {
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														{
															name: "整体分类",
															type: "pie",
															radius: [0, "30%"],
															center: ["50%", "55%"],
															label: {
																position: "inner",
																textStyle: {
																	fontSize: 16
																}
															},
															itemStyle: {
																normal: {
																	borderColor:
																		"#fff",
																	borderWidth: 2,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															selectedMode: "single",
															data: [
																{
																	value: 875,
																	name: "特色",
																},
																{
																	value: 1239,
																	name: "传统",
																},
																{
																	value: 1239,
																	name: "品牌",
																},
															],
														},
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "特色",
																	type: "特色",
																},
																{
																	value: 1239,
																	name: "传统",
																	type: "传统",
																},
																{
																	value: 1239,
																	name: "品牌",
																	type: "品牌",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2020年品牌经营面积占比",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "暂无数据",
														top: '50%',
														left: '45%'
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														// {
														//     name: "整体分类",
														//     type: "pie",
														//     radius: [0, "30%"],
														//     center: ["50%", "55%"],
														//     label: {
														//         position: "inner",
														//         textStyle: {
														//             fontSize: 16
														//         }
														//     },
														//     itemStyle: {
														//         normal: {
														//             borderColor:
														//                 "#fff",
														//             borderWidth: 2,
														//             color: function (
														//                 params
														//             ) {
														//                 let colorList = [
														//                     "#76c15c",
														//                     "#15b3e2",
														//                     "#2e65fd",
														//                     "#1fcaa8",
														//                     "#ee6565",
														//                     "#fec02a",
														//                     "#fe3922",
														//                     "#52fe36",
														//                     "#fe3afc",
														//                 ];
														//                 return colorList[
														//                     params
														//                         .dataIndex
														//                 ];
														//             },
														//         },
														//     },
														//     selectedMode: "single",
														//     data: [
														//         {
														//             value: 875,
														//             name: "一线品牌",
														//         },
														//         {
														//             value: 1239,
														//             name: "二线品牌",
														//         },
														//         {
														//             value: 1239,
														//             name: "无品牌",
														//         },
														//     ],
														// },
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "一线品牌",
																	type: "一线品牌",
																},
																{
																	value: 1239,
																	name: "二线品牌",
																	type: "二线品牌",
																},
																{
																	value: 1239,
																	name: "无品牌",
																	type: "无品牌",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2020年品牌列表",
										style: {
											width: "100%",
											height: "310px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											marginTop: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '430px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "300px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "业态结构",
													},
													{
														prop: "B",
														label: "所在服务区个数",
													},
													{
														prop: "C",
														label: "经营场所个数",
													},
													{
														prop: "D",
														label: "占地面积(平方米)",
													},
													{
														prop: "E",
														label: "订单数",
													},
													{
														prop: "F",
														label: "收入(元)",
													},
													{
														prop: "G",
														label: "客单价(元)",
													},
													{
														prop: "H",
														label: "坪效(元)",
													},
													{
														prop: "I",
														label: "利润(元)",
													},
												],
												tableData: [
													{
														A: "一线品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "二线品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "无品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
												],
											},
										],
									},
									{
										title: "2020业态分类店面收入占比",
										time: false,
										timeValue: "",
										style: {
											width: "50%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: "43%",
														left: "55%",
														textStyle: {
															fontSize: 16,
														},
														subtext: "暂无数据",
														subtextStyle: {
															fontSize: 20,
															color: "#F98B2F",
															"fontWeight": "bolder"
														},
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 100,
														// padding:['1000px','100px','10px','10px']
														itemGap: 25
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["60%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	borderWidth: 0,
																	borderColor: 'rgba(255,255,255,0)',
																	shadowBlur: 20,
																	shadowColor: 'rgba(57,39,132,0.3)',
																	shadowOffsetX: -5,
																	shadowOffsetY: -5,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
																emphasis: {
																	borderWidth: 10,

																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [0, -100, 25, -100],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		return (
																			'{name|' + v.name + '}\n{value|' +
																			v.percent + '}'
																		);
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																	rich: {
																		name: {
																			fontSize: 14,
																			padding: [0, 10, 0, 4],

																		},
																		value: {
																			fontSize: 16,

																		}
																	}
																},
															},
															labelLine: {
																normal: {
																	length: 35,
																	length2: 35,
																	lineStyle: {
																		width: 1.5,
																	},
																},
															},
															data: [
																{
																	name: "便利店",
																	value: 1.45,
																},
																{
																	name: "特产",
																	value: 2.93,
																},
																{
																	name: "小吃",
																	value: 3.15,
																},
																{
																	name: "餐饮",
																	value: 3.15,
																},
															],
														},

													],
												},
											},

										],
									},
									{
										title: "2020业态分类经营面积占比",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: '暂无数据',
														left: '45%',
														top: '50%'
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														// {
														//     name: "整体分类",
														//     type: "pie",
														//     radius: [0, "30%"],
														//     center: ["50%", "55%"],
														//     label: {
														//         position: "inner",
														//         textStyle: {
														//             fontSize: 16
														//         }
														//     },
														//     itemStyle: {
														//         normal: {
														//             borderColor:
														//                 "#fff",
														//             borderWidth: 2,
														//             color: function (
														//                 params
														//             ) {
														//                 let colorList = [
														//                     "#76c15c",
														//                     "#15b3e2",
														//                     "#2e65fd",
														//                     "#1fcaa8",
														//                     "#ee6565",
														//                     "#fec02a",
														//                     "#fe3922",
														//                     "#52fe36",
														//                     "#fe3afc",
														//                 ];
														//                 return colorList[
														//                     params
														//                         .dataIndex
														//                 ];
														//             },
														//         },
														//     },
														//     selectedMode: "single",
														//     data: [
														//         {
														//             value: 875,
														//             name: "特色",
														//         },
														//         {
														//             value: 1239,
														//             name: "传统",
														//         },
														//         {
														//             value: 1239,
														//             name: "品牌",
														//         },
														//     ],
														// },
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "便利店",
																	type: "便利店",
																},
																{
																	value: 1239,
																	name: "餐饮",
																	type: "餐饮",
																},
																{
																	value: 1239,
																	name: "特产",
																	type: "特产",
																},
																{
																	value: 1239,
																	name: "小吃",
																	type: "小吃",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2020年业态列表",
										style: {
											width: "100%",
											height: "330px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											marginTop: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '550px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "250px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "业态结构",
													},
													{
														prop: "B",
														label: "所在服务区个数",
													},
													{
														prop: "C",
														label: "经营场所个数",
													},
													{
														prop: "D",
														label: "占地面积(平方米)",
													},
													{
														prop: "E",
														label: "订单数",
													},
													{
														prop: "F",
														label: "收入(元)",
													},
													{
														prop: "G",
														label: "客单价(元)",
													},
													{
														prop: "H",
														label: "坪效(元)",
													},
													{
														prop: "I",
														label: "利润(元)",
													},
												],
												tableData: [
													{
														A: "餐饮",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "小吃",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "便利店",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "特产",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
												],
											},
										],
									},
								],
							},
							{
								id: "construction_2019",
								year: 2019,
								collapseTitle: "2019年业态结构",
								EChartsBox: [
									{
										title: "2019年品牌店面收入占比",
										time: false,
										timeValue: "",
										style: {
											width: "50%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: "43%",
														left: "55%",
														textStyle: {
															fontSize: 16,
														},
														subtext: "暂无数据",
														subtextStyle: {
															fontSize: 20,
															color: "#F98B2F",
															"fontWeight": "bolder"
														},
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 100,
														// padding:['1000px','100px','10px','10px']
														itemGap: 25
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["60%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	borderWidth: 0,
																	borderColor: 'rgba(255,255,255,0)',
																	shadowBlur: 20,
																	shadowColor: 'rgba(57,39,132,0.3)',
																	shadowOffsetX: -5,
																	shadowOffsetY: -5,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
																emphasis: {
																	borderWidth: 10,

																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [0, -100, 25, -100],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		return (
																			'{name|' + v.name + '}\n{value|' +
																			v.percent + '}'
																		);
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																	rich: {
																		name: {
																			fontSize: 14,
																			padding: [0, 10, 0, 4],

																		},
																		value: {
																			fontSize: 16,

																		}
																	}
																},
															},
															labelLine: {
																normal: {
																	length: 35,
																	length2: 35,
																	lineStyle: {
																		width: 1.5,
																	},
																},
															},
															data: [
																{
																	name: "一线品牌",
																	value: 1.45,
																},
																{
																	name: "二线品牌",
																	value: 2.93,
																},
																{
																	name: "无品牌",
																	value: 3.15,
																},
															],
														},

													],
												},
											},
											{
												/*ECharts的属性*/
												style: {
													width: "49.5%",
													height: "300px",
												},
												option: {
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														{
															name: "整体分类",
															type: "pie",
															radius: [0, "30%"],
															center: ["50%", "55%"],
															label: {
																position: "inner",
																textStyle: {
																	fontSize: 16
																}
															},
															itemStyle: {
																normal: {
																	borderColor:
																		"#fff",
																	borderWidth: 2,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															selectedMode: "single",
															data: [
																{
																	value: 875,
																	name: "特色",
																},
																{
																	value: 1239,
																	name: "传统",
																},
																{
																	value: 1239,
																	name: "品牌",
																},
															],
														},
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "特色",
																	type: "特色",
																},
																{
																	value: 1239,
																	name: "传统",
																	type: "传统",
																},
																{
																	value: 1239,
																	name: "品牌",
																	type: "品牌",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年品牌经营面积占比",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "暂无数据",
														top: '50%',
														left: '45%'
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														// {
														//     name: "整体分类",
														//     type: "pie",
														//     radius: [0, "30%"],
														//     center: ["50%", "55%"],
														//     label: {
														//         position: "inner",
														//         textStyle: {
														//             fontSize: 16
														//         }
														//     },
														//     itemStyle: {
														//         normal: {
														//             borderColor:
														//                 "#fff",
														//             borderWidth: 2,
														//             color: function (
														//                 params
														//             ) {
														//                 let colorList = [
														//                     "#76c15c",
														//                     "#15b3e2",
														//                     "#2e65fd",
														//                     "#1fcaa8",
														//                     "#ee6565",
														//                     "#fec02a",
														//                     "#fe3922",
														//                     "#52fe36",
														//                     "#fe3afc",
														//                 ];
														//                 return colorList[
														//                     params
														//                         .dataIndex
														//                 ];
														//             },
														//         },
														//     },
														//     selectedMode: "single",
														//     data: [
														//         {
														//             value: 875,
														//             name: "一线品牌",
														//         },
														//         {
														//             value: 1239,
														//             name: "二线品牌",
														//         },
														//         {
														//             value: 1239,
														//             name: "无品牌",
														//         },
														//     ],
														// },
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "一线品牌",
																	type: "一线品牌",
																},
																{
																	value: 1239,
																	name: "二线品牌",
																	type: "二线品牌",
																},
																{
																	value: 1239,
																	name: "无品牌",
																	type: "无品牌",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年品牌列表",
										style: {
											width: "100%",
											height: "310px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											marginTop: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '430px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "300px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "业态结构",
													},
													{
														prop: "B",
														label: "所在服务区个数",
													},
													{
														prop: "C",
														label: "经营场所个数",
													},
													{
														prop: "D",
														label: "占地面积(平方米)",
													},
													{
														prop: "E",
														label: "订单数",
													},
													{
														prop: "F",
														label: "收入(元)",
													},
													{
														prop: "G",
														label: "客单价(元)",
													},
													{
														prop: "H",
														label: "坪效(元)",
													},
													{
														prop: "I",
														label: "利润(元)",
													},
												],
												tableData: [
													{
														A: "一线品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "二线品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "无品牌",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
												],
											},
										],
									},
									{
										title: "2019业态分类店面收入占比",
										time: false,
										timeValue: "",
										style: {
											width: "50%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: "43%",
														left: "55%",
														textStyle: {
															fontSize: 16,
														},
														subtext: "暂无数据",
														subtextStyle: {
															fontSize: 20,
															color: "#F98B2F",
															"fontWeight": "bolder"
														},
													},
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 100,
														// padding:['1000px','100px','10px','10px']
														itemGap: 25
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["60%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	borderWidth: 0,
																	borderColor: 'rgba(255,255,255,0)',
																	shadowBlur: 20,
																	shadowColor: 'rgba(57,39,132,0.3)',
																	shadowOffsetX: -5,
																	shadowOffsetY: -5,
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
																emphasis: {
																	borderWidth: 10,

																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor: "auto",
																padding: [0, -100, 25, -100],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		return (
																			'{name|' + v.name + '}\n{value|' +
																			v.percent + '}'
																		);
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																	rich: {
																		name: {
																			fontSize: 14,
																			padding: [0, 10, 0, 4],

																		},
																		value: {
																			fontSize: 16,

																		}
																	}
																},
															},
															labelLine: {
																normal: {
																	length: 35,
																	length2: 35,
																	lineStyle: {
																		width: 1.5,
																	},
																},
															},
															data: [
																{
																	name: "便利店",
																	value: 1.45,
																},
																{
																	name: "特产",
																	value: 2.93,
																},
																{
																	name: "小吃",
																	value: 3.15,
																},
																{
																	name: "餐饮",
																	value: 3.15,
																},
															],
														},

													],
												},
											},

										],
									},
									{
										title: "2019业态分类经营面积占比",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: '暂无数据',
														left: '45%',
														top: '50%'
													},
													legend: {
														orient: "vertical",
														top: 'center',
														left: 10,
														itemGap: 25
													},
													tooltip: {
														formatter:
															"{b}:{c}: ({d}%)",
													},

													series: [
														// {
														//     name: "整体分类",
														//     type: "pie",
														//     radius: [0, "30%"],
														//     center: ["50%", "55%"],
														//     label: {
														//         position: "inner",
														//         textStyle: {
														//             fontSize: 16
														//         }
														//     },
														//     itemStyle: {
														//         normal: {
														//             borderColor:
														//                 "#fff",
														//             borderWidth: 2,
														//             color: function (
														//                 params
														//             ) {
														//                 let colorList = [
														//                     "#76c15c",
														//                     "#15b3e2",
														//                     "#2e65fd",
														//                     "#1fcaa8",
														//                     "#ee6565",
														//                     "#fec02a",
														//                     "#fe3922",
														//                     "#52fe36",
														//                     "#fe3afc",
														//                 ];
														//                 return colorList[
														//                     params
														//                         .dataIndex
														//                 ];
														//             },
														//         },
														//     },
														//     selectedMode: "single",
														//     data: [
														//         {
														//             value: 875,
														//             name: "特色",
														//         },
														//         {
														//             value: 1239,
														//             name: "传统",
														//         },
														//         {
														//             value: 1239,
														//             name: "品牌",
														//         },
														//     ],
														// },
														{
															name: "招标方式",
															type: "pie",
															center: ["50%", "55%"],
															radius: ["40%", "55%"],
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		let colorList = [
																			"#76c15c",
																			"#15b3e2",
																			"#2e65fd",
																			"#1fcaa8",
																			"#ee6565",
																			"#fec02a",
																			"#fe3922",
																			"#52fe36",
																			"#fe3afc",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},

															data: [
																{
																	value: 875,
																	name: "便利店",
																	type: "便利店",
																},
																{
																	value: 1239,
																	name: "餐饮",
																	type: "餐饮",
																},
																{
																	value: 1239,
																	name: "特产",
																	type: "特产",
																},
																{
																	value: 1239,
																	name: "小吃",
																	type: "小吃",
																},
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年业态列表",
										style: {
											width: "100%",
											height: "330px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											marginTop: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '550px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "250px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "业态结构",
													},
													{
														prop: "B",
														label: "所在服务区个数",
													},
													{
														prop: "C",
														label: "经营场所个数",
													},
													{
														prop: "D",
														label: "占地面积(平方米)",
													},
													{
														prop: "E",
														label: "订单数",
													},
													{
														prop: "F",
														label: "收入(元)",
													},
													{
														prop: "G",
														label: "客单价(元)",
													},
													{
														prop: "H",
														label: "坪效(元)",
													},
													{
														prop: "I",
														label: "利润(元)",
													},
												],
												tableData: [
													{
														A: "餐饮",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "小吃",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "便利店",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
													{
														A: "特产",
														B: "/",
														C: "/",
														D: "/",
														E: "/",
														F: "/",
														G: "/",
														H: "/",
														I: "/",
													},
												],
											},
										],
									},
								],
							},

							{
								id: "construction_gd",
								collapseTitle: "查看更多",
								EChartsBox: []
							},
						],
					},
					{
						id: "rateofreturn",
						name: "回款率",
						icon: require("../../../assets/business/icon_6-1.png"),
						iconActive: require("../../../assets/business/icon_6-2.png"),
						collapseItem: [
							{
								id: "rateofreturn_2020",
								year: 2020,
								collapseTitle: "2020回款率",
								EChartsBox: [
									{
										title: "2020年回款率",
										time: false,
										timeValue: "",
										style: {
											width: "33%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												isTitle: true,
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													tooltip: {
														trigger: 'axis',
														axisPointer: {
															lineStyle: {
																color: {
																	type: 'linear',
																	x: 0,
																	y: 0,
																	x2: 0,
																	y2: 1,
																	colorStops: [{
																		offset: 0,
																		color: 'rgba(0, 255, 233,0)'
																	}, {
																		offset: 0.5,
																		color: 'rgba(0, 0, 0,1)',
																	}, {
																		offset: 1,
																		color: 'rgba(0, 255, 233,0)'
																	}],
																	global: false
																}
															},
														},
													},
													xAxis: {
														splitLine: {
															show: false,
														},
														type: "category",
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
													},
													legend: {
														data: ['机关欠款率', '服务区欠款率']
													},
													yAxis: {
														splitLine: {
															show: false,
														},
														type: "value",
													},
													series: [
														{
															name: '服务区欠款率',
															data: [22, 18, 19, 23, 29, 33, 31, 20, 15, 19, 33, 41],
															type: "line",
														},
														{
															name: '机关欠款率',
															data: [12, 13, 10, 13, 90, 23, 21, 18, 19, 23, 29, 33],
															type: "line",
														},
													],
												},
											},
										],
									},
									{
										title: "2020年回款率排行",
										time: false,
										timeValue: "",
										style: {
											width: "33%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												isbar: true,
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: 10,
														left: 20,
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name +
																":" +
																val[0].value +
																"万元" +
																"<br>" +
																val[1].value +
																"万元" +
																"<br>" +
																"执行率:" +
																val[2].value +
																"%"
															);
														},
													},
													grid: {
														left: "3%",
														right: "4%",
														bottom: "3%",
														top: "13%",
														containLabel: true,
													},
													xAxis: {
														type: "value",
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
														axisLabel: {
															show: false,
														},
													},
													yAxis: {
														type: "category",
														data: [
															"A",
															"B",
															"C",
															"D",
															"E",
															"F",
														],
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
													},
													series: [
														{
															name: "A门店",
															type: "bar",
															stack: "总量",
															barWidth: 20,
															itemStyle: {
																normal: {
																	color:
																		"#379DFB",
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#fff",
																	position:
																		"insideRight",
																},
															},
															z: 10,
															data: [

																0.00,
																2.5,
																3.41,
																8.16,
																52.36,
																86.64,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"#dfe5f1",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#000",
																	position:
																		"insideRight",
																},
															},
															z: 5,
															data: [

																0.00,
																1.11,
																2.17,
																1.05,
																28.26,
																60.99,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"rgba(237,125,49, 0)",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	color: "red",
																	show: true,
																	position: [
																		10,
																		5,
																	],
																	formatter: function (params) {
																		return params.value + '%'
																	}

																},
															},
															z: 5,
															data: [

																'0',
																'44.40',
																'63.78',
																'12.90',
																'53.97',
																'70.40',
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2020年欠款超期",
										style: {
											width: "33%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '470px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "330px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "供应商",
													},
													{
														prop: "B",
														label: "还款时间",
													},
													{
														prop: "C",
														label: "超期时间",
													},
													{
														prop: "D",
														label: "金额",
													},
												],
												tableData: [
													{
														A: "A",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "B",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "C",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "D",
														B: "/",
														C: "/",
														D: "/",

													},

												],
											},
										],
									},

									{
										title: "2020年预计收款",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: '10px'
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {

													title: {
														text: "",
													},
													tooltip: {
														//提示框组件
														trigger: "axis",
														formatter:
															"{b}<br />{a0}: {c0}<br />{a1}: {c1}",
														axisPointer: {
															type: "shadow",
															label: {
																backgroundColor:
																	"#6a7985",
															},
														},
														textStyle: {
															color: "#fff",
															fontStyle: "normal",
															fontFamily: "微软雅黑",
															fontSize: 12,
														},
													},
													grid: {
														left: "10%",
														right: "10%",
														bottom: "10%",
														top: "20%",
														//	padding:'0 0 10 0',
														containLabel: true,
													},
													legend: {
														top: '1%',
														textStyle: {
															color: '#a4a8b4'
														},
													},
													xAxis: [
														{
															type: "category",
															//	boundaryGap: true,//坐标轴两边留白
															data: [
																"1月",
																"2月",
																"3月",
																"4月",
																"5月",
																"6月",
																"7月",
																"8月",
																"9月",
																"10月",
																"11月",
																"12月",
															],
															axisLabel: {
																//坐标轴刻度标签的相关设置。
																//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
																//	margin:15,
																textStyle: {
																	color:
																		"#c8c9c9",
																	fontStyle:
																		"normal",
																	fontFamily:
																		"微软雅黑",
																	fontSize: 12,
																},
																// rotate: 50,
															},
															axisTick: {
																//坐标轴刻度相关设置。
																show: false,
															},
															axisLine: {
																//坐标轴轴线相关设置
																lineStyle: {
																	color:
																		"#c8c9c9",
																	opacity: 1,
																},
															},
															splitLine: {
																//坐标轴在 grid 区域中的分隔线。
																show: false,
															},
														},
														{
															type: "value",
															max:
																[
																	"1月",
																	"2月",
																	"3月",
																	"4月",
																	"5月",
																	"6月",
																	"7月",
																	"8月",
																	"9月",
																	"10月",
																	"11月",
																	"12月",
																].length * 100,
															show: false,
														},
													],
													yAxis: [
														{
															type: "value",
															splitNumber: 5,
															axisLabel: {
																textStyle: {
																	color:
																		"#c8c9c9",
																	fontStyle:
																		"normal",
																	fontFamily:
																		"微软雅黑",
																	fontSize: 12,
																},
															},
															axisLine: {
																show: false,
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																show: true,
																lineStyle: {
																	color: ["#fff"],
																	opacity: 0.06,
																},
															},
														},
													],
													series: [
														{
															name: "应收",
															type: "bar",
															data: [
																62,
																80,
																80,
																62,
																60,
																55,
																45,
																30,
																15,
																106,
																55,
																45,
																30,
																15,
																1,
															],
															barWidth: 12,
															barCategoryGap: 50,
															itemStyle: {
																normal: {
																	show: true,
																	color:
																		"#3aa1ff",
																	barBorderRadius: 50,
																	borderWidth: 0,
																},
															},
														},
														{
															name: "未收",
															type: "bar",
															data: [
																65,
																55,
																60,
																45,
																42,
																15,
																12,
																5,
																106,
																55,
																45,
																30,
																15,
																1,
															],
															barWidth: 12,
															barCategoryGap: 50,
															itemStyle: {
																normal: {
																	show: true,
																	color:
																		"#fc5ea9",
																	barBorderRadius: 50,
																	borderWidth: 0,
																},
															},
														},

													],
												},
											},
										],
									},
									{
										title: "2020年供应商回款占比",
										time: false,
										select: false,
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: '10px'
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: [
														{
															text: "暂无数据",
															// top: 15,
															// left: 20,
															x: "36%",
															y: "47%",
															textStyle: {
																fontSize: 16,
															},
														},
													],
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														right: '10%',
														top: '20%'
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["40%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		var colorList = [
																			"#73ddff",
																			"#73acff",
																			"#9e87ff",
																			"#ff3976",
																			"#2ccc44",
																			"#ffbc32",
																			"#fd866a",
																			"#1ca7ff",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: [
																{
																	name: "A供应商",
																	value: 1.45,
																},
																{
																	name: "B供应商",
																	value: 2.93,
																},
																{
																	name: "C供应商",
																	value: 3.15,
																},
																{
																	name: "D供应商",
																	value: 3.15,
																},
																{
																	name: "E供应商",
																	value: 3.15,
																},
																{
																	name: "F供应商",
																	value: 3.15,
																},
																{
																	name: "H供应商",
																	value: 3.15,
																},
																{
																	name: "其他",
																	value: 3.15,
																},
															],
														},
													],
												},
											},
										],
									},
								],
							},
							{
								id: "rateofreturn_2019",
								year: 2019,
								collapseTitle: "2019回款率",
								EChartsBox: [
									{
										title: "2019年回款率",
										time: false,
										timeValue: "",
										style: {
											width: "33%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												isTitle: true,
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													tooltip: {
														trigger: 'axis',
														axisPointer: {
															lineStyle: {
																color: {
																	type: 'linear',
																	x: 0,
																	y: 0,
																	x2: 0,
																	y2: 1,
																	colorStops: [{
																		offset: 0,
																		color: 'rgba(0, 255, 233,0)'
																	}, {
																		offset: 0.5,
																		color: 'rgba(0, 0, 0,1)',
																	}, {
																		offset: 1,
																		color: 'rgba(0, 255, 233,0)'
																	}],
																	global: false
																}
															},
														},
													},
													xAxis: {
														splitLine: {
															show: false,
														},
														type: "category",
														data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
													},
													legend: {
														data: ['机关欠款率', '服务区欠款率']
													},
													yAxis: {
														splitLine: {
															show: false,
														},
														type: "value",
													},
													series: [
														{
															name: '服务区欠款率',
															data: [22, 18, 19, 23, 29, 33, 31, 20, 15, 19, 33, 41],
															type: "line",
														},
														{
															name: '机关欠款率',
															data: [12, 13, 10, 13, 90, 23, 21, 18, 19, 23, 29, 33],
															type: "line",
														},
													],
												},
											},
										],
									},
									{
										title: "2019年回款率排行",
										time: false,
										timeValue: "",
										style: {
											width: "33%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												isbar: true,
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: {
														text: "",
														top: 10,
														left: 20,
													},
													tooltip: {
														trigger: "axis",
														formatter: function (val) {
															return (
																val[0].name +
																":" +
																val[0].value +
																"万元" +
																"<br>" +
																val[1].value +
																"万元" +
																"<br>" +
																"执行率:" +
																val[2].value +
																"%"
															);
														},
													},
													grid: {
														left: "3%",
														right: "4%",
														bottom: "3%",
														top: "13%",
														containLabel: true,
													},
													xAxis: {
														type: "value",
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
														axisLabel: {
															show: false,
														},
													},
													yAxis: {
														type: "category",
														data: [
															"A",
															"B",
															"C",
															"D",
															"E",
															"F",
														],
														splitLine: {
															show: false,
														},
														axisTick: {
															show: false,
														},
														axisLine: {
															show: false,
														},
													},
													series: [
														{
															name: "A门店",
															type: "bar",
															stack: "总量",
															barWidth: 20,
															itemStyle: {
																normal: {
																	color:
																		"#379DFB",
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#fff",
																	position:
																		"insideRight",
																},
															},
															z: 10,
															data: [

																0.00,
																2.5,
																3.41,
																8.16,
																52.36,
																86.64,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"#dfe5f1",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	show: false,
																	color: "#000",
																	position:
																		"insideRight",
																},
															},
															z: 5,
															data: [

																0.00,
																1.11,
																2.17,
																1.05,
																28.26,
																60.99,
															],
														},
														{
															name: "B门店",
															type: "bar",
															stack: "总量",
															itemStyle: {
																normal: {
																	color:
																		"rgba(237,125,49, 0)",
																	shadowBlur: [
																		0,
																		0,
																		0,
																		10,
																	],
																	barBorderRadius: [
																		5,
																		5,
																		5,
																		5,
																	],
																},
															},
															label: {
																normal: {
																	color: "red",
																	show: true,
																	position: [
																		10,
																		5,
																	],
																	formatter: function (params) {
																		return params.value + '%'
																	}

																},
															},
															z: 5,
															data: [

																'0',
																'44.40',
																'63.78',
																'12.90',
																'53.97',
																'70.40',
															],
														},
													],
												},
											},
										],
									},
									{
										title: "2019年欠款超期",
										style: {
											width: "33%",
											height: "350px",
											borderRadius: "10px",
											background: "white",
											marginBottom: "5px",
											overflow: "hidden",
										},
										EChartsItem: [
											{
												type: "table",
												height: '470px',
												isPagination: false,
												border: true,
												style: {
													width: "100%",
													height: "330px",
													background: "#fff",
												},
												columns: [
													{
														prop: "A",
														label: "供应商",
													},
													{
														prop: "B",
														label: "还款时间",
													},
													{
														prop: "C",
														label: "超期时间",
													},
													{
														prop: "D",
														label: "金额",
													},
												],
												tableData: [
													{
														A: "A",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "B",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "C",
														B: "/",
														C: "/",
														D: "/",

													},
													{
														A: "D",
														B: "/",
														C: "/",
														D: "/",

													},

												],
											},
										],
									},

									{
										title: "2019年预计收款",
										time: false,
										timeValue: "",
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: '10px'
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {

													title: {
														text: "",
													},
													tooltip: {
														//提示框组件
														trigger: "axis",
														formatter:
															"{b}<br />{a0}: {c0}<br />{a1}: {c1}",
														axisPointer: {
															type: "shadow",
															label: {
																backgroundColor:
																	"#6a7985",
															},
														},
														textStyle: {
															color: "#fff",
															fontStyle: "normal",
															fontFamily: "微软雅黑",
															fontSize: 12,
														},
													},
													grid: {
														left: "10%",
														right: "10%",
														bottom: "10%",
														top: "20%",
														//	padding:'0 0 10 0',
														containLabel: true,
													},
													legend: {
														top: '1%',
														textStyle: {
															color: '#a4a8b4'
														},
													},
													xAxis: [
														{
															type: "category",
															//	boundaryGap: true,//坐标轴两边留白
															data: [
																"1月",
																"2月",
																"3月",
																"4月",
																"5月",
																"6月",
																"7月",
																"8月",
																"9月",
																"10月",
																"11月",
																"12月",
															],
															axisLabel: {
																//坐标轴刻度标签的相关设置。
																//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
																//	margin:15,
																textStyle: {
																	color:
																		"#c8c9c9",
																	fontStyle:
																		"normal",
																	fontFamily:
																		"微软雅黑",
																	fontSize: 12,
																},
																// rotate: 50,
															},
															axisTick: {
																//坐标轴刻度相关设置。
																show: false,
															},
															axisLine: {
																//坐标轴轴线相关设置
																lineStyle: {
																	color:
																		"#c8c9c9",
																	opacity: 1,
																},
															},
															splitLine: {
																//坐标轴在 grid 区域中的分隔线。
																show: false,
															},
														},
														{
															type: "value",
															max:
																[
																	"1月",
																	"2月",
																	"3月",
																	"4月",
																	"5月",
																	"6月",
																	"7月",
																	"8月",
																	"9月",
																	"10月",
																	"11月",
																	"12月",
																].length * 100,
															show: false,
														},
													],
													yAxis: [
														{
															type: "value",
															splitNumber: 5,
															axisLabel: {
																textStyle: {
																	color:
																		"#c8c9c9",
																	fontStyle:
																		"normal",
																	fontFamily:
																		"微软雅黑",
																	fontSize: 12,
																},
															},
															axisLine: {
																show: false,
															},
															axisTick: {
																show: false,
															},
															splitLine: {
																show: true,
																lineStyle: {
																	color: ["#fff"],
																	opacity: 0.06,
																},
															},
														},
													],
													series: [
														{
															name: "应收",
															type: "bar",
															data: [
																62,
																80,
																80,
																62,
																60,
																55,
																45,
																30,
																15,
																106,
																55,
																45,
																30,
																15,
																1,
															],
															barWidth: 12,
															barCategoryGap: 50,
															itemStyle: {
																normal: {
																	show: true,
																	color:
																		"#3aa1ff",
																	barBorderRadius: 50,
																	borderWidth: 0,
																},
															},
														},
														{
															name: "未收",
															type: "bar",
															data: [
																65,
																55,
																60,
																45,
																42,
																15,
																12,
																5,
																106,
																55,
																45,
																30,
																15,
																1,
															],
															barWidth: 12,
															barCategoryGap: 50,
															itemStyle: {
																normal: {
																	show: true,
																	color:
																		"#fc5ea9",
																	barBorderRadius: 50,
																	borderWidth: 0,
																},
															},
														},

													],
												},
											},
										],
									},
									{
										title: "2019年供应商回款占比",
										time: false,
										select: false,
										style: {
											width: "49.5%",
											height: "350px",
											background: "white",
											borderRadius: "10px",
											overflow: "hidden",
											marginTop: '10px'
										},
										EChartsItem: [
											{
												/*ECharts的属性*/
												style: {
													width: "100%",
													height: "300px",
												},
												option: {
													title: [
														{
															text: "暂无数据",
															// top: 15,
															// left: 20,
															x: "36%",
															y: "47%",
															textStyle: {
																fontSize: 16,
															},
														},
													],
													grid: {
														top: "20%",
														right: "40",
														left: "60",
														bottom: "40", //图表尺寸大小
													},
													legend: {
														orient: "vertical",
														right: '10%',
														top: '20%'
													},
													tooltip: {
														trigger: "item",
													},
													series: [
														{
															type: "pie",
															center: ["40%", "50%"],
															radius: ["35%", "55%"],
															clockwise: true,
															avoidLabelOverlap: true,
															hoverOffset: 15,
															itemStyle: {
																normal: {
																	color: function (
																		params
																	) {
																		var colorList = [
																			"#73ddff",
																			"#73acff",
																			"#9e87ff",
																			"#ff3976",
																			"#2ccc44",
																			"#ffbc32",
																			"#fd866a",
																			"#1ca7ff",
																		];
																		return colorList[
																			params
																				.dataIndex
																			];
																	},
																},
															},
															label: {
																show: true,
																position: "outer",
																width: 0,
																height: 0,
																lineHeight: 0,
																backgroundColor:
																	"auto",
																padding: [
																	2,
																	-2,
																	2,
																	-2,
																],
																borderRadius: 2,
																distanceToLabelLine: 0,
																normal: {
																	formatter(v) {
																		let text =
																			v.name +
																			"\n" +
																			v.percent +
																			"%";
																		return text;
																	},
																	textStyle: {
																		fontSize: 16,
																	},
																},
															},
															labelLine: {
																normal: {
																	length: 30,
																	length2: 30,
																	lineStyle: {
																		width: 1,
																	},
																},
															},
															data: [
																{
																	name: "A供应商",
																	value: 1.45,
																},
																{
																	name: "B供应商",
																	value: 2.93,
																},
																{
																	name: "C供应商",
																	value: 3.15,
																},
																{
																	name: "D供应商",
																	value: 3.15,
																},
																{
																	name: "E供应商",
																	value: 3.15,
																},
																{
																	name: "F供应商",
																	value: 3.15,
																},
																{
																	name: "H供应商",
																	value: 3.15,
																},
																{
																	name: "其他",
																	value: 3.15,
																},
															],
														},
													],
												},
											},
										],
									},
								],
							},
							{
								id: "rateofreturn_gd",
								collapseTitle: "查看更多",
								EChartsBox: []
							},

						],
					},
				],
				ValueData: {
					inputValue: '',
					selectValue: '',
					timeValue: ['', ''],
				},
				totalCount: 0,
				arrData: [],
				serverName:''
			};
		},
		methods: {
			// 传入过来的页数跟每页的数量
			ClickTotal(value) {
				this.TableDatas(value.pageNum , value.pageSize)
			},
			selectionChange(val) {
				this.$emit('clickTable', true);
				this.$router.push("/details/details");
			},
			async searchQuery(id, collapse, year, name,inputVlaue) {
				this.ValueData = collapse;
				id.EChartsBox.forEach((element, index) => {
					element.EChartsItem.forEach((element, sindex) => {
						this.arrData.push({
							id: id.id + '-' + index + '-' + sindex,
							option: element.option
						})
					});
				});
				this.serverName=inputVlaue;

				await this.TableDatas(1, 5);
			},
			async obtainData(name, year) {
				let data = [];
				let id = '';
				this.ValueData.timeValue === null && (this.ValueData.timeValue = ['', '']);
				const res = await this.$axios.get("/api/sundry/finance_type_list");
				for (let i = 0; i < res.data.data.length; i++) {
					if (res.data.data[i].financeName == name) {
						id = res.data.data[i].financeTypeId;
						
						break;
					}
				}
				await this.$axios.get('/api/jtService/list_service_finance', {
					params: {
						financeTypeId: id,
						nianfen: year,
						endTime: this.ValueData.timeValue[1],
						stateTime: this.ValueData.timeValue[0]
					}
				}).then(v => {
					data = v.data.data;
					let mm = [];
					this.collapseData.forEach((item, index) => {
						if (item.name == name) {
							item.collapseItem.forEach((cItem, cIndex) => {
								if (cItem.year == year) {
									cItem.EChartsBox.forEach((sItem, sIndex) => {
										if (sIndex == 0) {
											sItem.EChartsItem[0].option.series[0].data = [];
											sItem.EChartsItem[0].option.xAxis[0].data = [];
											data.xYListFrom1.forEach((i, ix) => {
												sItem.EChartsItem[0].option.series[0].data.push(i.yAxis);
												mm.push(i.yAxis);
												sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis.split('-')[1]);
											});
											// if (mm.length !== 0) {
											//     let arr = this.YoYIncrease(mm);
											//     // sItem.EChartsItem[0].option.yAxis[1].min = parseInt(Math.min(...arr) - 5);
											//     // sItem.EChartsItem[0].option.yAxis[1].max = parseInt(Math.max(...arr) + 5);
											//     sItem.EChartsItem[0].option.series[1].data.push(...arr);
											// }
										}
										if (sIndex == 1) {
											sItem.EChartsItem[0].option.series[0].data = [];
											data.xYListFrom2.forEach((i, ix) => {
												sItem.EChartsItem[0].option.series[0].data.push({
													name: i.xBxis,
													value: i.yAxis
												});
											})
											sItem.EChartsItem[1].option.series[0].data = []
											data.xYListFrom3.forEach((i, ix) => {
												sItem.EChartsItem[1].option.series[0].data.push({
													name: i.xBxis,
													value: i.yAxis
												});
											})
										}
									});
								}
							})
						}
					})
					this.$nextTick(_ => {
						this.$refs['collapse'].searchClick(this.arrData)
					})
				})
			},
			async obtainAxios(name, year, years) {
				let data = [];
				let id = '';
				await this.$axios.get('/api/sundry/fuwuqucaiwu',
					{params: {nianfen: year, type: years, plateName: '服务区板块'}}
				).then(v => {
					data = v.data.data;
					let mm = [];
					this.collapseData.forEach((item, index) => {
						if (item.name == name) {
							item.collapseItem.forEach((cItem, cIndex) => {
								if (cItem.year == year) {
									cItem.EChartsBox.forEach((sItem, sIndex) => {
										if (sIndex == 0) {
											sItem.EChartsItem[0].option.series[0].data = [];
											sItem.EChartsItem[0].option.xAxis[0].data = [];
											let yAxis = [];
											let xBxis = [];
											data.forEach(element => {
												xBxis.push(element.xBxis.split('-')[1]);
												yAxis.push(element.yAxis * 10000)
											});
											sItem.EChartsItem[0].option.series[0].data = yAxis;
											sItem.EChartsItem[0].option.xAxis[0].data = xBxis;
										}
									});
								}
							})
						}
					})

				})
			},
			async TableDatas(pageNum, pageSize) {
				this.$axios.get('/api/jtService/serve_list', {
					params:
						{
							companyId: 'cc809ba275f17437088741db4ef76d499',
							pageNum: pageNum,
							pageSize: pageSize,
							serverName:this.serverName
						}
				}).then(res => {
					console.log(res)
					this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = []
					res.data.list.forEach(element => {
						let elementData = {
							serviceName: !element.serviceName ? '/' : element.serviceName,
							B: "/",
							G: "/",
							shouyi: "/",
							E: "/",
							I: '/',
							H: "/",
							maxcart: '/',
							mincart: '/',
							refuel: '/',
							snack: '/',
							convenience: '/',
							catering: '/',
							shouyi: element.shouyi
						}
						this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData.push(elementData)
					});
					this.totalCount = res.data.total;
				})
			}
		},
		async mounted() {
			await new Promise(resolve => {
				setInterval(_ => {
					resolve();
				}, 500);
			});
			await this.TableDatas(0, 5);
			this.$refs["collapse"].initECharts(this.collapseData);
		},
		async created() {
			/*await this.obtainData('营收', '2019');
			await this.obtainAxios('营收', '2020', 'ys');*/
		},
		watch: {
			viewChange() {
				this.$refs['collapse'].refresh(this.collapseData)
			}
		}
	};
</script>
