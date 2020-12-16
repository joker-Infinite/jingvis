<template>
  <div style="width: 100%; height: 100%;">
    <my-collapse-base @selectionChange="selectionChange" nav-bar-show ref="collapse" :collapseData="collapseData"
                      @searchQuery="searchQuery">
    </my-collapse-base>
  </div>
</template>
<script>
	import MyCollapseBase from "../../../components/common/myCollapseBase";
	import common from "../../../components/js/common";

	export default {
		name: "gasRetail",
		components: {MyCollapseBase},
		mixins: [common],
		props: {
			viewChange: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				collapseData: [
					{
						id: "gasRetail",
						name: "加油站总营收",
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
						name: "加油站非油品营收",
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
						name: "加油站转化率",
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
						name: "加油站分布",
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
				arrData: [],
				ValueData: {
					inputValue: '',
					selectValue: '',
					timeValue: ['', ''],
				},
			}
		},
		methods: {
			selectionChange() {
				this.$router.push('/energy/JYZXiangQing');
			},
			async searchQuery(id, collapse, year, name) {
				this.ValueData = collapse;
				id.EChartsBox.forEach((element, index) => {
					element.EChartsItem.forEach((element, sindex) => {
						this.arrData.push({
							id: id.id + '-' + index + '-' + sindex,
							option: element.option
						})
					});
				});
				await this.obtainData(name, year);
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
												sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis);
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
					// this.$nextTick(_ => {
					//     this.$refs['collapse'].searchClick(this.arrData)
					// })
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
		async mounted() {
			await new Promise(resolve => {
				setInterval(_ => {
					resolve();
				}, 500);
			});
			this.$refs["collapse"].initECharts(this.collapseData);
		},
		async created() {
			// await this.obtainData('营收', '2019');
			// await this.obtainData('营收', '2020');
			// await this.obtainData('利润', '2019');
			// await this.obtainData('利润', '2020');
			await this.obtainAxios('利润', '2020', 'lr');
			await this.obtainAxios('利润', '2019', 'lr');
		},
		watch: {
			viewChange() {
				this.$refs["collapse"].refresh(this.collapseData);
			},
		}
	}
</script>