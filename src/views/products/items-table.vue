<template>
	<div>
		<ATable
			:dataSource="items"
			:columns="columns"
			rowKey="id"
			:loading="isLoading"
			:pagination="false"
		>
			<template #expandedRowRender="{ record }">
				<ExpandedRow :record="record" />
			</template>
			<template #bodyCell="{ column, text, record }">
				<template v-if="column.dataIndex === 'active'">
					<div class="flex gap-2">
						<ATag :color="record.active ? 'green' : 'gold'">
							{{ record.active ? 'Yes' : 'No' }}
						</ATag>
					</div>
				</template>
				<template v-if="column.dataIndex === 'partner'">
					<div class="flex gap-2">
						{{ record.partner.name }}
					</div>
				</template>
				<template v-if="column.dataIndex === 'operation'">
					<AButton
						@click="editItem(record)"
						size="small"
					>
						<Icon icon="ic:outline-edit" />
					</AButton>
					<AButton
						@click="editItem(record, true)"
						size="small"
					>
						<Icon icon="tabler:copy-plus" />
					</AButton>
<!--					<APopconfirm-->
<!--						ok-text="Yes"-->
<!--						cancel-text="No"-->
<!--						title="Вы точно уверены?"-->
<!--						@confirm="deleteItem(record)"-->
<!--					>-->
<!--						<AButton size="small">-->
<!--							<Icon icon="tabler:trash" />-->
<!--						</AButton>-->
<!--					</APopconfirm>-->
				</template>
			</template>
		</ATable>
		<div class="flex justify-end my-[20px]">
			<APagination
				v-model:current="pagination.page"
				v-model:pageSize="pagination.limit"
				@update:current="store.getAll()"
				@update:pageSize="store.getAll()"
				show-size-changer
				:total="metadata.totalItems"
				@showSizeChange="store.getAll()"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { type Product } from '@/models/data-contracts';
import { useProductStore } from '@/views/products/use-products.store';
import ExpandedRow from './expanded-row.vue';

const store = useProductStore();
const { items, metadata, pagination, isLoading } = storeToRefs(store);

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Partner',
		dataIndex: 'partner',
		key: 'partner',
	},
	{
		title: 'Active',
		dataIndex: 'active',
		key: 'active',
	},
	{
		title: 'Actions',
		dataIndex: 'operation',
	},
];

const editItem = (item: Product, isDuplicate = false) => {
	store.setEdit(item.id, isDuplicate);
};

const deleteItem = (item: Product) => {
	store.deleteItem(item.id);
};
</script>
