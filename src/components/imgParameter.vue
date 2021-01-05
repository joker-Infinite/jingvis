<template>
  <div class="BB">
    <div class="i_l" id="IL">
      <div class="sBox"
           :style="{width:style.width+'px',height:style.height+'px',top:style.top+'px',left:style.left+'px',background:style.background}"></div>
      <img src="" id="imgDot" :style="{width:FD.imgWidth+'px'}" @click="clickDot">
    </div>
    <div class="i_r">
      <el-form :model="FD">
        <div class="item" style="padding: 10px 10px">
          <input id="upload" type="file" @change="uploadImg">
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-info" circle disabled></el-button>
          名字：
          <el-input v-model="FD.name"></el-input>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-edit" circle disabled></el-button>
          图宽：
          <el-input-number controls-position="right" :min="1" v-model="FD.imgWidth"></el-input-number>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="parameter('lt')"></el-button>
          左上：
          <el-input v-model="FD.lt"></el-input>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="parameter('rb')"></el-button>
          右下：
          <el-input v-model="FD.rb"></el-input>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-check" circle disabled></el-button>
          宽度：
          <el-input-number controls-position="right" :min="1" v-model="FD.width"
                           @change="changeNumber('width')"></el-input-number>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-check" circle disabled></el-button>
          高度：
          <el-input-number controls-position="right" :min="1" v-model="FD.height"
                           @change="changeNumber('height')"></el-input-number>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-check" circle disabled></el-button>
          距左：
          <el-input-number controls-position="right" :min="1" v-model="FD.left"
                           @change="changeNumber('left')"></el-input-number>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-check" circle disabled></el-button>
          距上：
          <el-input-number controls-position="right" :min="1" v-model="FD.top"
                           @change="changeNumber('top')"></el-input-number>
        </div>
        <div class="item" style="padding: 10px 10px">
          <el-button size="mini" type="primary" icon="el-icon-star-on" circle disabled></el-button>
          颜色：
          <el-input v-model="FD.background" @blur="changeNumber('background')"></el-input>
        </div>
        <div class="item" style="padding: 10px 10px;text-align: center">
          <el-button type="primary" @click="preview(FD)">预览</el-button>
          <el-button type="primary" @click="generate(style)">生成代码</el-button>
        </div>
      </el-form>
      <div class="text_json">
        <el-input type="textarea" rows="12" resize="none" v-model="gCode"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "imgParameter",
		data() {
			return {
				FD: {
					name: '',
					imgWidth: 1200,
					lt: '',
					rb: '',
					width: '',
					height: '',
					left: '',
					top: '',
					background: 'rgba(0,0,0,.4)',
				},
				FP: '',
				gCode: '',
				style: {}
			}
		},
		methods: {
			uploadImg(v) {
				let f = document.getElementById('upload').files[0];
				let src = window.URL.createObjectURL(f);
				document.getElementById('imgDot').src = src;
			},
			generate(v) {
				this.gCode = JSON.stringify({
					name: v.name,
					style: {
						width: v.width + 'px',
						height: v.height + 'px',
						top: v.top + 'px',
						left: v.left + 'px',
						background: v.background,
						position: 'absolute',
					}
				});
			},
			changeNumber(v) {
				this.style[v] = this.FD[v];
			},
			clickDot() {
				let left = event.clientX;
				let top = event.clientY;
				let arr = left + ',' + top;
				this.FD[this.FP] = arr;
			},
			//预览
			preview(v) {
				let lt = [];
				let rb = [];
				if (v.lt && v.rb) {
					lt = v.lt.split(',');
					rb = v.rb.split(',');
					v.left = lt[0];
					v.top = lt[1];
					v.width = rb[0] - lt[0];
					v.height = rb[1] - lt[1];
					this.style = {
						left: lt[0],
						top: lt[1],
						width: rb[0] - lt[0],
						height: rb[1] - lt[1],
						background: v.background,
						name: v.name,
					};
				}
			},
			//参数
			parameter(v) {
				this.FP = v;
			}
		}
	}
</script>

<style scoped lang="less">
  .BB {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;

    .i_l {
      width: calc(100% - 400px);
      height: 100%;
      background: white;
      position: relative;

      .sBox {
        position: absolute;
      }
    }

    .i_r {
      width: 400px;
      height: 100%;

      .item {
        /deep/ .el-input {
          width: 250px;

          .el-input__inner {
            height: 30px;
            line-height: 30px;
          }
        }

        /deep/ .el-input-number {
          width: 250px;
          height: 30px;
          line-height: 30px;

          .el-input-number__increase {
            line-height: 15px;
          }

          .el-input-number__decrease {
            line-height: 15px;
          }
        }
      }

      .text_json {
        width: 100%;
        height: 300px;
      }
    }
  }
</style>