<template>
	<ACollapse
		v-if="product"
		v-model:activeKey="activeKey"
	>
		<ACollapsePanel
			key="1"
			header="Content"
		>
		</ACollapsePanel>
		<ACollapsePanel
			key="2"
			header="Price"
		>
		</ACollapsePanel>
		<ACollapsePanel
			key="3"
			header="Providers"
		>
		</ACollapsePanel>
	</ACollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '@/models/data-contracts';
import { productService } from '@/service/product';

defineOptions({ name: 'ExpandedRow' });

const props = defineProps({ record: { type: Object, required: true } });

const product = ref<Product>(null);

const getProduct = async () => {
	const data = await productService.findOne(props.record.id);
	product.value = data;
};

getProduct();

const activeKey = ref([]);
</script>
