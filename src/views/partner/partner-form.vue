<template>
	<div class="flex flex-col gap-[20px]">
		<div class="flex flex-col gap-[3px]">
			<p>Name</p>
			<AInput
				v-model:value="itemForm.name"
				placeholder="Name"
			/>
		</div>
		<ZLabel
			class="flex flex-col gap-[3px]"
			name="Regions IDS"
		>
			<ASelect
				v-model:value="itemForm.regionIds"
				:options="optionsRegions"
				mode="multiple"
				placeholder="Alias"
			/>
		</ZLabel>
		<ZLabel
			class="flex flex-col gap-[3px]"
			name="Categories"
		>
			<ASelect
				v-model:value="itemForm.categories"
				:options="options"
				mode="multiple"
				placeholder="Categories "
			/>
		</ZLabel>
		<div>
			<p>Active</p>
			<ASwitch
				v-model:checked="itemForm.active"
				placeholder="Poster image"
				class="flex-shrink-0"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePartnerStore } from '@/views/partner/use-partner.store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = usePartnerStore();
const { itemForm } = storeToRefs(store);

const options = computed(() => []);

const optionsRegions = computed(() => []);
</script>
