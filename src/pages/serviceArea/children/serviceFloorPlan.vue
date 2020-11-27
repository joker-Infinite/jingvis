<template>
    <div class="imgBox">
        <img src="../../../assets/service.jpg" class="img"/>
        <div class="smallBox" v-for="i in box" :style="i.style" @mouseover="hoverShow(i)">
            <el-tooltip class="item" effect="dark" :content="i.name+' : '+i.details" placement="top-start">
                <div style="width: 100%;height: 100%"></div>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
    export default {
        name: "serviceFloorPlan",
        data() {
            return {
                box: [
                    {
                        name: '办公区',
                        details: '为工作人员提供舒适的办公地点',
                        style: {
                            width: '50px',
                            height: '25px',
                            top: '142px',
                            left: '320px',
                        }
                    },
                    {
                        name: '加油区',
                        details: '提供柴油、汽油（E95、E98、95……）',
                        style: {
                            width: '50px',
                            height: '25px',
                            top: '226px',
                            left: '302px',
                        }
                    },
                    {
                        name: '小圆满餐厅',
                        details: '口味独特、菜品丰富',
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
                        details: '面中之王',
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
                        details: '咨询问题、提供休息处……',
                        style: {
                            width: '110px',
                            height: '60px',
                            top: '169px',
                            left: '496px',
                        }
                    },
                    {
                        name: '楚天舒便利店',
                        details: '便宜实惠、物美价廉……',
                        style: {
                            width: '43px',
                            height: '67px',
                            top: '142px',
                            left: '609px',
                        }
                    },
                    {
                        name: '驿路相伴小吃',
                        details: '特色小吃、品种丰富……',
                        style: {
                            width: '43px',
                            height: '67px',
                            top: '142px',
                            left: '654px',
                        }
                    },
                    {
                        name: '男厕',
                        details: '男厕所',
                        style: {
                            width: '58px',
                            height: '95px',
                            top: '113px',
                            left: '698px',
                        }
                    },
                    {
                        name: '女厕',
                        details: '女厕所',
                        style: {
                            width: '57px',
                            height: '95px',
                            top: '113px',
                            left: '757px',
                        }
                    },
                    {
                        name: '伟鸿汽修',
                        details: '处理及维修汽车故障……',
                        style: {
                            width: '48px',
                            height: '58px',
                            top: '113px',
                            left: '815px',
                        }
                    },
                    {
                        name: '猫屎咖啡',
                        details: '累了困了喝咖啡，猫屎咖啡你值得拥有……',
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
            hoverShow(v) {
                console.log(v.name);
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