<template>
  <div class="imgBox" :style="{width:location=='homeKanBan' ?'920px':'1300px'}">
    <img src="../../../assets/service_.jpg" :style="{width:location=='homeKanBan' ?'920px':'1300px'}" class="img"/>
    <div class="smallBox" v-for="i in box" :style="i.style" @click="popoverDisabled=true,$refs['more'].openDialog(i)">
      <el-popover placement="bottom"
                  :title="i.name"
                  width="300"
                  :disabled="popoverDisabled"
                  v-if="i.name !=='大厅'"
                  trigger="hover">
        <table class="table" border="1" cellspacing="0">
          <tr v-for="(it,ix) in i.data">
            <th>{{it.a}}</th>
            <th>{{it.b}}</th>
          </tr>
        </table>
        <div style="width: 100%;height: 100%" slot="reference"></div>
      </el-popover>
    </div>
    <more-information :location="location" ref="more" @showPopover="popoverDisabled=false"></more-information>
    <start-and-radar color="black"></start-and-radar>
  </div>
</template>

<script>
	import MoreInformation from "../../details/common/moreInformation";
	import MyTable from "../../../components/common/myTable";
	import StartAndRadar from "../../../components/widget/startAndRadar";

	export default {
		name: "serviceFloorPlan",
		props: {
			location: {
				type: String,
				default: ''
			}
		},
		components: {StartAndRadar, MyTable, MoreInformation},
		data() {
			return {
				popoverDisabled: false,
				boxStyle: [
					{
						width: '35px',
						height: '18px',
						top: '100px',
						left: '227px',
					},
					{
						width: '35px',
						height: '18px',
						top: '160px',
						left: '214px',
					},
					{
						width: '65px',
						height: '44px',
						top: '120px',
						left: '286px',
						background: '#453'
					},
					{
						width: '39px',
						height: '23px',
						top: '115px',
						left: '352px',
						zIndex: '10',
						background: '#909'
					},
					{
						width: '77px',
						height: '42px',
						top: '120px',
						left: '352px',
					},
					{
						width: '31px',
						height: '47px',
						top: '100px',
						left: '430px',
					},
					{
						width: '31px',
						height: '47px',
						top: '100px',
						left: '462px',
					},
					{
						width: '40px',
						height: '69px',
						top: '79px',
						left: '495px',
					},
					{
						width: '40px',
						height: '69px',
						top: '79px',
						left: '536px',
					},
					{
						width: '33px',
						height: '42px',
						top: '79px',
						left: '577px',
					},
					{
						width: '33px',
						height: '38px',
						top: '126px',
						left: '577px',
					}
				],
				box: [
					{
						name: '办公区',
						remark: '为工作人员提供舒适的办公地点',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: '王永红', width: '139px'},
						],
						data: [
							{a: '联系方式', b: '18071019995'},
							{a: '所属地域', b: '孝感市孝南区'},
							{a: '路段管理单位', b: '京珠运营公司'},
						],
						formData: [
							{label: '服务区', value: '蔡甸服务区-A区'},
							{label: '类别', value: '一类服务区'},
							{label: '所属公司', value: '孝感分公司'},
							{label: '开通状况', value: '是'},
							{label: '开通时间', value: '2002.11'},
							{label: '所在高速', value: '京港澳高速'},
							{label: '占地面积', value: '131'},
							{label: '建筑面积', value: '87333.3'},
							{label: '经营面积', value: '15347.26'},
							{label: '绿化面积', value: '5689.64'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450, 546, 650, 600, 800, 720, 756],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								title: {
									text: '业务类别结构',
									x: 'center'
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b} : {c} ({d}%)'
								},
								legend: {
									data: ['小吃', '餐饮', '零食', '其他'],
									bottom: 10
								},
								series: [
									{
										name: '访问来源',
										type: 'pie',
										radius: '55%',
										center: ['50%', '50%'],
										data: [
											{value: 335, name: '小吃'},
											{value: 310, name: '餐饮'},
											{value: 234, name: '零食'},
											{value: 135, name: '其他'}
										],
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
										emphasis: {
											itemStyle: {
												shadowBlur: 10,
												shadowOffsetX: 0,
												shadowColor: 'rgba(0, 0, 0, 0.5)'
											}
										}
									}
								]
							}
						],
						style: {
							width: '50px',
							height: '25px',
							top: '142px',
							left: '320px',
							background: 'red'
						}
					},
					{
						name: '加油区',
						remark: '提供柴油、汽油（E95、E98、95……）',
						columns: [
							{prop: 'a', label: '加油站管理单位', width: '139px'},
							{prop: 'b', label: '中石化', width: '139px'},
						],
						data: [
							{a: '加油岛数量', b: '6'},
							{a: '加油枪数量', b: '36'},
							{a: '可加油', b: '0,92,95,98'},
							{a: '是否有便利店', b: '是'},
						],
						formData: [
							{label: '加油站管理单位', value: '中石化'},
							{label: '加油岛数量', value: '6'},
							{label: '加油枪数量', value: '36'},
							{label: '可加油', value: '0,92,95,98'},
							{label: '是否有便利店', value: '是'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [300, 250, 350, 440, 786, 820, 730, 750, 920, 1200, 980, 930],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								title: {
									text: '业务类别结构',
									x: 'center'
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b} : {c} ({d}%)'
								},
								legend: {
									data: ['0', '92', '95', '98', '非油'],
									bottom: 10
								},
								series: [
									{
										name: '访问来源',
										type: 'pie',
										radius: '55%',
										center: ['50%', '50%'],
										data: [
											{value: 180, name: '0'},
											{value: 250, name: '92'},
											{value: 234, name: '95'},
											{value: 320, name: '98'},
											{value: 50, name: '非油'}
										],
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
										emphasis: {
											itemStyle: {
												shadowBlur: 10,
												shadowOffsetX: 0,
												shadowColor: 'rgba(0, 0, 0, 0.5)'
											}
										}
									}
								]
							}
						],
						style: {
							width: '50px',
							height: '25px',
							top: '226px',
							left: '302px',
							background: '#345'
						}
					},
					{
						name: '小圆满餐厅',
						remark: '口味独特、菜品丰富',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'XXX', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'XXXXXXXX'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '中餐速食'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '中餐速食'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '92px',
							height: '63px',
							top: '169px',
							left: '404px',
							background: '#453'
						}
					},
					{
						// name: '隆盛牛肉面',
						name: '牛肉面',
						remark: '面中之王',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'Xxx', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '中餐速食'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '中餐速食'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '56px',
							height: '34px',
							top: '162px',
							left: '496px',
							zIndex: '10',
							background: '#909'
						}
					},
					{
						name: '大厅',
						remark: '咨询问题、提供休息处……',
						style: {
							width: '110px',
							height: '60px',
							top: '169px',
							left: '496px',
							background: '#980'
						}
					},
					{
						name: '楚天舒便利店',
						remark: '便宜实惠、物美价廉……',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'Xxx', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '便利店'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '便利店'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '43px',
							height: '67px',
							top: '142px',
							left: '609px',
							background: '#657'
						}
					},
					{
						name: '驿路相伴小吃',
						remark: '特色小吃、品种丰富……',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'Xxx', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '中餐速食'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '中餐速食'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '43px',
							height: '67px',
							top: '142px',
							left: '654px',
							background: '#768'
						}
					},
					{
						name: '男厕',
						remark: '男厕所',
						columns: [
							{prop: 'a', label: '厕所等级', width: '139px'},
							{prop: 'b', label: '五星', width: '139px'},
						],
						data: [
							{a: '蹲位数量', b: '114'},
							{a: '小便器阀数量', b: '114'},
							{a: '厕所改造时间', b: '2018年09月'},
						],
						formData: [
							{label: '厕所等级', value: '五星'},
							{label: '蹲位数量', value: '114'},
							{label: '小便器阀数量', value: '114'},
							{label: '厕所改造时间', value: '2018年09月'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '人流量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '人'
								},
								series: [{
									data: [800, 932, 901, 934, 1580, 1950, 2100, 2500, 2650, 3500, 2800, 2600],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								title: {
									text: '男女比',
									x: 'center'
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b}: {c} ({d}%)'
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
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
								series: [
									{
										type: 'pie',
										radius: ['50%', '70%'],
										avoidLabelOverlap: false,
										label: {
											show: true,
											position: "outer",
											width: 0,
											height: 0,
											lineHeight: 0,
											backgroundColor: "auto",
											padding: [2, -2, 2, -2],
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
											show: true
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
											{value: 335, name: '男'},
											{value: 310, name: '女'},
										]
									}
								]
							}
						],
						style: {
							width: '58px',
							height: '95px',
							top: '113px',
							left: '698px',
							background: '#785'
						}
					},
					{
						name: '女厕',
						remark: '女厕所',
						columns: [
							{prop: 'a', label: '厕所等级', width: '139px'},
							{prop: 'b', label: '五星', width: '139px'},
						],
						data: [
							{a: '蹲位数量', b: '114'},
							{a: '厕所改造时间', b: '2018年09月'},
						],
						formData: [
							{label: '厕所等级', value: '五星'},
							{label: '蹲位数量', value: '114'},
							{label: '厕所改造时间', value: '2018年09月'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '人流量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '人'
								},
								series: [{
									data: [800, 932, 901, 934, 1580, 1950, 2100, 2500, 2650, 3500, 2800, 2600],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								title: {
									text: '男女比',
									x: 'center'
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b}: {c} ({d}%)'
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
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
								series: [
									{
										type: 'pie',
										radius: ['50%', '70%'],
										avoidLabelOverlap: false,
										label: {
											show: true,
											position: "outer",
											width: 0,
											height: 0,
											lineHeight: 0,
											backgroundColor: "auto",
											padding: [2, -2, 2, -2],
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
											show: true
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
											{value: 335, name: '男'},
											{value: 310, name: '女'}
										]
									}
								]
							}
						],
						style: {
							width: '57px',
							height: '95px',
							top: '113px',
							left: '757px',
							background: '#004'
						}
					},
					{
						name: '伟鸿汽修',
						remark: '处理及维修汽车故障……',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'Xxx', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '汽修'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '汽修'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '48px',
							height: '58px',
							top: '113px',
							left: '815px',
							background: '#884'
						}
					},
					{
						name: '猫屎咖啡',
						remark: '累了困了喝咖啡，猫屎咖啡你值得拥有……',
						columns: [
							{prop: 'a', label: '负责人', width: '139px'},
							{prop: 'b', label: 'Xxx', width: '139px'},
						],
						data: [
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx平方米'},
							{a: '主营业务', b: '咖啡饮料等西式下午茶'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx平方米'},
							{label: '主营业务', value: '咖啡饮料等西式下午茶'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '营业额',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元'
								},
								series: [{
									data: [10, 8, 13, 15, 20, 21, 18, 19, 22, 30, 25, 23],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '销量',
									x: 'center'
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个'
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930, 900, 950, 1000, 1600, 1250, 1050],
									type: 'bar',
									itemStyle: {
										color: '#379DFB'
									}
								}]
							}
						],
						style: {
							width: '48px',
							height: '48px',
							top: '182px',
							left: '815px',
							background: '#665'
						}
					},
				]
			}
		},
		mounted() {
			if (this.size_ == 'small') {
				this.box.forEach((i, x) => {
					Object.assign(i.style, this.boxStyle[x]);
				})
			}
		}
	}
</script>

<style scoped lang="less">
  .imgBox {
    width: 920px;
    margin: auto;
    position: relative;

    .img {
      width: 920px;
    }

    .smallBox {
      position: absolute;
      background: none !important;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    font-weight: 100;
  }

  table, th, td {
    border: 1px solid #606266;
    line-height: 2.5;
  }
</style>
<style>
  .el-popover {
    background: rgba(255, 255, 255, 0.75) !important;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  .el-popper[x-placement^=bottom] .popper__arrow::after {
    border-bottom-color: rgba(255, 255, 255, 0.8) !important;
  }

  .el-popover__title {
    text-align: center;
    color: #2b2c30;
  }
</style>