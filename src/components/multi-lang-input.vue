<template>
	<div class="border border-[#4a4a4a] p-[10px] flex flex-col gap-[5px]">
		<p>{{ name }}</p>
		<div
			v-for="(item, index) in modelValue"
			:key="index"
			class="flex gap-[5px]"
		>
			<ASelect
				v-model:value="item.lang"
				:options="languages"
			/>
			<AInput
				v-model:value="item.name"
				placeholder="Name"
			/>
			<AButton @click="modelValue.splice(index, 1)">
				<Icon icon="ic:baseline-delete" />
			</AButton>
		</div>
		<div>
			<AButton
				:disabled="modelValue?.length === languages.length"
				@click="addLanguage"
			>
				<Icon icon="ic:baseline-add" />
			</AButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, type PropType } from 'vue';
import { Languages, type LocalizationName } from '@/models/data-contracts';

defineOptions({ name: 'MultiLangInput' });
const props = defineProps({
	name: { type: String, default: 'Name' },
	modelValue: { type: Array as PropType<LocalizationName[]>, default: () => [] },
});
const languages = computed(() => [...Object.values(Languages)].map((l) => ({ label: l, value: l })));

const emit = defineEmits(['update:modelValue']);

const addLanguage = () => {
	const availableLanguages = languages.value.filter((l) => !props.modelValue?.some((m) => m.lang === l.value));
	if (Array.isArray(props.modelValue)) {
		emit('update:modelValue', [...props.modelValue, { lang: availableLanguages[0].value, name: '' }]);
	} else {
		emit('update:modelValue', [{ lang: availableLanguages[0].value, name: '' }]);
	}
};
</script>

<style scoped></style>
