<template>
    <div style="width: 100%;height: 100%">
        <internal ref="internals" id="lc"></internal>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childLCTemp",
        components: {Internal},
        data() {
            return {}
        },
        methods: {
            init() {
                let op = {
                    barWidth: 10,
                    grid: {
                        top: "15%",
                        bottom: 30
                    },
                    xAxis: {
                        type: "value",
                        position: "bottom",
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF"
                            }
                        }
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    series: [
                        {
                            name: "收入",
                            type: "bar",
                            label: {
                                show: true,
                                position: "insideLeft",
                                color: "#fff",
                                formatter: "{b}" + "：{c}" + "%"
                            },
                            data: [120, 200, 150, 80, 70, 110, 130],
                        }
                    ]
                };
                this.$refs['internals'].initECharts(op);
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>

</style>