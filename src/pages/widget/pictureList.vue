<template>
    <div style="width: 100%;height: 100%">
        <el-table :data="tableData"
                  height="100%">
            <el-table-column fixed="left"
                             label="序号"
                             align="center"
                             width="50">
                <template slot-scope="scope" align="center">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column prop="a" label="服务区平面图" align="center">
                <template slot-scope="scope">
                    <el-image style="width: 100px"
                              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                              :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']"></el-image>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="b" label="服务区名"></el-table-column>
            <el-table-column align="center" prop="c" label="服务区方向"></el-table-column>
            <el-table-column align="center" prop="d" label="服务区JSON"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "pictureList",
        data() {
            return {
                tableData: [
                    {
                        a: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                        b: '安陆服务区',
                        c: '西区',
                        d: '[]'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>