<template>
	<div
		class="flex px-[12px] py-[10px] items-center rounded-[6px] gap-[10px]"
		:class="[{ 'cursor-pointer  hover:bg-[#565656] ': clickable }]"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'MbLine' });

defineProps({
	clickable: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped></style>
