<!--
 * @Description: 
 * @Author: Liyuanpeng
 * @Date: 2019-07-04 11:02:57
 * @LastEditTime: 2019-07-05 09:32:59
 * @LastEditors: Liyuanpeng
 -->
<template>
  <d2-container type="card" better-scroll>
    <template slot="header">
      <div class="header">
        <el-radio-group v-model="showIndex" size="mini">
          <el-radio-button
            v-for="(item, index) in radioOptions"
            :key="index"
            :label="item.value">
            {{item.label}}
          </el-radio-button>
        </el-radio-group>
        <i class="fa fa-plus-circle" style="color:red;font-size:24px" aria-hidden="true"></i>
      </div>
      
    </template>
    <el-row style="margin: -10px;">
      <el-alert title="点击图标复制代码" type="info" class="d2-m-10" style="width: auto;"/>
      <el-col v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="6" class="d2-p-10">
        <d2-icon-cell :icon="iconItem"/>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import icon from './data/index'
export default {
  components: {
    'd2-icon-cell': () => import('./components/d2-icon-cell')
  },
  data () {
    return {
      icon,
      showIndex: 12
    }
  },
  computed: {
    iconShow () {
      return this.icon[this.showIndex]
    },
    radioOptions () {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  }
}
</script>
<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
  }
</style>

