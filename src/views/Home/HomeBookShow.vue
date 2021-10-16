<template>
  <div class="book-style" >
    <div @click="c('sty')">
      <div class="book-cover">
        <img :src="cover" alt="" width="180" height="240">
      </div>
      <div class="book-name">
        <div>{{bookname}}</div>
        <div class="update-time">最后创作: {{updatetime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    bookname: String,
    updatetime: String,
    cover: String
  },
  methods:{
    c:function(cc){
      alert(cc)
    }
  },
  mounted:function(){
    const {remote} = require('electron');
    const {Menu, MenuItem} = remote;
 
    //右键餐单
    const menu = new Menu();
    menu.append(new MenuItem({
        label: '放大',
        click:function ()  {
            console.log('item 1 clicked')
        }
    }));
    menu.append(new MenuItem({type: 'separator'}));//分割线
    menu.append(new MenuItem({label: '缩小'}));//选中
 
    this.$el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        menu.popup({window: remote.getCurrentWindow()})
    }, false)
  }

}
</script>

<style>
.homeMenu{
  width:30px;
  height:30px;
  cursor:pointer;
  float: right;
}
.book-style{
  border: 1px solid #fff;
  width:200px;
  height:300px;
  background:#fff;
  margin-top: 10px;
  position: relative;
  left:50%;
  margin-left: -90px;
  
}
.book-setting{
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  z-index: 99;
  pointer-events: none;
}
.book-style:hover{
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #eee;
  cursor: pointer;
}
.book-style .book-name{
  width: 100%;
  text-align: center;
}

.book-style{
  position:relative;
  left:50%;
  margin-left: -90px
}
.book-cover{
  margin: 0 10px;
}
.book-style .update-time{
  font-size: 12px;
}
</style>