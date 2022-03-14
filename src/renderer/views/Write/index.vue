<template>
  <div id="write_editor">
    <div id="editor_left">11</div>
    <div id="editor"></div>
    <div id="editor_right">11</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import E from 'wangeditor'

// ---data-----------------
let phoneEditor


onMounted(()=>{
  // wangeditor
  phoneEditor = new E('#editor')
  // 创建一个富文本编辑器
  
  phoneEditor.config.menus = []
  phoneEditor.create()
  // 富文本内容
  phoneEditor.txt.html()
})

</script>
<style>
.w-e-toolbar{
  display: none !important;
}
.w-e-text-container{
  border: none !important;
}
</style>
<style scoped>
  #write_editor{
    display: flex;
    width: 100%
  }
  #editor_left{
    width: 20%;
  }
  #editor{
    width: 60%;
    height: 100%;
  }
  #editor_left{
    width: 20%;
  }
</style>