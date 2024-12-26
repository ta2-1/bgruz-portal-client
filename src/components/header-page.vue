<template>
	<div class="container px-[20px] py-[10px]">
		<div class="flex justify-between">
			<div class="flex items-center gap-[20px]">
				<p class="text-[16px] font-bold">{{ name }}</p>
			</div>

			<div class="flex gap-[12px]">
				<slot />

				<AButton
					v-if="isRefresh"
					@click="$emit('refresh')"
				>
					<Icon icon="material-symbols:refresh" />
				</AButton>
				<AButton
					:disabled="disabledCreate"
					type="primary"
					@click="$emit('create')"
				>
					<Icon icon="ant-design:plus-outlined" />
				</AButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineOptions({ name: 'HeaderPage' });
const {
	name = 'Page',
	isRefresh = false,
	disabledCreate = false,
} = defineProps<{
	name?: string;
	isRefresh?: boolean;
	disabledCreate?: boolean;
}>();
</script>
