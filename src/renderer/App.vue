<template>
  <title-bar />
  <div style="height: 30px;"></div>
  <el-config-provider :locale="i18nt">
    <div style="width: 100%;height: calc(100% - 30px)">
      <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    </div>
    
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { i18n } from "./i18n";
import TitleBar from "./components/common/TitleBar.vue";

const i18nt = computed(() => i18n.global.messages[i18n.global.locale].el);
</script>

<style></style>
