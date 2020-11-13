<template>
    <div class="container">
        <div class="nav">
            <div class="left" id="left">
                <div :id="'box' + ix" class="box" v-for="(it, ix) in tabData">
                    <revenue v-if="ix === 0"></revenue>
                    <profit v-if="ix === 1"></profit>
                    <wholesale v-if="ix === 2"></wholesale>
                    <gas v-if="ix === 3"></gas>
                    <collection-rate v-if="ix === 4"></collection-rate>
                </div>
            </div>
            <div class="right">
                <div class="navBar">
                    <p v-for="(it, ix) in tabData"
                       @click="goto(ix)"
                       :class="{ active: isActive === ix }">
                        {{ it.content }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Revenue from "./child/Revenue";
    import Profit from "./child/profit";
    import Wholesale from "./child/Wholesale";
    import Gas from "./child/gas";
    import CollectionRate from "./child/CollectionRate";

    export default {
        name: "Energy",
        components: {CollectionRate, Gas, Wholesale, Profit, Revenue},
        data() {
            return {
                isActive: 0,
                tabData: [
                    {content: '营收'},
                    {content: '利润'},
                    {content: '批零差价'},
                    {content: '加油站分布'},
                    {content: '回款率'},
                ],
                navData: [],
                height: 0,

            }
        },
        methods: {
            /**
             * @param v 所点击导航的下标
             * */
            goto(v) {
                let id = '#box' + v;
                document.querySelector(id).scrollIntoView(true);
            },
            /**
             * 监听滚动事件
             * */
            scrollChange() {
                let left = document.getElementById('left');
                left.addEventListener('scroll', _ => {
                    this.navData = [];
                    this.tabData.forEach((item, index) => {
                        this.navData.push(
                            {
                                index: index,
                                height: document.getElementById('box' + index).offsetTop-20
                            }
                        );
                    });
                    this.navBar(left.scrollTop);
                })
            },
            /**
             * 滚动后导航选中
             * */
            navBar(v) {
                for (let i = 0; i < this.navData.length; i++) {
                    if (i < this.navData.length-1) {
                        if (v > this.navData[i].height && v < this.navData[i + 1].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                    if (i === this.navData.length-1) {
                        if (v > this.navData[i].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.scrollChange();
        },

    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        /*height: 100%;*/
        margin: auto;
        background: #F3F7FF;
        position: relative;

        .nav {
            width: 90%;
            margin: 0 5%;
            /*height: 100%;*/
            margin: auto;
            background: #F3F7FF;
            position: relative;
            height: 950px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            .left {
                width: 90%;
                height: 100%;
                float: left;
                overflow-y: scroll;
                scroll-behavior: smooth;

                .box {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }

            .left::-webkit-scrollbar {
                display: none;
            }

            /*.right {
                width: 10%;
                height: 100%;
                float: right;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                justify-content: center;

                .navBar {
                    width: 100%;
                    min-height: 20px;
                    border-left: 1px solid #999999;

                    .active {
                        color: #409eff;
                        border-left: 5px solid #409eff;
                    }
                }

                .navBar > p {
                    text-indent: 20px;
                    line-height: 30px;
                    border-left: 5px solid rgba(0, 0, 0, 0);
                    cursor: pointer;
                }
            }*/
            .right {
                width: 20%;
                float: right;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                justify-content: center;

                .navBar {
                    padding-top: 5%;
                    padding-bottom: 5%;
                    box-sizing: border-box;
                    position: fixed;
                    /*box-shadow: 1px 1px 1px 10px rgba(0, 0, 0, 1);*/
                    width: 9%;
                    // height: 80%;
                    background: #fff;
                    z-index: 100;
                    top: 10%;
                    right: 1%;
                    border-radius: 10px;

                    .active {
                        // color: #409eff;
                        // border-left: 5px solid #409eff;
                        background: #737aef;
                        margin-left: -8%;
                        margin-right: 8%;
                        border-radius: 10px;
                        padding-left: 40px;
                    }
                }

                .navBar > p {
                    // cursor: pointer;
                    padding: 10% 0;
                    margin: 15% 0;
                    margin-left: 25%;
                    cursor: pointer;
                }
            }
        }
    }
</style>
