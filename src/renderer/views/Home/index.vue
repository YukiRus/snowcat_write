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
    <el-divider style="margin:5px 0;"></el-divider>
    <div id="book-list" ref="bookListRef">
      <div id="book" v-for="bookInfo of bookListRender.bookList">
        <div v-if="!bookInfo.isEmpty">
          <book-base></book-base>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive, ref } from 'vue';
import BookBase from './BookBase/index.vue'
import { Menu, Plus } from '@element-plus/icons-vue'
let ElMenuIcon = Menu

// booklist 的 refs
let bookListRef = ref(null)

// 书籍列表数组
let bookList = [
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
  {
    isEmpty: false,
    bookName: 0
  },
]
let bookListRender = reactive({bookList})

/**
 * 窗口调整高度的时候触发
 */
const resize = function(){
  addEmpty()
}
/**
 * 为booklist添加空对象以确保最后一行对齐正确
 */
const addEmpty = function(){
  // 获取booklist可以显示的宽度
  let width = bookListRef._value.clientWidth
  // 每行可以显示的个数
  let lineMaxBookCount = parseInt(((width-10) / 220).toString())
  // 最后一行有几个
  let afterLineCount = bookList.length % lineMaxBookCount
  
  // 最后一行剩下几个
  let addEmptyObjCount
  if(afterLineCount !== 0){
    addEmptyObjCount = lineMaxBookCount - afterLineCount
  }

  // 添加对应个数的空白对象
  bookListRender.bookList = [].concat(bookList)
  for(let i = 0; i < addEmptyObjCount; i++){
    bookListRender.bookList.push({isEmpty:true,bookName:0})
  }
}
onMounted(()=>{
  addEmpty();
  window.onresize = resize
})
</script>
<style scoped>
#home{
  padding: 50px;
  width: 100%;
  height: calc(100% - 50px);;
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
  height: 100%;
  overflow: scroll;
  padding: 5px;
}

#book{
  width: 220px;
  height: 300px;
  margin: 10px 0;
}

</style>