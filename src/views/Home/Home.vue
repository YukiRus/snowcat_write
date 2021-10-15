<template>
  <n-grid>
    <n-grid-item :span="2">
      
    </n-grid-item>
    <n-grid-item :span="16">
      <h1 style="margin-bottom:0">Hi,今天也是适合写作的一天呢</h1>
    </n-grid-item>
    <n-grid-item :span="4" style="height:63px;">
      <div style="margin-top: 35px">
        <n-popselect v-model:value="addMenu.value" :options="addMenu.options" trigger="click">
          <div class="homeMenu">
            <n-icon size="30" >
              <svg-icon icon="add"></svg-icon>
            </n-icon>
          </div>
        </n-popselect>
        <div class="homeMenu" @click="clicks">
          <n-icon size="30" >
            <svg-icon icon="bulleted"></svg-icon>
          </n-icon>
        </div>
        <div class="homeMenu" @click="clicks">
          <n-icon size="30" >
            <svg-icon icon="delete"></svg-icon>
          </n-icon>
        </div>
        <div class="homeMenu" @click="clicks">
          <n-icon size="30" >
            <svg-icon icon="refresh"></svg-icon>
          </n-icon>
        </div>
      </div>
    </n-grid-item>
    <n-grid-item :span="2">
    </n-grid-item>
  </n-grid>
  <n-grid>
    <n-grid-item :span="2">
    </n-grid-item>
    <n-grid-item :span="20">
      <n-divider title-placement="left">选择一本书开始创作吧！</n-divider>
    </n-grid-item>
    <n-grid-item :span="2">
    </n-grid-item>
  </n-grid>

  <n-grid>
    <n-grid-item :span="2">
    </n-grid-item>
    <n-grid-item :span="20">
      <n-grid cols="5 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
        <n-grid-item>
          <book-show :bookname="'书名'" :updatetime="'2021年10月1日'" :cover="require('../../assets/logo.png')"></book-show>
        </n-grid-item>
      </n-grid>
      
    </n-grid-item>
    <n-grid-item :span="2">
    </n-grid-item>
  </n-grid>
  
</template>

<script>
import BookShow from './HomeBookShow.vue'
export default {
  components:{
    "book-show": BookShow
  },
  data: function(){
    return {
      addMenu:{
        value:"",
        options:[
          {
            label: '新建书籍',
            value: 'NewBook'
          },
          {
            label: '导入书籍',
            value: 'ImportBook'
          }
        ]
      }
    }
  },
  methods:{
    clicks: function(){
      alert("?")
    }
  }
}
</script>

<style>




.n-divider .n-divider__title{
  color: #2C3E50 !important
}
.n-divider.n-divider--title-position-left .n-divider__line.n-divider__line--left{
  width: 0 !important;
}
.n-divider .n-divider__title{
  margin-left: 0 !important;
}
.n-divider:not(.n-divider--vertical){
  margin: 0 !important;
}
</style>