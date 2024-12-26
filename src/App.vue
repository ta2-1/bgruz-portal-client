<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ConfigProvider, theme } from 'ant-design-vue';
import ru_RU from 'ant-design-vue/es/locale/ru_RU';
</script>

<template>
  <ConfigProvider
    :locale="ru_RU"
    :theme="{
      algorithm: theme.defaultAlgorithm,
    }"
  >
    <RouterView />
  </ConfigProvider>
</template>

<style scoped>

</style>
