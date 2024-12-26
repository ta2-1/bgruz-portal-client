<template>
	<div class="w-full">
		<div
			class="flex gap-[6px] items-center mb-[6px] cursor-pointer select-none"
			@click="toggle"
		>
			<p class="text-[12px] text-[#cccccc] capitalize">{{ name }}</p>
			<Icon
				v-if="collapsed"
				:icon="isCollapse ? 'tabler:chevron-right' : 'tabler:chevron-down'"
				class="text-[#cccccc]"
			/>
		</div>

		<slot v-if="!isCollapse" />
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineOptions({ name: 'ZLabel' });
const props = defineProps({
	name: { type: String, required: true },
	collapsed: { type: Boolean, default: false },
	defaultCollapsed: { type: Boolean, default: false },
});

const isCollapse = ref(props.defaultCollapsed);

const toggle = () => {
	if (!props.collapsed) return;
	isCollapse.value = !isCollapse.value;
};
</script>
