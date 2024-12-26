import { defineStore } from 'pinia';
import type { CreateProductDto, MetadataModel, Product, ProductsFilter } from '@/models/data-contracts';
import { computed, ref } from 'vue';
import { productService } from '@/service/product';

const defaultValue = (): CreateProductDto => ({
	name: '',
	description: '',
	bonus: '',
	partnerId: null,
	iconImage: '',
	active: false,
	categories: [],
	vkProductId: null,
	order: 0,
	type: null,
});

export const useProductStore = defineStore('products', () => {
	const metadata = ref<MetadataModel>({ currentPage: 0, itemCount: 0, itemsPerPage: 0, totalItems: 0, totalPages: 0 });
	const pagination = ref({ page: 1, limit: 15 });
	const activeItem = ref<Product | null>(null);
	const isOpenCreate = ref(false);
	const isOpenEdit = ref(false);
	const items = ref<Product[]>([]);
	const filter = ref<ProductsFilter>({ partnerId: null });
	const isLoading = ref(false);
	const listItems = ref<Product[]>([]);

	const itemForm = ref<CreateProductDto>(defaultValue());

	const getAll = async () => {
		try {
			isLoading.value = true;
			const { page, limit } = pagination.value;
			const data = await productService.findAll({ page, limit, filter: filter.value, search: '', order: null });
			items.value = data.items;
			metadata.value = data.meta;
		} catch (error) {
		} finally {
			isLoading.value = false;
		}
	};

	const getListItems = async () => {
		const data = await productService.findAll({ page: 1, limit: 1000, filter: {} });
		listItems.value = data.items;
	};

	const toggleCreate = (parentId?: number) => {
		if (!isOpenCreate.value) {
			itemForm.value = defaultValue();
		}
		isOpenCreate.value = !isOpenCreate.value;
    if (parentId) {
      itemForm.value.partnerId = parentId
    }
	};

	const toggleEdit = () => {
		isOpenEdit.value = !isOpenEdit.value;
	};

	const getById = async (id: number) => {
		const data = await productService.findOne(id);
		activeItem.value = data;
		return data;
	};

	const createItem = async (cb?: () => void) => {
		const data = await productService.create(itemForm.value);
		items.value.push(data);
		toggleCreate();
    if (cb) {
      cb();
    }
	};

	const update = async (cb?: () => void) => {
		const data = await productService.update(activeItem.value.id, itemForm.value);
		isOpenEdit.value = false;
    if (cb) {
      cb();
    } else {
      getAll();
    }
	};

	const setEdit = async (id: number, isDuplicate = false) => {
		const data = await productService.findOne(id);
		activeItem.value = data;
		itemForm.value = {
			name: data.name,
			description: data.description,
			bonus: data.bonus,
			partnerId: data.partnerId,
			iconImage: data.iconImage,
			active: data.active,
			categories: data.categories,
			vkProductId: data.vkProductId,
			order: data.order,
			type: data.type,
		};
		if (isDuplicate) {
			isOpenCreate.value = true;
		} else {
			toggleEdit();
		}
	};

	const deleteItem = async (id: number) => {
		await productService.delete(id);
		items.value = items.value.filter((item) => item.id !== id);
	};

	const options = computed(() =>
		listItems.value.map((item) => ({
			label: `${item.id} - ${item.name}`,
			value: item.id,
		})),
	);

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
		deleteItem,
		itemForm,
		isLoading,
		getListItems,
		filter,
		options,
	};
});
