<template>
	<div class="flex flex-col gap-[20px]">
		<ZLabel
			class="flex flex-col gap-[3px]"
			name="Partner"
		>
			<ASelect
				v-model:value="itemForm.partnerId"
				:disabled="disabledParent"
				:options="partnerOptions"
				placeholder="Partner"
			/>
		</ZLabel>
		<ZLabel
			class="flex flex-col gap-[3px]"
			name="Type"
		>
			<ASelect
				v-model:value="itemForm.type"
				:options="typeOptions"
				placeholder="type"
			/>
		</ZLabel>
		<ZLabel name="Active">
			<ASwitch v-model:checked="itemForm.active" />
		</ZLabel>
		<ZLabel name="Name">
			<AInput
				v-model:value="itemForm.name"
				placeholder="Name"
			/>
		</ZLabel>
		<ZLabel name="Description">
			<ATextarea v-model:modelValue="itemForm.description" />
		</ZLabel>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ZLabel from '@/components/z-label.vue';
import { usePartnerStore } from '@/views/partner/use-partner.store';
import { useProductStore } from '@/views/products/use-products.store';
import { typeOptions } from '@/utils/options';

defineProps({
	disabledParent: { type: Boolean, default: false },
});

const store = useProductStore();
const { itemForm } = storeToRefs(store);

const partnerStore = usePartnerStore();
const { options: partnerOptions } = storeToRefs(partnerStore);
</script>
