<template>
    <div style="float:left;margin-top: 5px;margin-left: 10px;height:20px">
      <span>
        <img style="vertical-align:middle" src="../../assets/logo.png" alt="" width="20" height="20">
      </span>
      <span style="margin-left:5px;line-height:20px">雪猫写作</span>
    </div>
    <div style="-webkit-app-region: drag;height: 30px;background: #efefef;width: 100%;">
      <div style="-webkit-app-region: no-drag; float:right">
        <div @click="closeWin" class="titleBtn">
          <n-icon size="16" :depth="3" class="titleNic">
            <!--关闭icon--><svg t="1633276616608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5275" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M557.327 512l361.29 361.29c12.517 12.517 12.517 32.81 0 45.327-12.517 12.517-32.81 12.517-45.327 0L512 557.327l-361.29 361.29c-12.517 12.517-32.81 12.517-45.327 0-12.517-12.517-12.517-32.81 0-45.327L466.673 512l-361.29-361.29c-12.517-12.517-12.517-32.81 0-45.327 12.517-12.517 32.81-12.517 45.327 0L512 466.673l361.29-361.29c12.517-12.517 32.81-12.517 45.327 0 12.517 12.517 12.517 32.81 0 45.327L557.327 512z" p-id="5276"></path></svg>
          </n-icon>
        </div> 
        <div @click="maximizeWin"  class="titleBtn">
          <n-icon size="16" :depth="3" class="titleNic" v-if="da">
            <!--最大化icon--><svg t="1633276516961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4822" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M800 928H224c-70.692 0-128-57.308-128-128V224c0-70.692 57.308-128 128-128h576c70.692 0 128 57.308 128 128v576c0 70.692-57.308 128-128 128z m64-704c0-35.346-28.654-64-64-64H224c-35.346 0-64 28.654-64 64v576c0 35.346 28.654 64 64 64h576c35.346 0 64-28.654 64-64V224z" p-id="4823"></path></svg>
          </n-icon>
          <n-icon size="16" :depth="3" class="titleNic" v-if="!da">
            <!--窗口化icon--><svg t="1633276591301" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4973" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M832 704H704v128c0 70.692-57.308 128-128 128H192c-70.692 0-128-57.308-128-128V448c0-70.692 57.308-128 128-128h128V192c0-70.692 57.308-128 128-128h384c70.692 0 128 57.308 128 128v384c0 70.692-57.308 128-128 128zM192 384c-35.346 0-64 28.654-64 64v384c0 35.346 28.654 64 64 64h384c35.346 0 64-28.654 64-64V448c0-35.346-28.654-64-64-64H192z m704-192c0-35.346-28.654-64-64-64H448c-35.346 0-64 28.654-64 64v128h192c70.692 0 128 57.308 128 128v192h128c35.346 0 64-28.654 64-64V192z" p-id="4974"></path></svg>
          </n-icon>
        </div> 
        <div @click="minimizeWin"  class="titleBtn">
          <n-icon size="16" :depth="3" class="titleNic">
            <!--最小化icon--><svg t="1633276605632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5124" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs></defs><path d="M96 768h832c17.673 0 32 14.327 32 32s-14.327 32-32 32H96c-17.673 0-32-14.327-32-32s14.327-32 32-32z" p-id="5125"></path></svg>
          </n-icon>
        </div> 
      </div>
      
    </div>
</template>
<script lang="ts">
const electron = require('electron')
const ipc = require('electron').ipcRenderer;
const remote = electron.remote
export default {
    data: function(){
      return {
        da: true
      }
    },
    methods:{
        minimizeWin: function(){
        remote.getCurrentWindow().minimize(); // 窗口最小化
      },
      maximizeWin: function(){
        const win=remote.getCurrentWindow();
        if(win.isMaximized()){ // 判断 窗口是否已最大化 
          win.restore();// 恢复原窗口大小
          this.da = true
        }else{
          win.maximize();  //最大化窗口
          this.da = false
        }
      },
      closeWin: function(){
        // remote.getCurrentWindow().close(); // 关闭窗口，也结束了所有进程
        // window.close()
        ipc.send('window-close');
      }
    }
}
</script>
<style>
.titleBtn{
  /* margin-top: 5px; */
  width: 40px;
  height: 30px;
  margin-right: 5px;
  float: right;
}
.titleNic{
  margin-top: 7px;
}
</style>