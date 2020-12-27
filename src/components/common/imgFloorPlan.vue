<template>
  <div class="imgBox">
    <img src="../../assets/service_m.jpg" class="img"/>
    <div class="smallBox" v-for="i in box" :style="i.style" @click="openDetails(i)">
      <el-popover placement="bottom"
                  :disabled="popoverDisabled"
                  :title="i.name"
                  width="300"
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
    <!--    <img-details-test ref="more" @showPopover="popoverDisabled=false"></img-details-test>-->
    <start-and-radar></start-and-radar>
  </div>
</template>

<script>
	import MoreInformation from "../../pages/details/common/moreInformation";
	import MyTable from "./myTable";
	import StartAndRadar from "../widget/startAndRadar";
	import ImgDetailsTest from "./imgDetailsTest";

	export default {
		name: "imgFloorPlan",
		props: {
			location: {
				type: String,
				default: ''
			}
		},
		components: {ImgDetailsTest, StartAndRadar, MyTable, MoreInformation},
		data() {
			return {
				popoverDisabled: false,
				box: [
					{
						name: '办公区',
						remark: '为工作人员提供舒适的办公地点',
						data: [
							{a: '负责人', b: '王永红'},
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
							{label: '固定办公人员', value: '5位'},
							{label: '月均收益', value: '50元/月'},
							{label: '占地面积', value: '131㎡'},
							{label: '建筑面积', value: '87333.3㎡'},
							{label: '经营面积', value: '15347.26㎡'},
							{label: '绿化面积', value: '5689.64㎡'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6'],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								title: {
									text: '业务占比',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b} : {c} ({d}%)'
								},
								legend: {
									data: ['小吃', '餐饮', '零食', '其他'],
									bottom: 10,
									textStyle: {
										color: "#FFF"
									}
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
							width: '43px',
							height: '23px',
							top: '85px',
							left: ' 201px',
							background: 'red',
						}
					},
					{
						name: '加油区',
						remark: '提供柴油、汽油（E95、E98、95……）',
						data: [
							{a: '加油站负责人', b: 'XXX'},
							{a: '加油站联系电话', b: 'Xxxxxxxxxxx'},
							{a: '加油站管理单位', b: '中石化'},
							{a: '加油岛数量', b: '6个'},
							{a: '加油枪数量', b: '36个'},
							{a: '可加油', b: '0,92,95,98'},
							{a: '是否有便利店', b: '是'},
							/*	{a: '油枪(92)', b: '8个'},
                {a: '油枪(95)', b: '8个'},
                {a: '油枪(98)', b: '8个'},
                {a: '油枪(0)', b: '6个'},
                {a: '异常油枪', b: '6个'},*/
						],
						formData: [
							{label: '加油站负责人', value: 'XXX'},
							{label: '加油站联系电话', value: 'Xxxxxxxxxxx'},
							{label: '加油站管理单位', value: '中石化'},
							{label: '加油岛数量', value: '6个'},
							{label: '加油枪数量', value: '36个'},
							{label: '可加油', value: '0,92,95,98'},
							{label: '是否有便利店', value: '是'},
							{label: '油枪(92)', value: '8个'},
							{label: '油枪(95)', value: '8个'},
							{label: '油枪(98)', value: '8个'},
							{label: '油枪(0)', value: '6个'},
							{label: '异常油枪', value: '6个'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								title: {
									text: '类型占比',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b} : {c} ({d}%)'
								},
								legend: {
									data: ['0', '92', '95', '98', '非油'],
									bottom: 10,
									textStyle: {
										color: "#FFF"
									}
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
							top: '146px',
							left: '190px',
							background: 'blue'
						}
					},
					{
						name: '小圆满餐厅',
						remark: '口味独特、菜品丰富',
						data: [
							{a: '负责人', b: 'XXX'},
							{a: '联系方式', b: 'XXXXXXXX'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '中餐速食(一级品牌)'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '中餐速食(一级品牌)'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '67px',
							height: '46px',
							top: '108px',
							left: '270px',
							background: 'yellow',
						}
					},
					{
						name: '隆盛牛肉面',
						remark: '面中之王',
						data: [
							{a: '负责人', b: 'Xxx'},
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '中餐速食(一级品牌)'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '中餐速食(一级品牌)'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '47px',
							height: '25px',
							top: '102px',
							left: '337px',
							zIndex: '10',
							background: 'rgb(51, 68, 34)',
						}
					},
					{
						name: '大厅',
						remark: '咨询问题、提供休息处……',
						noPopover: true,
						style: {
							width: '82px',
							height: '45px',
							top: '107px',
							left: '338px',
							background: 'rgb(102, 51, 153)',
						}
					},
					{
						name: '楚天舒便利店',
						remark: '便宜实惠、物美价廉……',
						data: [
							{a: '负责人', b: 'Xxx'},
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '便利店'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '便利店'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '34px',
							height: '49px',
							top: '87px',
							left: '421px',
							background: 'rgb(153, 153, 102)',
						}
					},
					{
						name: '驿路香伴小吃',
						remark: '特色小吃、品种丰富……',
						data: [
							{a: '负责人', b: 'Xxx'},
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '中餐速食(一级品牌)'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '中餐速食(一级品牌)'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '34px',
							height: '49px',
							top: '87px',
							left: '457px',
							background: 'rgb(52,153,36)',
						}
					},
					{
						name: '男厕',
						remark: '男厕所',
						data: [
							{a: '厕所等级', b: '五星'},
							{a: '蹲位数量', b: '114个'},
							{a: '小便器阀数量', b: '114个'},
							{a: '厕所改造时间', b: '2018年09月'},
						],
						formData: [
							{label: '厕所等级', value: '五星'},
							{label: '蹲位数量', value: '114个'},
							{label: '小便器阀数量', value: '114个'},
							{label: '厕所改造时间', value: '2018年09月'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年男女如厕',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 50,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '人',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
									textStyle: {
										color: '#FFF'
									}
								},
								series: [
									{
										name: "男",
										data: [800, 932, 901, 934, 1580, 1400],
										type: 'bar',
										itemStyle: {color: '#79f0ea'}
									},
									{
										name: "女",
										data: [830, 912, 951, 974, 1700, 1550],
										type: 'bar',
										itemStyle: {color: '#fa3b43'}
									},
								]
							},
							{
								title: {
									text: '人数占比',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b}: {c} ({d}%)'
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
									textStyle: {
										color: '#FFF'
									}
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
														"#79f0ea",
														"#fa3b43",
													];
													return colorList[v.dataIndex];
												},
											},
										},
										data: [
											{value: 3350, name: '男'},
											{value: 3100, name: '女'},
										]
									}
								]
							}
						],
						style: {
							width: '41px',
							height: '71px',
							top: '65px',
							left: '494px',
							background: 'rgb(255, 0, 0)',
						}
					},
					{
						name: '女厕',
						remark: '女厕所',
						data: [
							{a: '厕所等级', b: '五星'},
							{a: '蹲位数量', b: '114个'},
							{a: '厕所改造时间', b: '2018年09月'},
						],
						formData: [
							{label: '厕所等级', value: '五星'},
							{label: '蹲位数量', value: '114个'},
							{label: '厕所改造时间', value: '2018年09月'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年男女如厕',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 50,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '人',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
									textStyle: {
										color: '#FFF'
									}
								},
								series: [
									{
										name: "男",
										data: [800, 932, 901, 934, 1580, 1400],
										type: 'bar',
										itemStyle: {color: '#79f0ea'}
									},
									{
										name: "女",
										data: [830, 912, 951, 974, 1700, 1550],
										type: 'bar',
										itemStyle: {color: '#fa3b43'}
									},
								]
							},
							{
								title: {
									text: '人数占比',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								tooltip: {
									trigger: 'item',
									formatter: '{b}: {c} ({d}%)'
								},
								legend: {
									bottom: 0,
									data: ['男', '女'],
									textStyle: {
										color: '#FFF'
									}
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
														"#79f0ea",
														"#fa3b43",
													];
													return colorList[v.dataIndex];
												},
											},
										},
										data: [
											{value: 3350, name: '男'},
											{value: 3100, name: '女'},
										]
									}
								]
							}
						],
						style: {
							width: '41px',
							height: '71px',
							top: '65px',
							left: '537px',
							background: 'rgb(255,115,14)',
						}
					},
					{
						name: '伟鸿汽修',
						remark: '处理及维修汽车故障……',
						data: [
							{a: '负责人', b: 'Xxx'},
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '汽修'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '汽修'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '35px',
							height: '43px',
							top: '66px',
							left: '581px',
							background: 'rgb(0,255,0)'
						}
					},
					{
						name: '猫屎咖啡',
						remark: '累了困了喝咖啡，猫屎咖啡你值得拥有……',
						data: [
							{a: '负责人', b: 'Xxx'},
							{a: '联系方式', b: 'Xxxxxxxxxxx'},
							{a: '经营面积', b: 'Xx㎡'},
							{a: '主营业务', b: '咖啡饮料等西式下午茶'},
							{a: '合同开始日期', b: 'Xxxx年xx月xx日'},
							{a: '合同结束日期', b: 'Xxxx年xx月xx日'},
						],
						formData: [
							{label: '负责人', value: 'XXX'},
							{label: '联系方式', value: 'Xxxxxxxxxxx'},
							{label: '经营面积', value: 'Xx㎡'},
							{label: '主营业务', value: '咖啡饮料等西式下午茶'},
							{label: '合同开始日期', value: 'Xxxx年xx月xx日'},
							{label: '合同结束日期', value: 'Xxxx年xx月xx日'},
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: '近半年销售额',
									x: 'center',
									textStyle: {
										color: '#FFF'
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '万元',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [200, 150, 250, 300, 500, 450,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							},
							{
								barWidth: 20,
								title: {
									text: '近半年销量',
									x: 'center',
									textStyle: {
										color: "#FFF"
									}
								},
								xAxis: {
									type: 'category',
									name: '月',
									data: ['1', '2', '3', '4', '5', '6',],
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: 'value',
									name: '个',
									axisTick: {
										show: false,
									},
									axisLabel: {
										textStyle: {
											color: "#FFF",
										},
									},
									splitLine: {show: false},
									axisLine: {
										lineStyle: {
											color: "#FFF",
										},
									},
								},
								series: [{
									data: [300, 430, 450, 1050, 1150, 930,],
									type: 'bar',
									itemStyle: {
										color: '#79f0ea'
									}
								}]
							}
						],
						style: {
							width: '35px',
							height: '33px',
							top: '118px',
							left: '581px',
							background: 'rgb(39,255,221)'
						}
					},
					{
						name: "入口",
						noPopover: true,
						data: [
							{a: '卡口是否正常', b: '是'},
							{a: '日均车流量', b: '200辆'}
						],
						style: {
							width: '97px',
							height: '52px',
							top: '195px',
							left: '768px',
							background: 'rgb(39,255,221)'
						}
					},
					{
						name: "出口",
						noPopover: true,
						data: [
							{a: '卡口是否正常', b: '是'},
							{a: '日均车流量', b: '200辆'}
						],
						style: {
							width: '97px',
							height: '52px',
							top: '195px',
							left: '75px',
							background: 'rgb(39,255,221)'
						}
					},
					{
						name: "停车区",
						noPopover: true,
						data: [
							{a: '目前停车-大车', b: '100辆'},
							{a: '目前停车-小车', b: '500辆'},
							{a: '今日均停车时长', b: '2小时'},
							{a: '大车停车位', b: '500个'},
							{a: '小车停车位', b: '1000个'},
						],
						style: {
							width: '160px',
							height: '80px',
							top: '165px',
							left: '400px',
							background: 'rgb(255,47,35)'
						}
					}
				]
			}
		},
		methods: {
			openDetails(i) {
				if (!i.noPopover) {
					this.popoverDisabled = true;
					this.$refs['more'].openDialog(i)
				}
			}
		}
	}
</script>

<style scoped lang="less">
  .imgBox {
    width: 900px;
    /*margin: auto;*/
    position: relative;

    .img {
      width: 900px;
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
    background: rgba(181, 212, 255, 0.75);
    border: 1px solid rgba(148, 193, 255, 0.8);
  }

  .el-popper[x-placement^=bottom] .popper__arrow::after {
    border-bottom-color: rgba(148, 193, 255, 0.8) !important;
  }

  .popper__arrow {
    border-bottom-color: rgba(148, 193, 255, 0.8) !important;
  }

  .el-popover__title {
    text-align: center;
    color: #2b2c30;
  }
</style>