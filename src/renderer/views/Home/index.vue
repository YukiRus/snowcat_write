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
    <div id="book-list" ref="bookListRef">
      <div id="book" v-for="bookInfo in bookList">
        {{ bookInfo.bookName }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Menu, Plus } from '@element-plus/icons-vue'
import { ref } from 'vue';
let ElMenuIcon = Menu

let bookListRef = ref(null)

let bookList = [
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
  {
    bookName: 0
  },
]

const resize = function(){
  let width = bookListRef._value.clientWidth
  let lineMaxBookCount = parseInt((width / 220).toString())
  console.log(lineMaxBookCount)


}

window.onresize = resize

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
  justify-content: space-between;
}

#book{
  width: 220px;
  height: 300px;
  border: 1px solid;
}

</style>