<template>
  <div class="w-full h-full grid grid-rows-[1fr_100%]" :class="{ 'overflow-auto': isMobile }">
    <header class="fixed left-0 w-full z-10">
      <div class="flex justify-between px-[20px] py-[6px] border-b border-[#141414]">
        <div class="flex gap-[14px] items-center">
          <Sidebar />
          <slot name="left" />
        </div>
        <div>
          <slot name="center" />
        </div>
        <div class="flex gap-[14px]">
          <slot name="right" />
        </div>
      </div>
    </header>
    <main class="relative top-[47px]">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

defineOptions({ name: 'AdminLayout' });

const isMobile = window.innerWidth < 700;

</script>
