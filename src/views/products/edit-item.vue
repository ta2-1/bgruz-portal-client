<template>
  <ADrawer v-model:open="isOpenEdit" :width="620" title="Edit">
    <ItemForm :disabledParent />

    <template #extra>
      <a-space>
        <a-button @click="store.toggleEdit()">Cancel</a-button>
        <a-button type="primary" @click="store.update(cb)">Save</a-button>
      </a-space>
    </template>
  </ADrawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ItemForm from './item-form.vue';
import { useProductStore } from '@/views/products/use-products.store';
import type { PropType } from 'vue';


defineOptions({ name: 'EditItem' });

defineProps({
  disabledParent: { type: Boolean, default: false },
  cb: { type: Function as PropType<() => void>, default: null },
});

const store = useProductStore();

const { isOpenEdit } = storeToRefs(store);
</script>
