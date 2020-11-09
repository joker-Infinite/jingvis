import Blob from '../../../vendor/Blob'
import Export2Excel from '../../../vendor/Export2Excel'

function outExe(tableDatas) {
	require.ensure([], () => {
		const { export_json_to_excel } = require("../../../vendor/Export2Excel");
		var tHeader = ["序号", "企业名称", "报价", "偏差率", "评分"];
		var filterVal = tableDatas.map((element, index) => {
			return index + 'w'
		});
		let table = []
		//   tableDatas.forEach(element => {
		// 	element.forEach((val,index) => {
		// 		  table.push({'serial':tableDatas[index],'companyName':tableDatas[index]})
		// 	  });
		//   });
		tableDatas[0].forEach((val, index) => {
			let wen = {};
			filterVal.forEach((element, inx) => {
				wen[element] = tableDatas[inx][index]
			});
			table.push(wen)
		});
		console.log(table)
		// tableDatas[0].forEach((val, inx) => {
		// 	console.log(wen, 44444444444444444444444444444444444444)
		// 	table.push(wen)
		// });
		var list = table;
		var data = formatJson(filterVal, list);

		export_json_to_excel(tHeader, data, "综合评估计算结果");
	});
}
function formatJson(filterVal, jsonData) {
	return jsonData.map((v) => filterVal.map((j) => v[j]));
}


export {
	outExe
}