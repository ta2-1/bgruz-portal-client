<template>
	<ADrawer v-model:open="isOpenCreate" :width="620" title="Create">
		<PartnerForm />

		<template #extra>
			<a-space>
				<a-button @click="store.toggleCreate()">Cancel</a-button>
				<a-button type="primary" @click="store.createItem()">Save</a-button>
			</a-space>
		</template>
	</ADrawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePartnerStore } from '@/views/partner/use-partner.store';
import PartnerForm from '@/views/partner/partner-form.vue';

defineOptions({ name: 'AddPartner' });

const store = usePartnerStore();
const { isOpenCreate } = storeToRefs(store);
</script>
