<template>
	<AdminLayout>
		<template #left>
			<p class="text-[14px]">Products</p>
		</template>
		<AddItem />
		<EditItem />
		<HeaderPage
			name="Products"
			@create="store.toggleCreate()"
		>
			<ASelect
				class="w-[300px]"
				v-model:value="filter.partnerId"
				allow-clear
				show-search
				:options="options"
				:filterOption="filterOption"
				placeholder="Partner"
				@change="store.getAll()"
			/>
		</HeaderPage>
		<ItemsTable />
	</AdminLayout>
</template>

<script setup lang="ts">
import HeaderPage from '@/components/header-page.vue';
import AddItem from './add-item.vue';
import ItemsTable from './items-table.vue';
import EditItem from './edit-item.vue';
import { usePartnerStore } from '@/views/partner/use-partner.store';
import { useProductStore } from '@/views/products/use-products.store';
import { storeToRefs } from 'pinia';

const store = useProductStore();
const { filter } = storeToRefs(store);
store.getAll();

const partner = usePartnerStore();
partner.getListItems();
const { options } = storeToRefs(partner);

const filterOption = (input: string, option: any) => {
	return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
