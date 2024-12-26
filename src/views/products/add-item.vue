<template>
	<ADrawer v-model:open="isOpenCreate" :width="620" title="Create">
		<ItemForm :disabledParent />

		<template #extra>
			<a-space>
				<a-button @click="store.toggleCreate()">Cancel</a-button>
				<a-button type="primary" @click="store.createItem(cb)">Save</a-button>
			</a-space>
		</template>
	</ADrawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ItemForm from './item-form.vue';
import { useProductStore } from '@/views/products/use-products.store';
import type { PropType } from 'vue';

defineOptions({ name: 'AddItem' });

defineProps({
  disabledParent: { type: Boolean, default: false },
  cb: { type: Function as PropType<() => void>, default: null },
});

const store = useProductStore();
const { isOpenCreate } = storeToRefs(store);
</script>
