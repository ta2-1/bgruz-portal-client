import { Languages, type LocalizationName } from '@/models/data-contracts';
import { computed } from 'vue';

export const translate = (arr: LocalizationName[], lang: Languages) => {
  return arr.find(t => t.lang === lang)?.name ?? '';
};


export const languages = computed(() => [...Object.values(Languages)].map((l) => ({ label: l, value: l })));
