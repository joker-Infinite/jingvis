<template>
    <div style="width: 100%;height: 100%;font-size: 50px">
        <my-collapse :sum="3" :collapseData="collapseData">
            <div slot="collapse0">
                第一个盒子
            </div>
            <div slot="collapse1">
                第二个盒子
            </div>
            <div slot="collapse2">
                第三个盒子
            </div>
            <div slot="collapse3">
                第四个盒子
            </div>
        </my-collapse>
    </div>
</template>

<script>
    import MyCollapse from "../../components/common/myCollapse";

    export default {
        name: "serviceArea",
        components: {MyCollapse},
        data() {
            return {
                collapseData: [
                    {
                        name: "营收",
                        icon: require("../../assets/business/icon_1-1.png"),
                        iconActive: require("../../assets/business/icon_1-2.png")
                    },
                    {
                        name: "利润",
                        icon: require("../../assets/business/icon_2-1.png"),
                        iconActive: require("../../assets/business/icon_2-2.png")
                    },
                    {
                        name: "成本",
                        icon: require("../../assets/business/icon_3-1.png"),
                        iconActive: require("../../assets/business/icon_3-2.png")
                    },
                    {
                        name: "数量",
                        icon: require("../../assets/business/icon_4-1.png"),
                        iconActive: require("../../assets/business/icon_4-2.png")
                    },
                    {
                        name: "结构",
                        icon: require("../../assets/business/icon_5-1.png"),
                        iconActive: require("../../assets/business/icon_5-2.png")
                    },
                    {
                        name: "回款率",
                        icon: require("../../assets/business/icon_6-1.png"),
                        iconActive: require("../../assets/business/icon_6-2.png")
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>