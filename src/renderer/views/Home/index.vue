<template>
  <div id="home">
    <div id="home_head">
      <div style="float: left;font-weight: bolder;font-size: 20px;">晚上好~</div>
      <div style="float: right;">
        <el-button style="border: 0;"><el-icon><plus /></el-icon></el-button>
        <el-dropdown>
          <el-button style="border: 0;"><el-icon><el-menu-icon /></el-icon></el-button>
          
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <el-divider style="margin: 0;"></el-divider>
    <div id="book-list">
      <div id="book">1</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Menu, Plus } from '@element-plus/icons-vue'
let ElMenuIcon = Menu
</script>
<style scoped>
#home{
  padding: 50px;
  width: 100%;
}
#home_head{
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 5px 0;
}
#book-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#book{
  width: 220px;
  height: 300px;
  border: 1px solid;
}
</style>