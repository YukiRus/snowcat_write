<template>
  <div id="book_base" @click="bookOnClick">
    <div @click="stopProp">
      <el-dropdown class="pos" id="more-button" trigger="click">
        <el-button class="no-border" style="background-color: rgba(0, 0, 0, 0);">
          <el-icon><more-filled /></el-icon>
        </el-button>
        
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>更换封面</el-dropdown-item>
            <el-dropdown-item>修改书名</el-dropdown-item>
            <el-dropdown-item><span style="color: red;">删除书籍</span></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    
    
    <div id="cover-img" class="pos">
      <img :src="defaultCover" width="162" height="216">
    </div>
    <div id="bookbaseinfo" class="pos">
      <div id="bookname">书名</div>
      <div id="wordcount">{{ wordCount }}字</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {MoreFilled} from "@element-plus/icons-vue"
import defaultCover from "@renderer/assets/images/defaultCover.png"
import router from "@renderer/router";

let wordCount = 1000
/**
 * 阻止点击事件穿透到下面
 * @param event 
 */
const stopProp = (event)=>{
  event.stopPropagation();
}
const bookOnClick = function(){
  router.push("/editor")
}
</script>
<style scoped>
  #book_base{
    width: 220px;
    height: 300px;
    border-radius: 4px;
    position: relative;
  }
  #book_base:hover{
    background-color: #f8f8f8;
  }

  #more-button{
    right: 0px;
    top: 0px;
  }
  
  #cover-img{
    left: 29px;
    top: 10px;

  }
  #bookbaseinfo{
    text-align: center;
    bottom: 10px;
    width: 100%;
  }
  #wordcount{
    font-size: 14px;
  }
  .pos{
    position: absolute;
  }
  .no-border{
    border: 0 !important;
  }
</style>
