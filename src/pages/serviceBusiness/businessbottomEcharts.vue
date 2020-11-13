<template>
    <div class="businessBottomEcharts">
        <div class="top" v-if="businessId.id">
            <div>品牌分类</div>
            <div class="echarts">
                <div class="left">
                    <div @mouseover="mouseHover('A', businessId.id[0], businessId.data,businessId.name)" style="margin-right:1.6%" class="con"
                        :id="businessId.id[0]"></div>
                    <div class="ListTable" :id="businessId.id[0]+'W'"></div>
                    <information @isData="isData" class="information" ref="inform"></information>
                </div>
                <div class="right">
                    <div @mouseover="mouseHover('B', businessId.id[1], businessId.data,businessId.name)" class="con" :id="businessId.id[1]"></div>
                     <div class="ListTable" :id="businessId.id[1]+'W'"></div>
                    <information @isData="isData" class="information" ref="inform"></information>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="业态结构" width="180">
                </el-table-column>
                <el-table-column prop="name" label="所在服务区个数" width="180">
                </el-table-column>
                <el-table-column prop="address" label="经营场所个数"> </el-table-column>
                <el-table-column prop="address" label="占地面积(平方米)">
                </el-table-column>
                <el-table-column prop="address" label="订单数"> </el-table-column>
                <el-table-column prop="address" label="收入(元)"> </el-table-column>
                <el-table-column prop="address" label="客单价(元)"> </el-table-column>
                <el-table-column prop="address" label="坪效(元)"> </el-table-column>
                <el-table-column prop="address" label="利润(元)"> </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import information from "./detail/information"
