<template>
  <div class="con">
    <!-- <div class="view">
         <el-menu default-active="1-0" class="el-menu-vertical-demo">
             <el-submenu v-for="(fi,fx) in menu" :key="fx" :index="fx+''" :class="{'del':fi.menuName=='首页'}">
                 <template slot="title">
                     {{fi.menuName}}
                 </template>
                 <el-menu-item v-if="fi.child.length>0" v-for="(si,sx) in fi.child" :index="fx+'-'+sx">
                     {{si.menuName}}
                 </el-menu-item>
             </el-submenu>
         </el-menu>
     </div>
     <div class="option">
         <el-input contenteditable="true" type="textarea" resize="none" rows="50"
                   v-model="JSON.stringify(menu)"></el-input>
     </div>-->
    <img-floor-plan></img-floor-plan>
    <!--<my-dialog></my-dialog>-->
    <!--<el-button @click="reset">重置</el-button>
    <span @click="clear"
          :style="{color:(this.del % 2 === 0&&this.start % 2 === 1)?'#38d':'#606266',padding:'12px 20px'}">橡皮擦</span>
    <span @click="clear"
          :style="{color:(this.start % 2 === 0&&this.del % 2 === 1)?'#38d':'#606266',padding:'12px 20px'}">画笔</span>
    <div class="bigB" @click="startPainting">
      <div v-for="i in 25000" style="width: 10px;height: 10px" :class="'ss'+i+' box'"
           @mouseover="changeColor('ss'+i)"></div>
    </div>-->
  </div>
</template>

<script>
	import MyDialog from "./myDialog";
	import ImgFloorPlan from "./imgFloorPlan";

	export default {
		name: "temporary",
		components: {ImgFloorPlan, MyDialog},
		data() {
			return {
				menu: [],
				start: 1,
				paint: [],
				del: 1
			};
		},
		methods: {
			reset() {
				this.paint.forEach(i => {
					i.style.background = 'white';
				})
			},
			startPainting() {
				this.start++;
			},
			clear() {
				this.del++;
			},
			async changeColor(c, t) {
				let ssa = document.getElementsByClassName(c)[0];
				if (this.start % 2 === 0) {
					await new Promise(resolve => {
						setTimeout(_ => {
							resolve();
						}, 10)
					});
					if (this.del % 2 === 1) {
						ssa.style.background = '#000';
						this.paint.push(ssa);
					} else {
						ssa.style.background = '#FFF';
					}


				}
			}
		}
		/*methods: {
          async getMenuItem(data) {
              for (let i = 0; i < data.length; i++) {
                  await this.$axios.get('/bpi/admin/jt_menu/list_menu', {params: {menuId: data[i].menuId}}).then(v => {
                      if (v.data.data && v.data.data.length === 0) {

                      }
                      if (v.data.data && v.data.data.length > 0) {
                          data[i].child = v.data.data;
                      }
                      this.menu = [];
                      this.menu = data;
                  });
              }
          }
      },
      async created() {
          let data = [];
          const res = await this.$axios.get('/bpi/admin/jt_menu/list_menu', {params: {menuId: 0}});
          this.menu = data = res.data.data;
          await this.getMenuItem(data);
      }*/
	};
</script>

<style scoped lang="less">
  .bigB {
    width: 1900px;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    /*margin: auto;*/

    div {
      background: white;
    }

    /* div:nth-child(n) {
       background: red;
     }

     div:nth-child(2n) {
       background: blue;
     }*/
  }

  .con {
    width: 100%;
    height: 100%;
    margin: auto;

    .view {
      width: 70%;
      height: 100%;
      background: #99a9bf;
    }

    .view /deep/ .el-menu > .del > .el-submenu__title > .el-submenu__icon-arrow {
      display: none;
    }

    .option {
      width: 30%;
      height: 100%;
      background: #a8d9ff;
    }
  }
</style>
