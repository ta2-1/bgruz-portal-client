import { BaseApiService } from '@/service/api';
import type {
  CreateProductDto,
  Product,
  ProductPagination,
  UpdateProductDto,
  ProductsSearch
} from '@/models/data-contracts';

class ProductService extends BaseApiService {
	findAll(dto: ProductsSearch) {
		return this.request<ProductPagination>({ url: 'search', method: 'post', requestBody: dto });
	}

	create(dto: CreateProductDto) {
		return this.request<Product>({ url: '', method: 'post', requestBody: dto });
	}

	findOne(id: number) {
		return this.request<Product>({ url: `${id}`, method: 'get' });
	}

	update(id: number, dto: UpdateProductDto) {
		return this.request<Product>({ url: `${id}`, method: 'patch', requestBody: dto });
	}

  delete(id: number) {
    return this.request<Product>({ url: `${id}`, method: 'delete' });
  }
}

export const productService = new ProductService('admin/product');
