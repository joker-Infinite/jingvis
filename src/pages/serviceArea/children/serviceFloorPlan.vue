<template>
  <div class="imgBox">
    <img src="../../../assets/service_.jpg" class="img"/>
    <div class="smallBox" v-for="i in box" :style="i.style" @click="$refs['more'].openDialog(i)">
      <el-popover placement="top-start"
                  :title="i.name"
                  width="300"
                  v-if="i.name !=='大厅'"
                  trigger="hover">
        <my-table :columns="i.columns"
                  :data="i.data"
                  id="elPopoverServiceFloorPlan"
                  height="100%"
                  :show-index="false"
                  :multiple="false"
                  :is-pagination="false"></my-table>
        <div style="width: 100%;height: 100%" slot="reference"></div>
      </el-popover>
    </div>
    <more-information ref="more"></more-information>
  </div>
</template>

<script>
	import MoreInformation from "../../details/common/moreInformation";
	import MyTable from "../../../components/common/myTable";

	export default {
		name: "serviceFloorPlan",
		components: {MyTable, MoreInformation},
		data() {
			return {
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
						style: {
							width: '50px',
							height: '25px',
							top: '142px',
							left: '320px',
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
						style: {
							width: '50px',
							height: '25px',
							top: '226px',
							left: '302px',
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
						style: {
							width: '92px',
							height: '63px',
							top: '169px',
							left: '404px',
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
						style: {
							width: '56px',
							height: '34px',
							top: '162px',
							left: '496px',
							zIndex: '10'
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
						style: {
							width: '43px',
							height: '67px',
							top: '142px',
							left: '609px',
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
						style: {
							width: '43px',
							height: '67px',
							top: '142px',
							left: '654px',
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
						style: {
							width: '58px',
							height: '95px',
							top: '113px',
							left: '698px',
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
						style: {
							width: '57px',
							height: '95px',
							top: '113px',
							left: '757px',
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
						style: {
							width: '48px',
							height: '58px',
							top: '113px',
							left: '815px',
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
						style: {
							width: '48px',
							height: '48px',
							top: '182px',
							left: '815px',
						}
					},
				]
			}
		},
		methods: {
			click(v) {
			}
		}
	}
</script>

<style scoped lang="less">
  .imgBox {
    width: 1300px;
    margin: auto;
    position: relative;

    .img {
      width: 1300px;
    }

    .smallBox {
      position: absolute;
    }
  }
</style>
<style>
  .el-popover__title {
    text-align: center;
  }
</style>