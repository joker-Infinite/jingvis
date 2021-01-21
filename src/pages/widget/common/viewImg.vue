<template>
    <div style="width: 100%;position: relative">
        <div class="sBox"
             v-for="i in JSON.parse(json)"
             :style="i.style">
            <el-popover
                    placement="bottom"
                    :disabled="popoverDisabled"
                    v-if="i.name"
                    :title="i.name"
                    width="300"
                    trigger="hover">
                <table class="table" border="1" cellspacing="0">
                    <tr v-if=i.data v-for="(it, ix) in i.data">
                        <th>{{ it.a }}</th>
                        <th>{{ it.b }}</th>
                    </tr>
                </table>
                <div style="width: 100%;height: 100%" slot="reference"></div>
            </el-popover>
        </div>
        <img :src="imgUrl" style="width: 1200px"/>
    </div>
</template>

<script>
    export default {
        name: "viewImg",
        props: {
            url: {
                type: String,
                default: ''
            },
            json: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                imgUrl: '',
                proxy: 'http://192.168.0.191/ftpuser/',
                popoverDisabled: false
            }
        },
        mounted() {
            this.imgUrl = this.proxy + this.url;
        }
    }
</script>

<style scoped lang="less">
    .sBox {
        position: absolute;
        background: none !important;
    }
</style>