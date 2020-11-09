<template>
    <div class="businesstop">
        <!-- 营收开始 -->
        <el-collapse id="box1" v-model="revenue" @change="handleChange">
            <el-collapse-item name="1">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2020年营收</span>
                </template>
                <businessTopEcharts ref="busin" :businessId="businessId"></businessTopEcharts>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2019年营收</span>
                </template>
                <businessTopEcharts ref="busin" :businessId="businessId2"></businessTopEcharts>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">以往年份</span>
                </template>
            </el-collapse-item>
        </el-collapse>
        <!-- 营收结束 -->
        <!-- 利润开始 -->
        <el-collapse id="box2" v-model="profit" @change="handleChange">
            <el-collapse-item name="1">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2020年利润</span>
                </template>
                <businessTopEcharts ref="busin1"  :businessId="businessId3"></businessTopEcharts>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2019年利润</span>
                </template>
                <businessTopEcharts ref="busin"  :businessId="businessId4"></businessTopEcharts>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">以往年份</span>
                </template>
            </el-collapse-item>
        </el-collapse>
        <!-- 利润结束 -->
        <!-- 成本开始 -->
        <el-collapse id="box3" v-model="cost" @change="handleChange">
            <el-collapse-item name="1">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2020年成本</span>
                </template>
                <businessTopEcharts :businessId="businessId5"  :isshow="true"></businessTopEcharts>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2019年成本</span>
                </template>
                <!-- <businessTopEcharts :businessId="businessId6" :echartsBottoms="echartsBottom1" :isshow="true"></businessTopEcharts> -->
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">以往年份</span>
                </template>
            </el-collapse-item>
        </el-collapse>
        <!-- 成本结束 -->
    </div>
</template>
<script>
import businessTopEcharts from "./businessTopEcharts";
export default {
    components: { businessTopEcharts },
    data() {
        return {
            revenue: ["1", "2"],
            profit: ["1", "2"],
            cost: ["1", "2"],
            echartsBottom: "echartsBottom1",
            echartsBottom1: "echartsBottom2",
            businessId: {
                id: ["HomeEchartsLeft", "HomeEchartsCenter", "HomeEchartsRight"],
                show:true,
 
                data: {
                    left: [
                        [40, 80, 50, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                        [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                    ],
                    center: [[1.45, 2.93, 3.15, 4, 5]],
                },
            },
            businessId2: {
                id: ["HomeEchartsLeft2", "HomeEchartsCenter2", "HomeEchartsRight2"],
                show:true,
                data: {
                    left: [
                        [40, 80, 50, 36, 300, 35, 40, 60, 40, 80, 50, 36],
                        [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                    ],
                    center: [[1.45, 2.93, 3.15, 4, 5]],
                },
            },
            businessId3: {
                
            },
            businessId4: {
               
            },
            businessId5: {
               
            },
            businessId6: {
                id: ["HomeEchartsLeft6", "HomeEchartsCenter6", "HomeEchartsRight6"],
                show:false,
                data: {
                    left: [
                        [40, 80, 50, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                        [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                    ],
                    center: [[1.45, 2.93, 3.15, 4, 5]],
                },
            },
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
        iconList(is) {
            if (is === 1) {
                let table;
                this.businessId.data.left[1].forEach((element) => {
                    table += `<tr><td>${element}</td></tr>`;
                });

                document.getElementById("HomeEchartsLeft").innerHTML =
                    `<table width="100%" border="1">` + table + `</table>`;
            } else if (is === 2) {
            } else {
            }
        },
        isechartsShow(data) {
          this.$refs.busin1.isechartsShow(data)
        }
    },
    mounted() {
        // window.addEventListener("scroll", function(){
        //     console.log('scrolling',456);
        // });
    },
};
</script>

<style lang="less" scoped>
.titleList {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-left: 60%;
    span {
        background: #fff;
        border-radius: 10px;
        cursor: pointer;
        color: #999;
        width: 30%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        margin: 10px 0;
    }
}
.businesstop /deep/ .el-collapse-item__wrap {
    background: transparent;
}
.businesstop /deep/ .el-collapse-item__header {
    background: #737aef;
    border-radius: 10px;
    color: #fff;
    border: 0;
    margin: 1em 0;
}
.businesstop /deep/ .el-icon-arrow-right:before {
    color: #fff;
    font-size: 20px;
    margin: 20px;
}
</style>
