<template>
  <div id="SPageHead">
    <el-page-header :icon="ArrowLeft" content="detail" title=" " @back="" />
  </div>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue' 


// ---methods-------------------------------

</script>
<style scoped>
#SPageHead{
  height: 50px;
  padding: 13px;
}
</style>