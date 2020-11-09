<template>
    <div class="nav" style="width: 100%;height: 96%">
        <div class="left" id="left">
            <div :id="'box'+ix" class="box" v-for="(it,ix) in tabData">
                {{it.content}} 第{{ix}}个盒子
            </div>
        </div>
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
                isActive: 0,
                tabData: [],
                navData: [],
                height: 0,
                
            }
        },
        methods: {
            /**
             * @param data 从树节点传来的数据
             * */
            refresh(data) {
                this.tabData = [];
                this.isActive = 0;
                for (let i = 0; i < 5; i++) {
                    this.tabData.push({
                        name: data.label + '-tab' + (i + 1),
                        content: data.label + (i + 1)
                    })
                }
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
                    console.log(left.scrollTop)
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
                height: 80%;
                margin-bottom: 20px;
                background: #d4d4d4;
            }
        }

        .left::-webkit-scrollbar {
            display: none;
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
        }
    }
</style>