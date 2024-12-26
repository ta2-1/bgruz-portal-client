<template>
	<div>
		<ATable
			:dataSource="items"
			:columns="columns"
			rowKey="id"
			:pagination="false"
			:loading="isLoading"
		>
			<template #expandedRowRender="{ record }">
				<ExpandedRow :record="record" />
			</template>
			<template #bodyCell="{ column, text, record }">
				<template v-if="column.dataIndex === 'name'">
					<div class="flex gap-2">
						{{ record.name }}
					</div>
				</template>
				<template v-if="column.dataIndex === 'active'">
					<div class="flex gap-2">
						<ATag :color="record.active ? 'green' : 'gold'">
							{{ record.active ? 'Yes' : 'No' }}
						</ATag>
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
import { usePartnerStore } from '@/views/partner/use-partner.store';
import type { Partner } from '@/models/data-contracts';

import ExpandedRow from './expanded-row.vue';

const store = usePartnerStore();
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
		title: 'Regions',
		dataIndex: 'regionIds',
		key: 'regionIds',
	},
	{
		title: 'Alias',
		dataIndex: 'alias',
		key: 'alias',
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

const editItem = (item: Partner, isDuplicate = false) => {
	store.getById(item.id);
	store.setEdit(item.id, isDuplicate);
};
</script>
