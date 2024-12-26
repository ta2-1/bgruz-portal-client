<template>
	<AdminLayout>
		<template #left>
			<p class="text-[14px]">Partner</p>
		</template>
		<AddPartner />
		<EditPartner />
		<HeaderPage
			name="Partner"
			@create="partnerStore.toggleCreate()"
			@refresh="partnerStore.getAll()"
		/>
		<PartnerTable />
	</AdminLayout>
</template>

<script setup lang="ts">
import { usePartnerStore } from '@/views/partner/use-partner.store';
import PartnerTable from '@/views/partner/partner-table.vue';
import AddPartner from '@/views/partner/add-partner.vue';
import EditPartner from '@/views/partner/edit-partner.vue';
import HeaderPage from '@/components/header-page.vue';

const partnerStore = usePartnerStore();
partnerStore.getAll();
</script>

<style scoped></style>
