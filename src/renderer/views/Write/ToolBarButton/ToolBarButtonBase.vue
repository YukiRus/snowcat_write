<template>
  <div id="ToolBarButton">
    <el-icon :size="20" color="#303133">
      <slot></slot>
    </el-icon>
  </div>
</template>
<script lang="ts" setup>

</script>    
<style scoped>
#ToolBarButton{
  width: 24px;
  height: 24px;
  padding: 2px;
}
#ToolBarButton:hover{
  background-color: #efefef;
}
#ToolBarButton:active{
  background-color: #ddd;
}
</style>