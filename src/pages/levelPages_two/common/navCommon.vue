<template>
    <div class="nav" style="width: 100%;height: 96%">
        <div class="left">
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
                tabData: []
            }
        },
        methods: {
            refresh(data) {
                this.tabData = [];
                this.isActive = 0;
                for (let i = 0; i < 3; i++) {
                    this.tabData.push({
                        name: data.label + '-tab' + (i + 1),
                        content: data.label + (i + 1)
                    })
                }
                this.$nextTick(_ => {
                    document.querySelector('#box0').scrollIntoView(true);
                })
            },
            goto(v) {
                this.isActive = v;
                let id = '#box' + v;
                document.querySelector(id).scrollIntoView(true);
            }
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