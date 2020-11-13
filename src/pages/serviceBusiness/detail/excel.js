import Blob from "../../../vendor/Blob";
import Export2Excel from "../../../vendor/Export2Excel";

function outExe(tableDatas) {
  require.ensure([], () => {
    const { export_json_to_excel } = require("../../../vendor/Export2Excel");
    var tHeader = [tableDatas.name];
    var filterVal = ['es','ee','eee','eeeh']
    let table = [];
    //   tableDatas.forEach(element => {
    // 	element.forEach((val,index) => {
    // 		  table.push({'serial':tableDatas[index],'companyName':tableDatas[index]})
    // 	  });
    //   });
    tableDatas.data[0].forEach((val, index) => {
      let wen = {};
      filterVal.forEach((element,inx) => {
        wen['es'] = tableDatas.xAis[index];
        wen['ee'] = tableDatas.data[0][index];
        if(tableDatas.data.length===3){
          wen['eee'] = tableDatas.data[1][index];
          wen['eeeh'] = tableDatas.data[2][index];
        }
      });
      table.push(wen);
    });
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
  return jsonData.map(v => filterVal.map(j => v[j]));
}

export { outExe };
