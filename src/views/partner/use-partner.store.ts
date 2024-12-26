import { defineStore } from 'pinia';
import type { CreatePartnerDto, MetadataModel, Partner } from '@/models/data-contracts';
import { computed, ref } from 'vue';
import { partnerService } from '@/service/partner';

const defaultValue = (): CreatePartnerDto => ({
	name: '',
	active: false,
	alias: '',
	posterImage: '',
	iconImage: '',
	bigProductCard: false,
	regionIds: [],
	order: 0,
	categories: [],
	regionId: null,
	vkAlbumId: null,
});

export const usePartnerStore = defineStore('partner', () => {
	const metadata = ref<MetadataModel>({ currentPage: 0, itemCount: 0, itemsPerPage: 0, totalItems: 0, totalPages: 0 });
	const pagination = ref({ page: 1, limit: 15 });
	const activeItem = ref<Partner | null>(null);
	const isOpenCreate = ref(false);
	const isOpenEdit = ref(false);
	const items = ref([]);
	const isLoading = ref(false);

	const listItems = ref<Partner[]>([]);

	const itemForm = ref<CreatePartnerDto>(defaultValue());

	const getAll = async () => {
		try {
			isLoading.value = true;
			const { page, limit } = pagination.value;
			const data = await partnerService.findAll({ page, limit, filter: {} });
			items.value = data.items;
			metadata.value = data.meta;
		} catch (error) {
		} finally {
			isLoading.value = false;
		}
	};

	const getListItems = async () => {
		const data = await partnerService.findAll({ page: 1, limit: 1000, filter: {} });
		listItems.value = data.items;
	};

	const toggleCreate = () => {
		if (!isOpenCreate.value) {
			itemForm.value = defaultValue();
		}
		isOpenCreate.value = !isOpenCreate.value;
	};

	const toggleEdit = () => {
		isOpenEdit.value = !isOpenEdit.value;
	};

	const getById = async (id: number) => {
		const data = await partnerService.findOne(id);
		activeItem.value = data;
		return data;
	};

	const createItem = async () => {
		const data = await partnerService.create(itemForm.value);
		items.value.push(data);
		toggleCreate();
	};

	const update = async () => {
		const data = await partnerService.update(activeItem.value.id, itemForm.value);
		isOpenEdit.value = false;
	};

	const setEdit = async (id: number, isDuplicate = false) => {
		const data = await partnerService.findOne(id);
		itemForm.value = {
			name: data.name,
			alias: data.alias,
			active: data.active,
			posterImage: data.posterImage,
			iconImage: data.iconImage,
			bigProductCard: data.bigProductCard,
			regionIds: data.regionIds,
			order: data.order,
			categories: data.categories,
			regionId: data.regionId,
			vkAlbumId: data.vkAlbumId,
		};
		if (isDuplicate) {
			toggleCreate();
		} else {
			toggleEdit();
		}
	};

	const options = computed(() => []);

	return {
		metadata,
		pagination,
		setEdit,
		getById,
		getAll,
		items,
		isOpenCreate,
		toggleCreate,
		isOpenEdit,
		createItem,
		update,
		activeItem,
		toggleEdit,
		itemForm,
		options,
		getListItems,
		isLoading,
	};
});
