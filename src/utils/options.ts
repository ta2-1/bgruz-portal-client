import { computed } from 'vue';
import { ProductType, ProviderContent } from '@/models/data-contracts';

export const providersOptions = computed(() =>
	[...Object.values(ProviderContent)].map((l) => ({
		label: l,
		value: l,
	})),
);


export const typeOptions = computed(() =>
  [...Object.values(ProductType)].map((l) => ({
    label: l,
    value: l,
  })),
);
