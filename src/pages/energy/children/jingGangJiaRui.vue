<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base ref="collapse"
                      :collapseData="collapseData"
                      nav-bar-show
                      @selectionChange="selectionChange"></my-collapse-base>
  </div>
</template>

<script>
	import MyCollapseBase from "../../../components/common/myCollapseBase";

	export default {
		name: "jingGangJiaRui",
		components: {MyCollapseBase},
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
					  id: "a",
					  name: "营收",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "a_2020",
							  collapseTitle: "2020年营收",
							  year: '2020',
							  EChartsBox: [
								  {
									  title: "营收",
									  time: false,
									  select: false,
									  timeValue: "",
									  selectValue: "",
									  /*包裹ECharts的父级元素的属性*/
									  style: {
										  width: "40%",
										  height: "450px",
										  borderRadius: "10px",
										  background: "white",
										  marginBottom: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  barWidth: 20,
												  tooltip: {
													  trigger: "axis",
													  formatter: function (params) {
														  return params[0].name + '月' + ':' + "<br>" + params[0].data / 10000 + '万元'
													  },
													  axisPointer: {
														  // 坐标轴指示器，坐标轴触发有效
														  type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
													  },
												  },
												  xAxis: {
													  type: "category",
													  data: [],
												  },
												  yAxis: {
													  axisLabel: {
														  formatter: function (val) {
															  return val / 10000
														  },
														  textStyle: {
															  fontSize: 12,
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
												  series: [
													  {
														  data: [],
														  type: "bar",
														  itemStyle: {
															  color: "#38A0FF",
														  },
													  },
												  ],
											  },
										  },
									  ],
								  },
								  {
									  title: "各个公司营收占比",
									  time: true,
									  select: false,
									  timeValue: "",
									  selectValue: "",
									  /*包裹ECharts的父级元素的属性*/
									  style: {
										  width: "59%",
										  height: "450px",
										  borderRadius: "10px",
										  background: "white",
										  marginBottom: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "50%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  tooltip: {
													  trigger: "item",
													  formatter: "{b} : {c}",
													  axisPointer: {
														  // 坐标轴指示器，坐标轴触发有效
														  type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
													  },
												  },
												  legend: {
													  left: "center",
													  bottom: "10px",
													  data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
												  },
												  series: [
													  {
														  name: "",
														  type: "pie",
														  radius: ["30%", "50%"],
														  avoidLabelOverlap: false,
														  label: {
															  formatter: function (val) {
																  return val.name + "\n" + val.percent + "%";
															  },
														  },
														  labelLine: {
															  normal: {
																  length: 15,
																  length2: 15,
																  lineStyle: {
																	  width: 1,
																  },
															  },
														  },
														  data: [
															  {
																  value: 335,
																  name: "A公司",
																  itemStyle: {color: "#3AA1FF"},
															  },
															  {
																  value: 310,
																  name: "B公司",
																  itemStyle: {color: "#59D4D4"},
															  },
															  {
																  value: 234,
																  name: "C公司",
																  itemStyle: {color: "#4ECB73"},
															  },
															  {
																  value: 135,
																  name: "D公司",
																  itemStyle: {color: "#F8D33D"},
															  },
															  {
																  value: 1548,
																  name: "E公司",
																  itemStyle: {color: "#F2637B"},
															  },
														  ],
													  },
												  ],
											  },
										  },
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "50%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  tooltip: {
													  trigger: "item",
													  formatter: "{a} <br/>{b}: {c} ({d}%)",
												  },
												  legend: {
													  left: "center",
													  bottom: "10px",
													  data: [
														  "过票",
														  "油品批发",
														  "分销",
														  "油品零售",
														  "非油品零售",
														  "其他",
													  ],
												  },

												  series: [
													  {
														  name: "",
														  type: "pie",
														  radius: ["30%", "50%"],
														  avoidLabelOverlap: false,
														  label: {
															  formatter: function (val) {
																  return val.name + "\n" + val.percent + "%";
															  },
														  },
														  labelLine: {
															  normal: {
																  length: 10,
																  length2: 10,
																  lineStyle: {
																	  width: 1,
																  },
															  },
														  },
														  data: [
															  {
																  value: 335,
																  name: "过票",
																  itemStyle: {color: "#3AA1FF"},
															  },
															  {
																  value: 310,
																  name: "油品批发",
																  itemStyle: {color: "#59D4D4"},
															  },
															  {
																  value: 234,
																  name: "分销",
																  itemStyle: {color: "#4ECB73"},
															  },
															  {
																  value: 135,
																  name: "油品零售",
																  itemStyle: {color: "#F8D33D"},
															  },
															  {
																  value: 1548,
																  name: "非油品零售",
																  itemStyle: {color: "#F2637B"},
															  },
															  {
																  value: 1548,
																  name: "其他",
																  itemStyle: {color: "#975FE5"},
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
							  id: "a_2019",
							  collapseTitle: "2019年营收",
							  year: '2019',
							  EChartsBox: [
								  {
									  title: "营收",
									  time: false,
									  select: false,
									  timeValue: "",
									  selectValue: "",
									  /*包裹ECharts的父级元素的属性*/
									  style: {
										  width: "40%",
										  height: "450px",
										  borderRadius: "10px",
										  background: "white",
										  marginBottom: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  barWidth: 20,
												  tooltip: {
													  trigger: "axis",
													  formatter: function (params) {
														  return params[0].name + '月' + ':' + "<br>" + params[0].data / 10000 + '万元'
													  },
													  axisPointer: {
														  // 坐标轴指示器，坐标轴触发有效
														  type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
													  },
												  },
												  xAxis: {
													  type: "category",
													  data: [],
												  },
												  yAxis: {
													  axisLabel: {
														  formatter: function (val) {
															  return val / 10000
														  },
														  textStyle: {
															  fontSize: 12,
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
												  series: [
													  {
														  data: [],
														  type: "bar",
														  itemStyle: {
															  color: "#38A0FF",
														  },
													  },
												  ],
											  },
										  },
									  ],
								  },
								  {
									  title: "各个公司营收占比",
									  time: true,
									  select: false,
									  timeValue: "",
									  selectValue: "",
									  /*包裹ECharts的父级元素的属性*/
									  style: {
										  width: "59%",
										  height: "450px",
										  borderRadius: "10px",
										  background: "white",
										  marginBottom: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "50%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  tooltip: {
													  trigger: "item",
													  formatter: "{b} : {c}",
													  axisPointer: {
														  // 坐标轴指示器，坐标轴触发有效
														  type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
													  },
												  },
												  legend: {
													  left: "center",
													  bottom: "10px",
													  data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
												  },
												  series: [
													  {
														  name: "",
														  type: "pie",
														  radius: ["30%", "50%"],
														  avoidLabelOverlap: false,
														  label: {
															  formatter: function (val) {
																  return val.name + "\n" + val.percent + "%";
															  },
														  },
														  labelLine: {
															  normal: {
																  length: 15,
																  length2: 15,
																  lineStyle: {
																	  width: 1,
																  },
															  },
														  },
														  data: [
															  {
																  value: 335,
																  name: "A公司",
																  itemStyle: {color: "#3AA1FF"},
															  },
															  {
																  value: 310,
																  name: "B公司",
																  itemStyle: {color: "#59D4D4"},
															  },
															  {
																  value: 234,
																  name: "C公司",
																  itemStyle: {color: "#4ECB73"},
															  },
															  {
																  value: 135,
																  name: "D公司",
																  itemStyle: {color: "#F8D33D"},
															  },
															  {
																  value: 1548,
																  name: "E公司",
																  itemStyle: {color: "#F2637B"},
															  },
														  ],
													  },
												  ],
											  },
										  },
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "50%",
												  height: "400px",
											  },
											  option: {
												  title: {
													  text: "",
												  },
												  tooltip: {
													  trigger: "item",
													  formatter: "{a} <br/>{b}: {c} ({d}%)",
												  },
												  legend: {
													  left: "center",
													  bottom: "10px",
													  data: [
														  "过票",
														  "油品批发",
														  "分销",
														  "油品零售",
														  "非油品零售",
														  "其他",
													  ],
												  },

												  series: [
													  {
														  name: "",
														  type: "pie",
														  radius: ["30%", "50%"],
														  avoidLabelOverlap: false,
														  label: {
															  formatter: function (val) {
																  return val.name + "\n" + val.percent + "%";
															  },
														  },
														  labelLine: {
															  normal: {
																  length: 10,
																  length2: 10,
																  lineStyle: {
																	  width: 1,
																  },
															  },
														  },
														  data: [
															  {
																  value: 335,
																  name: "过票",
																  itemStyle: {color: "#3AA1FF"},
															  },
															  {
																  value: 310,
																  name: "油品批发",
																  itemStyle: {color: "#59D4D4"},
															  },
															  {
																  value: 234,
																  name: "分销",
																  itemStyle: {color: "#4ECB73"},
															  },
															  {
																  value: 135,
																  name: "油品零售",
																  itemStyle: {color: "#F8D33D"},
															  },
															  {
																  value: 1548,
																  name: "非油品零售",
																  itemStyle: {color: "#F2637B"},
															  },
															  {
																  value: 1548,
																  name: "其他",
																  itemStyle: {color: "#975FE5"},
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
							  id: "a_gd",
							  collapseTitle: "查看更多",
							  EChartsBox: []
						  },
					  ],
				  },
				  {
					  id: "profit",
					  name: "利润",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
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
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
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
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
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
					  id: "profit_m",
					  name: "毛利润",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "profit_2020_m",
							  year: 2020,
							  collapseTitle: "2020年毛利润",
							  allQuery: true,
							  allQueryData: {
								  input: false,
								  select: false,
								  time: true
							  },
							  EChartsBox: [
								  {
									  title: "2020年毛利润",
									  time: false,
									  timeValue: "",
									  style: {
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
							  ]
						  },
						  {
							  id: "profit_2019_m",
							  year: 2019,
							  collapseTitle: "2019年毛利润",
							  allQuery: true,
							  allQueryData: {
								  input: false,
								  select: false,
								  time: true
							  },
							  EChartsBox: [
								  {
									  title: "2019年毛利润",
									  time: false,
									  timeValue: "",
									  style: {
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
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
					  id: "budget",
					  name: "控制预算",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "budget_2020",
							  year: 2020,
							  collapseTitle: "2020年预算控制",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  timeValue: "",
									  style: {
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
							  ]
						  },
						  {
							  id: "budget_2019",
							  year: 2019,
							  collapseTitle: "2019年预算控制",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  timeValue: "",
									  style: {
										  width: "39.5%",
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
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['过票', '油品批发', '分销', '油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '过票'},
													  {value: 310, name: '油品批发'},
													  {value: 234, name: '分销'},
													  {value: 135, name: '油品零售'},
													  {value: 1548, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
							  ]
						  },
						  {
							  id: "budget_",
							  year: 2019,
							  collapseTitle: "预算控制",
							  EChartsBox: [
								  {
									  title: '<span style="float: left">预算项目列表</span><span style="float: right;text-shadow:none;height: 100%;text-align: right;padding-right: 20px">2020年 执行金额:160亿元 预算金额:200亿元 总执行度:80%</span>',
									  input: true,
									  select: true,
									  selectOption: [[2015, 2016, 2017, 2018]],
									  style: {
										  width: "100%",
										  height: "600px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [
										  {
											  style: {
												  width: '100%',
												  height: '600px'
											  },
											  isPagination: true,
											  height: "630px",
											  type: 'table',
											  columns: [
												  {prop: 'a', label: '预算项目'},
												  {prop: 'b', label: '预算金额（元）'},
												  {prop: 'c', label: '执行金额（元）'},
												  {prop: 'd', label: '执行速度'},
												  {prop: 'e', label: '时间偏离度（执行进度-时间进度）'},
												  {prop: 'f', label: '年份'},
											  ],
											  tableData: [
												  {a: '/', b: '/', c: '/', d: '/', e: '/', f: '/'},
												  {a: '/', b: '/', c: '/', d: '/', e: '/', f: '/'},
												  {a: '/', b: '/', c: '/', d: '/', e: '/', f: '/'},
												  {a: '/', b: '/', c: '/', d: '/', e: '/', f: '/'},
												  {a: '/', b: '/', c: '/', d: '/', e: '/', f: '/'},
											  ]
										  },
									  ],
								  },
								  {
									  title: "成本费用利用率",
									  style: {
										  width: "49.5%",
										  height: "400px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [
										  {
											  unit: '%',
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "380px",
											  },
											  option: {
												  xAxis: {
													  type: 'category',
													  data: ['2015', '2016', '2017', '2018', '2019', '2020']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [12011, 20032, 15043, 8023, 7012, 11320],
													  type: 'line',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  }
										  },
									  ],
								  },
								  {
									  title: "分项成本变化趋势",
									  select: true,
									  showSearch: 'notShow',
									  selectOption: [['A成本', 'B成本', 'C成本', 'D成本']],
									  style: {
										  width: "49.5%",
										  height: "400px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "380px",
											  },
											  option: {
												  xAxis: {
													  type: 'category',
													  data: ['2015', '2016', '2017', '2018', '2019', '2020']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [120, 200, 150, 80, 70, 110],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  }
										  },
									  ],
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
					  id: "profitss",
					  name: "批零差价",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "profitss_2020",
							  year: 2020,
							  collapseTitle: "批零差价",
							  EChartsBox: [
								  {
									  title: "油品价格",
									  time: false,
									  style: {
										  width: "100%",
										  height: "400px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: "10px",
									  },
									  EChartsItem: [
										  {
											  unit: "元",
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "350px",
											  },
											  option: {
												  xAxis: {
													  type: "category",
													  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
												  },
												  yAxis: {
													  type: "value",
												  },
												  grid: {
													  left: 40,
													  right: 40,
													  top: 30,
													  bottom: 50,
												  },
												  legend: {
													  orient: "horizontal",
													  bottom: 5,
													  data: ["汽油", "柴油", "总量", "92", "95", "96", "0"],
												  },
												  series: [
													  {
														  name: "汽油",
														  data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
														  type: "line",
													  },
													  {
														  name: "柴油",
														  data: [322, 432, 543, 234, 543, 215, 546, 654, 567, 756, 321, 435],
														  type: "line",
													  },
													  {
														  name: "总量",
														  data: [11, 22, 33, 44, 55, 66, 77, 45, 65, 87, 432, 31],
														  type: "line",
													  },
													  {
														  name: "92",
														  data: [33, 32, 33, 76, 35, 32, 432, 432, 32, 231, 76, 31],
														  type: "line",
													  },
													  {
														  name: "95",
														  data: [45, 123, 32, 42, 321, 44, 312, 45, 65, 87, 23, 31],
														  type: "line",
													  },
													  {
														  name: "96",
														  data: [65, 32, 76, 234, 56, 66, 312, 45, 65, 87, 34, 31],
														  type: "line",
													  },
													  {
														  name: "0",
														  data: [321, 32, 435, 234, 45, 36, 312, 45, 65, 87, 432, 31],
														  type: "line",
													  },
												  ],
											  },
										  },
									  ],
								  },
								  {
									  title: "批零差价",
									  time: true,
									  showSearch: "notShow",
									  year: true,
									  month: true,
									  day: true,
									  style: {
										  width: "100%",
										  height: "450px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: "10px",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "400px",
											  },
											  option: {
												  xAxis: {
													  type: "category",
													  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
												  },
												  yAxis: {
													  type: "value",
												  },
												  grid: {
													  left: 40,
													  right: 40,
													  top: 70,
													  bottom: 50,
												  },
												  legend: {
													  orient: "horizontal",
													  bottom: 5,
													  data: ["国内批发差价", "自身批发差价"],
												  },
												  series: [
													  {
														  name: "国内批发差价",
														  data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
														  type: "line",
													  },
													  {
														  name: "自身批发差价",
														  data: [132, 433, 321, 65, 768, 987, 343, 234, 123, 432, 543, 232],
														  type: "line",
													  },
												  ],
											  },
										  },
									  ],
								  },
								  {
									  title: "采点",
									  style: {
										  width: "100%",
										  height: "400px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [
										  {
											  /*ECharts的属性*/
											  style: {
												  width: "100%",
												  height: "350px",
											  },
											  option: {
												  grid: {
													  top: 50,
													  left: 30,
													  right: 30,
													  bottom: 30,
												  },
												  xAxis: {},
												  yAxis: {},
												  series: [
													  {
														  symbolSize: 20,
														  data: [
															  [10.0, 8.04],
															  [8.0, 6.95],
															  [13.0, 7.58],
															  [9.0, 8.81],
															  [11.0, 8.33],
															  [14.0, 9.96],
															  [6.0, 7.24],
															  [4.0, 4.26],
															  [12.0, 10.84],
															  [7.0, 4.82],
															  [5.0, 5.68],
														  ],
														  type: "scatter",
													  },
												  ],
											  },
										  },
									  ],
								  },
							  ],
						  },
						  {
							  id: "revenue_gd",
							  collapseTitle: "查看更多",
							  EChartsBox: [],
						  },
					  ],
				  },
				  {
					  id: "revenueTable",
					  name: "批零差价历史记录列表",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "ab_2019",
							  collapseTitle: "批零差价历史记录列表",
							  EChartsBox: [
								  {
									  title: "批零插件历史记录列表",
									  showTitle: "notShow",
									  button: true,
									  time: false,
									  input: false,
									  style: {
										  cursor: "pointer",
										  width: "100%",
										  height: "550px",
										  borderRadius: "10px",
										  background: "white",
										  overflow: "hidden",
										  marginBottom: "10px",
									  },
									  EChartsItem: [
										  {
											  type: "table",
											  height: "650px",
											  style: {
												  width: "100%",
												  background: "#FFF",
											  },
											  isPagination: true,
											  columns: [
												  // {prop: "A", label: "指标名称"},
												  {prop: "dieselLingshou", label: "最高汽油零售指导价"},
												  {prop: "dieselPifa", label: "最高汽油批发价格"},
												  {prop: "gasolineLingshou", label: "最高柴油零售指导价"},
												  {prop: "gasolinePifa", label: "最高柴油批发指导价"},
												  {prop: "oilType", label: "油品类型"},
												  {prop: "odateTime", label: "日期时间"},
											  ],
											  tableData: [
												  // {
												  //     A: "批发商11",
												  //     B: "8%",
												  //     C: "8%",
												  //     D: "8%",
												  //     E: "8%",
												  //     F: "110000",
												  // },
											  ],
										  },
									  ],
								  },
							  ],
						  },
					  ],
				  },
				  {
					  id: "gasRetail",
					  name: "总营收",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "gasRetail_2020",
							  year: 2020,
							  collapseTitle: "2020年加油站总营收",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "39.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
							  ]
						  },
						  {
							  id: "gasRetail_2019",
							  year: 2019,
							  collapseTitle: "2019年加油站总营收",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "39.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "32.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
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
					  id: "aa",
					  name: "非油品营收",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "aa_2020",
							  year: 2020,
							  collapseTitle: "2020年加油站非油品营收",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "39.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
											  }],
										  },
									  }],
								  },
							  ]
						  },
						  {
							  id: "aa_2019",
							  year: 2019,
							  collapseTitle: "2019年加油站非油品营收",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "39.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['新能源', '石化', '国储', '高路油站', '荆港嘉瑞']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '新能源'},
													  {value: 310, name: '石化'},
													  {value: 234, name: '国储'},
													  {value: 135, name: '高路油站'},
													  {value: 1548, name: '荆港嘉瑞'}
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "29.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  data: ['油品零售', '非油品零售']
											  },
											  series: [{
												  type: "pie",
												  avoidLabelOverlap: true,
												  center: ["48%", "50%"],
												  radius: ["38%", "50%"],
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
													  backgroundColor:
														  "auto",
													  padding: [2, -2, 2, -2,],
													  borderRadius: 2,
													  distanceToLabelLine: 0,
													  normal: {
														  formatter(v) {
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
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '油品零售'},
													  {value: 310, name: '非油品零售'}
												  ]
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
					  id: "bb",
					  name: "转化率",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "bb_2020",
							  year: 2020,
							  collapseTitle: "2020年加油站转化率",
							  allQuery: true,
							  allQueryData: {
								  time: true
							  },
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "49.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'line',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "49.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  tooltip: {
													  trigger: 'axis',
													  axisPointer: {
														  type: 'shadow'
													  }
												  },
												  grid: {
													  left: '3%',
													  right: '4%',
													  bottom: '3%',
													  containLabel: true
												  },
												  xAxis: {
													  type: 'value',
													  boundaryGap: [0, 0.01]
												  },
												  yAxis: {
													  type: 'category',
													  data: ['A加油站', 'B加油站', 'C加油站', 'D加油站', 'E加油站']
												  },
												  series: [
													  {
														  type: 'bar',
														  data: [18203, 23489, 29034, 14970, 31744],
														  itemStyle: {
															  color: '#38d'
														  }
													  },
												  ]
											  },
										  }
									  ],
								  },
							  ]
						  },
						  {
							  id: "bb_2019",
							  year: 2019,
							  allQuery: true,
							  allQueryData: {
								  time: true
							  },
							  collapseTitle: "2019年加油站转化率",
							  EChartsBox: [
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "49.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'line',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "49.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  tooltip: {
													  trigger: 'axis',
													  axisPointer: {
														  type: 'shadow'
													  }
												  },
												  grid: {
													  left: '3%',
													  right: '4%',
													  bottom: '3%',
													  containLabel: true
												  },
												  xAxis: {
													  type: 'value',
													  boundaryGap: [0, 0.01]
												  },
												  yAxis: {
													  type: 'category',
													  data: ['A加油站', 'B加油站', 'C加油站', 'D加油站', 'E加油站']
												  },
												  series: [
													  {
														  type: 'bar',
														  data: [18203, 23489, 29034, 14970, 11744],
														  itemStyle: {
															  color: '#38d'
														  }
													  },
												  ]
											  },
										  }
									  ],
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
					  id: "cc",
					  name: "分布",
					  icon: require("../../../assets/business/icon_1-1.png"),
					  iconActive: require("../../../assets/business/icon_1-2.png"),
					  collapseItem: [
						  {
							  id: "cc_2020",
							  year: 2020,
							  collapseTitle: "加油站分布",
							  allQuery: true,
							  allQueryData: {
								  time: true
							  },
							  EChartsBox: [
								  {
									  title: "加油站油库分布",
									  style: {
										  width: "100%",
										  height: "400px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [
										  {
											  type: 'map',
											  style: {
												  width: "100%",
												  height: "400px",
											  }
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  style: {
										  width: "59.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
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
												  xAxis: {
													  type: 'category',
													  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
												  },
												  yAxis: {
													  type: 'value'
												  },
												  series: [{
													  data: [32012, 43232, 30121, 53334, 12940, 13350, 13120, 32321, 54653, 57646, 49821, 31542],
													  type: 'bar',
													  itemStyle: {
														  color: '#38d'
													  }
												  }]
											  },
										  }
									  ],
								  },
								  {
									  title: "",
									  time: false,
									  select: false,
									  style: {
										  width: "39.5%",
										  height: "350px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [{
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
												  bottom: 5,
												  data: ['自营', '承包', '非自营']
											  },
											  tooltip: {
												  trigger: "item",
											  },
											  series: [{
												  type: "pie",
												  center: ["50%", "50%"],
												  radius: ["30%", "45%"],
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
															  fontSize: 16,
														  },
													  },
												  },
												  labelLine: {
													  normal: {
														  lineStyle: {
															  width: 1,
														  },
													  },
												  },
												  data: [
													  {value: 335, name: '自营'},
													  {value: 310, name: '承包'},
													  {value: 234, name: '非自营'},
												  ]
											  }],
										  },
									  }],
								  },
								  {
									  title: "",
									  select: true,
									  input: true,
									  selectOption: [
										  ['新能源', '石化', '国储', '荆港嘉瑞'],
									  ],
									  style: {
										  width: "100%",
										  height: "500px",
										  background: "white",
										  borderRadius: "10px",
										  overflow: "hidden",
										  marginBottom: '10px'
									  },
									  EChartsItem: [
										  {
											  type: 'table',
											  isPagination: true,
											  style: {
												  width: "100%",
												  height: "600px",
											  },
											  height: '600px',
											  columns: [
												  {prop: 'a', label: '加油站名称'},
												  {prop: 'b', label: '加油站位置'},
												  {prop: 'c', label: '加油站大小'},
											  ],
											  tableData: [
												  {a: 'A加油站', b: '/', c: '/'},
												  {a: 'B加油站', b: '/', c: '/'},
												  {a: 'C加油站', b: '/', c: '/'},
											  ]
										  }
									  ],
								  },
							  ]
						  }
					  ],
				  },
			  ],
		  };
	  },
		async mounted() {
			await new Promise(resolve => {
				setInterval(_ => {
					resolve();
				}, 500);
			});
			this.$refs["collapse"].initECharts(this.collapseData);
		},
		async created() {
			await this.obtainAxios('营收', '2020', 'ys');
			await this.obtainAxios('营收', '2019', 'ys');
		},
		methods: {
			selectionChange(v) {
				this.$router.push("/energy/JYZXiangQing");
			},
			obtainAxios(name, year, years) {
				let data = [];
				let id = '';
				this.$axios.get('/api/sundry/fuwuqucaiwu',
					{params: {nianfen: year, type: years, plateName: '能源板块'}}
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
											console.log(sItem.EChartsItem[0].option.xAxis.data)
											sItem.EChartsItem[0].option.xAxis.data = [];

											let yAxis = [];
											let xBxis = [];
											data.forEach(element => {
												xBxis.push(element.xBxis.split('-')[1]);
												yAxis.push(element.yAxis * 10000)
											});
											sItem.EChartsItem[0].option.series[0].data = yAxis;
											sItem.EChartsItem[0].option.xAxis.data = xBxis;
										}
										// if (sIndex == 1) {
										//     sItem.EChartsItem[0].option.series[0].data = [];
										//     data.xYListFrom2.forEach((i, ix) => {
										//         sItem.EChartsItem[0].option.series[0].data.push({
										//             name: i.xBxis,
										//             value: i.yAxis
										//         });
										//     })
										//     sItem.EChartsItem[1].option.series[0].data = []
										//     data.xYListFrom3.forEach((i, ix) => {
										//         sItem.EChartsItem[1].option.series[0].data.push({
										//             name: i.xBxis,
										//             value: i.yAxis
										//         });
										//     })
										// }
									});
								}
							})
						}
					})

				})
				// this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
				//     let xBxis = [];
				//     let yAxis = [];
				//     res.data.data.forEach(element => {

				//     });
				// })
			}
		},
		watch: {
			viewChange() {
				this.$refs['collapse'].refresh(this.collapseData)
			}
		}
	};
</script>

<style scoped></style>
