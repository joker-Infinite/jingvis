<template>
    <div class="nav" style="width: 100%;height: 96%">
        <el-collapse class="left" id="left" v-model="activeName">
            <el-collapse-item :name="ix" :id="'box'+ix" class="box" v-for="(it,ix) in tabData">
                <template slot="title">
                    <span style="display: inline-block;width: 20px"></span>
                    <i class="header-icon el-icon-info"></i>
                    <span style="display: inline-block;width: 5px"></span>
                    {{it.content}}
                </template>
            </el-collapse-item>
        </el-collapse>
        <div class="right">
            <div class="navBar">
                <p v-for="(it,ix) in tabData" @click="goto(ix)" :class="{'active':isActive === ix}">
                    {{it.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navCommon",
        data() {
            return {
                activeName: [0, 1, 2, 3, 4],
                isActive: 0,
                tabData: [],
                navData: [],
                height: 0
            }
        },
        methods: {
            /**
             * @param data
             * */
            refresh(data) {
                this.tabData = data;
                this.isActive = 0;
                this.$nextTick(_ => {
                    document.querySelector('#box0').scrollIntoView(true);
                })
            },
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
                                height: document.getElementById('box' + index).offsetTop
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
                    if (v < this.navData[i].height || v == this.navData[i].height) {
                        this.isActive = i;
                        break;
                    }
                }
            }
        },
        mounted() {
            this.scrollChange();
        }
    }
</script>

<style scoped lang="less">
    .nav {
        width: 100%;
        height: 96%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        .left {
            width: 80%;
            height: 100%;
            float: left;
            overflow-y: scroll;
            scroll-behavior: smooth;

            .box {
                width: 100%;
                background: #d4d4d4;
                text-align: center;
            }
        }

        .left::-webkit-scrollbar {
            display: none;
        }

        .left /deep/ .el-collapse-item > .el-collapse-item__wrap {
            min-height: 500px;
        }

        .left /deep/ .el-collapse-item > div > .el-collapse-item__header {
            background: #f7f7f7;
        }

        .right {
            width: 20%;
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
                    color: red;
                }
            }

            .navBar > p {
                text-indent: 20px;
                line-height: 30px;
                cursor: pointer;
            }
        }
    }
</style>