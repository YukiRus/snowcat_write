<template>
  <div style="position: relative">
    <customtitle />
    <div id="mainContent" :style="appstyle">
      <div style="text-align:left;padding:20px">
        <n-config-provider :theme-overrides="themeOverrides">
          <router-view/>
        </n-config-provider>
      </div>
    </div>  
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
import customtitle from './views/Title/Title.vue' 

export default {
  // setup() {
  //   onMounted(()=>{
      
  //   })
  // },
  components:{
    customtitle
  },
  data: function(){
    return {
      winWidth: 100,
      winHeight: 100,
      appstyle: {
        height: '100px',
        width: '100%',
        overflow: 'auto',
        position: 'relative'
      },
      themeOverrides : {
        common: {
          primaryColor: '#409EFF'
        },
      }
    }
  },
  beforeCreate: function(){
    // this.winHeight = 100
    // this.winWidth = 100
  },
  mounted: function(){
    this.findWindowSize()
    window.onresize=this.findWindowSize
  },
  methods:{

    findWindowSize: function() {
        // 获取窗口宽度
        if (window.innerWidth)
            this.winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            this.winWidth = document.body.clientWidth;
        //获取窗口高度
        if (window.innerHeight)
            this.winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            this.winHeight = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
        {
            this.winHeight = document.documentElement.clientHeight;
            this.winWidth = document.documentElement.clientWidth;
        }
        //结果输出至两个文本框
        console.log("窗口宽高变更为：" + this.winWidth +"*" + this.winHeight);
        // console.log(this.winWidth);
      this.appstyle.height = (this.winHeight - 30) + "px"
    },
    
  }
}
</script>

