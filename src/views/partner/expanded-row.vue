<template>
	<ACollapse
		v-if="partner"
		v-model:activeKey="activeKey"
	>
		<ACollapsePanel
			key="1"
			header="Content"
		>
		</ACollapsePanel>
	</ACollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Partner } from '@/models/data-contracts';
import { partnerService } from '@/service/partner';

defineOptions({ name: 'ExpandedRow' });

const props = defineProps({ record: { type: Object, required: true } });

const partner = ref<Partner>(null);

const getProduct = async () => {
	const data = await partnerService.findOne(props.record.id);
	partner.value = data;
};

getProduct();

const activeKey = ref([]);
</script>
