<template>
  <div class="flex items-center">
    <AButton type="text" @click="open = true" class="flex justify-center items-center">
      <template #icon>
        <Icon icon="iconamoon:menu-burger-horizontal-fill" />
      </template>
    </AButton>
  </div>

  <ADrawer
    :open="open"
    @close="open = false"
    :closable="false"
    placement="left"
    :bodyStyle="{ padding: 0 }"
    :width="280"
  >
    <div class="flex w-full">
      <div class="p-[20px_0_10px_20px] w-full">
        <ADropdown trigger="click">
          <div
            class="flex items-center gap-[10px] p-[6px] hover:bg-[#000000] cursor-pointer justify-between rounded-md w-full"
          >
            <div class="flex items-center gap-[10px]">
              <p class="text-[14px] mb-0 font-semibold">Admin</p>
            </div>
            <Icon icon="ion-ios-arrow-down" />
          </div>
          <template #overlay>
            <MbDropdownContainer>
              <div class="text flex px-[12px] py-[10px] items-center justify-between">
                {{ userStore.currentUser?.login }}
              </div>
              <MbHr />
              <MbLine @click="logout" class="justify-between" clickable>
                <p class="text-[14px] text">Выход</p>
                <Icon icon="uil:signout" class="text-slate-500" />
              </MbLine>
            </MbDropdownContainer>
          </template>
        </ADropdown>
      </div>
      <div class="p-[10px]"></div>
    </div>
    <div class="px-[20px]">
      <router-link v-for="link in links" :key="link.name" :to="link.href">
        <MbLine class="text" clickable>
          <Icon :icon="link.icon" />
          <p class="text-[12px] text font-semibold">{{ link.name }}</p>
        </MbLine>
      </router-link>
    </div>
  </ADrawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';


import { useRouter } from 'vue-router';
import { useTokenService } from '@/composable/use-token-service';
import { useUserStore } from '@/stores/use-user.store';
import { Icon } from '@iconify/vue';

defineOptions({
  name: 'Sidebar',
});
const open = ref(false);


const router = useRouter();
const tokenService = useTokenService();
const userStore = useUserStore();

const links = computed(() => {
  return [
    { name: 'Заявки', icon: 'fluent:document-bullet-list-16-regular', href: '/bids' },
    { name: 'Заказы', icon: 'fluent:document-bullet-list-16-regular', href: '/orders' },
  ];
});

const logout = () => {
  router.push({ name: 'Login' });
  tokenService.removeAccessToken();
  tokenService.removeRefreshToken();
  userStore.clearUser();
};
</script>

<style lang="scss">
.ant-drawer-body {
  padding: 0;
}
</style>