export default {
    props: {
        businessId: {
            type: Object,
            default: {}
        }
    },
    components: { information },
    data() {
        return {
            isExcle: '',
            isvalue: '',
            required: {
                id: '',
                name: ''
            },
            tableData: [
                {
                    date: "一线品牌",
                    name: "",
                    address: ""
                },
                {
                    date: "本地特色",
                    name: "",
                    address: ""
                },
                {
                    date: "传统产业",
                    name: "",
                    address: ""
                }
            ]
        };
    },

    methods: {
        echartsLeft() {
            let EchartsLeft = this.$echarts.init(
                document.getElementById(this.businessId.id[0])
            );
            let index = 0;
            let colorList = ["#fd866a", "#9e87ff", "#73acff"];
            let option = {
                title: {
                    text: "总营业额(万元)",
                    top: "40%",
                    left: "center",
                    // x: 'center',
                    // y: 'center',
                    textStyle: {
                        fontSize: 18
                    },
                    subtext: "85000",
                    subtextStyle: {
                        fontSize: 45,
                        color: "#1edf57"
                    }
                },
                grid: {
                    top: "20%",
                    right: "40",
                    left: "60",
                    bottom: "40" //图表尺寸大小
                },
                legend: {
                    orient: "horizontal",
                    bottom: 10
                },
                tooltip: {
                    trigger: "item"
                },
                series: [
                    {
                        type: "pie",
                        center: ["50%", "50%"],
                        radius: ["44%", "55%"],
                        clockwise: true,
                        avoidLabelOverlap: true,
                        hoverOffset: 15,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex];
                                }
                            }
                        },
                        label: {
                            show: true,
                            position: 'outer',
                            width: 0,
                            height: 0,
                            lineHeight: 0,
                            backgroundColor: 'auto',
                            padding: [2, -2, 2, -2],
                            borderRadius: 2,
                            distanceToLabelLine: 0,
                            normal: {
                                formatter(v) {
                                    let text = v.name + "\n" + v.percent + '%'
                                    return text
                                },
                                textStyle: {
                                    fontSize: 15
                                }
                            },
                        },
                        labelLine: {
                            normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: [
                            {
                                name: "传统",
                                value: 1.45
                            },
                            {
                                name: "品牌",
                                value: 2.93
                            },
                            {
                                name: "特色",
                                value: 3.15
                            }
                        ]
                    }
                ]
            };
            window.onresize = EchartsLeft.resize;

            EchartsLeft.setOption(option);
        },
        echartsRight() {
            let EchartsRight = this.$echarts.init(
                document.getElementById(this.businessId.id[1])
            );
            var equipment = ["传统", "品牌", "特色"];
            var project = ["传统", "品牌", "特色"];
            let colorList = ["#73acff", "#fd866a", "#9e87ff"];
            let option = {
                backgroundColor: "#fff",
                legend: {
                    orient: "horizontal",
                    bottom: 10
                },
                tooltip: {
                    formatter: "{b}:{c}: ({d}%)"
                    // formatter: function (param) {
                    //     if (param.data.type == null) {

                    //         return param.data.name + ":" + param.value + '个';
                    //     } else {

                    //         return param.data.type + ":" + param.value + '个';
                    //     }
                    // }
                },

                series: [
                    {
                        name: "整体分类",
                        type: "pie",
                        radius: [0, "30%"],
                        label: {
                            position: "inner"
                        },
                        itemStyle: {
                            normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function (params) {
                                    return colorList[params.dataIndex];
                                }
                            }
                        },

                        selectedMode: "single",
                        data: [
                            {
                                value: 875,
                                name: "特色"
                            },
                            {
                                value: 1239,
                                name: "传统"
                            },
                            {
                                value: 1239,
                                name: "品牌"
                            }
                        ]
                    },
                    {
                        name: "招标方式",
                        type: "pie",
                        radius: ["40%", "55%"],

                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex];
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        label: {
                            show: true,
                            position: 'outer',
                            width: 0,
                            height: 0,
                            lineHeight: 0,
                            backgroundColor: 'auto',
                            padding: [2, -2, 2, -2],
                            borderRadius: 2,
                            distanceToLabelLine: 0,
                            normal: {
                                formatter(v) {
                                    let text = v.name + "\n" + v.percent + '%'
                                    return text
                                },
                                textStyle: {
                                    fontSize: 15
                                }
                            },
                        },

                        data: [
                            {
                                value: 875,
                                name: "特色",
                                type: equipment[0]
                            },
                            {
                                value: 1239,
                                name: "传统",
                                type: equipment[1]
                            },
                            {
                                value: 1239,
                                name: "品牌",
                                type: equipment[2]
                            }
                        ]
                    }
                ]
            };
            window.onresize = EchartsRight.resize;
            EchartsRight.setOption(option);
        },
        isechartsShow(data) {
            
        },
        isData(val) {
            this.isExcle = val;
            this.isEchartsIsTable();
        },
        // 用来图表跟数据切换的
        isEchartsIsTable() {
            if (this.isExcle == "datas") {
                let wen = this.$echarts.init(document.getElementById(this.required.id));
                wen.setOption({}, true);
                document.getElementById(this.required.id + 'W').style.zIndex = 1;
                let table = `<table bordercolor="#CC0000" cellspacing="0" cellpadding="0"  width=100%; border=1>`;
                table += `<tr><th colspan="2">${this.required.name}</th></tr>`;
                // this.required.data[0].forEach((val, inx) => {
                //     table += `<tr align="center">`;
                //     table += `<td>${this.required.xAis[inx]}</td>`;
                //     table += `<td>${this.required.data[0][inx]}</td>`;
                //     table += `</tr>`;
                // });
                table += `</table>`;
                document.getElementById(this.required.id + 'W').innerHTML = table;
            }
            if (this.isExcle == "focus") {
                document.getElementById(this.required.id + 'W').style.zIndex = -1;
                document.getElementById(this.required.id + 'W').innerHTML = "";
                switch (this.isvalue) {
                    case "A":
                        this.echartsLeft();
                        break;
                    case "B":
                        this.echartsRight();
                        break;
                    default:
                       
                        break;
                }
            }
            if (this.isExcle == "excel") {
                outExe(this.required);
            }
        },
        mouseHover(v, id, name) {
            this.isvalue = v;
            this.required.id = id;
            // this.required.data = data;
            // this.required.xAis = xAis;
            this.required.name = name
        },
    },
    mounted() {
        this.echartsLeft();
        this.echartsRight();
    },
    watch: {
        "$store.state.refresh": function () {
            this.businessId.id.forEach(element => {
                document.getElementById(element).setAttribute("_echarts_instance_", "");
            });
            this.echartsLeft();
            this.echartsRight();
        }
    }
};
</script>
<style lang="less" scoped>
.con {
    height: 100%;

    background: url("../../assets/business/frame 1.png") no-repeat;
    background-size: 100% 100%;
}
.ListTable {
    width: 100%;
    height: 85%;
    position: absolute;
    top: 15%;
    left: 0;
    z-index: -10;
    overflow: auto;
}
.bottom /deep/ .el-table {
    border-radius: 10px;
}
.businessBottomEcharts {
    height: 640px;
    .top {
        height: 400px;

        .echarts {
            height: 100%;
            width: 100%;
            display: flex;
            .left {
                width: 50%;
                height: 100%;
                position: relative;
            }
            .right {
                width: 50%;
                height: 100%;
                position: relative;
            }
        }
    }
    .bottom {
        margin: 50px 0;
        width: 99%;
        background: url("../../assets/business/frame 1.png") no-repeat;
        background-size: 100% 100%;
    }
}
.left:hover > .information {
    display: block;
}
.right:hover > .information {
    display: block;
}
</style>
