import { BaseApiService } from '@/service/api';
import type { CreateBidDto, BidPagination, Bid } from '@/models/manual-data-contracts';

class BidService extends BaseApiService {
	findAll(dto: any) {
		return this.request<BidPagination>({ url: 'search', method: 'post', requestBody: dto });
	}

	create(dto: CreateBidDto) {
		return this.request<Bid>({ url: '', method: 'post', requestBody: dto });
	}

	findOne(id: number) {
		return this.request<Bid>({ url: `${id}`, method: 'get' });
	}

	/*update(id: number, dto: UpdateBidDto) {
		return this.request({ url: `${id}`, method: 'patch', requestBody: dto });
	}*/
}

export default new BidService(`${import.meta.env.VITE_API_URL}/api`);