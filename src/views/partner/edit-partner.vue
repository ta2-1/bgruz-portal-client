<template>
  <ADrawer v-model:open="isOpenEdit" :width="620" title="Edit">
    <PartnerForm />

    <template #extra>
      <a-space>
        <a-button @click="store.toggleEdit()">Отмена</a-button>
        <a-button type="primary" @click="store.update()">Сохранить</a-button>
      </a-space>
    </template>
  </ADrawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePartnerStore } from '@/views/partner/use-partner.store';
import PartnerForm from '@/views/partner/partner-form.vue';


defineOptions({ name: 'EditPartner' });

const store = usePartnerStore();

const { isOpenEdit } = storeToRefs(store);
</script>

<style scoped></style>
