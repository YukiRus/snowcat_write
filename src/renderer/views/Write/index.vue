<template>
  <div id="write_editor">
    <div id="editor_left">11</div>
    <div id="editor_main">
      <div id="editor_toolbar">
        <el-select v-model="value" placeholder="Select" size="small" style="width:60px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="Select" size="small" style="width:60px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="Select" size="small" style="width:60px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <set-bold></set-bold>
        <set-italics></set-italics>
        <set-underline></set-underline>
        <set-color></set-color>
        
      </div>
      <div id="editor"></div>
    </div>
    <div id="editor_right">11</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import E from 'wangeditor'

import SetBold from "./ToolBarButton/SetBold.vue"
import SetItalics from "./ToolBarButton/SetItalics.vue"
import SetUnderline from "./ToolBarButton/SetUnderline.vue"
import SetColor from "./ToolBarButton/SetColor.vue"


// ---data-----------------
let editor
let value = ref(1)
let options = reactive([
  {
    value: 1,
    label: "ss"
  },
  {
    value: 2,
    label: "ss"
  },
  {
    value: 3,
    label: "ss"
  }
])

const initEditor = ()=>{
  // wangeditor
  editor = new E('#editor')
  // 创建一个富文本编辑器
  
  editor.config.menus = []
  editor.config.showFullScreen = false
  editor.config.height = window.innerHeight - 30 - 50 -35
  editor.create()
}


onMounted(()=>{
  initEditor()
  window.onresize = ()=>{
    let reloadTemp = editor.txt.html()
    editor.destroy()
    initEditor()
    editor.txt.html(reloadTemp)
  }
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
  width: 100%;
  height: calc(100% - 50px);
}
#editor_left{
  flex-grow: 0;
  width: 200px;
  border-right: 1px solid #efefef;
}
#editor_main{
  flex-grow: 1;
  height: 100%;
  
}
#editor_toolbar{
  width: 100%;
  /* height: 30px; */
  border-bottom: 1px solid #efefef;
  display: flex;
  position: relative;
  z-index: 999;
  padding: 5px 5px;
}
#editor_toolbar > *{
  margin-right: 5px;
}
#editor{
  position: relative;
  z-index: 0;
}
#editor_right{
  flex-grow: 0;
  width: 200px;
  border-left: 1px solid #efefef;
}
</style>