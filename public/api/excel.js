function outExe(tableDatas) {
  require.ensure([], () => {
    const { export_json_to_excel } = require("../../src/vendor/Export2Excel");
    var tHeader = [tableDatas.name];
    var filterVal = ["es", "ee", "eee", "eeeh", "eeehjh", "we", "tr", "tt"];
    let table = [];
    tableDatas.series[0][0].forEach((val, index) => {
      let wen = {};
      wen["es"] = tableDatas.xAxis[index];
      wen["ee"] = tableDatas.series[0][0][index];
      switch (tableDatas.series.length) {
        case 8:
          wen["tt"] = tableDatas.series[3][0][index];
        case 7:
          wen["tr"] = tableDatas.series[3][0][index];
        case 6:
          wen["we"] = tableDatas.series[3][0][index];
        case 5:
          wen["eeehjh"] = tableDatas.series[3][0][index];
        case 4:
          wen["eeeh"] = tableDatas.series[2][0][index];
        case 3:
          wen["eee"] = tableDatas.series[1][0][index];
        default:
          break;
      }
      table.push(wen);
    });

    var list = table;
    var data = formatJson(filterVal, list);
    export_json_to_excel(tHeader, data, tableDatas.name);
  });
}
function formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => v[j]));
}

export { outExe };
