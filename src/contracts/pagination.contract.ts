export interface Pagination<T> {
	items: Array<T>;
	meta: { currentPage: number; totalPages: number; itemCount: number; totalItems: number };
}
