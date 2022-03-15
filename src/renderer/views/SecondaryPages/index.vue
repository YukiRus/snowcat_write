<template>
  <div id="SPageHead">
    <el-page-header :icon="ArrowLeft" content="detail" title=" " @back="backLastPage" />
  </div>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue' 


// ---methods-------------------------------
const backLastPage = ()=>{
  window.history.back()
}
</script>
<style scoped>
#SPageHead{
  height: 50px;
  padding: 13px;
  border-bottom: 1px solid #efefef;
  
}

</style>