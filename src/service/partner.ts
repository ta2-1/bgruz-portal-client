import { BaseApiService } from '@/service/api';
import type { CreatePartnerDto, Partner, PartnerPagination, UpdatePartnerDto } from '@/models/data-contracts';

class PartnerService extends BaseApiService {
	findAll(dto: any) {
		return this.request<PartnerPagination>({ url: 'search', method: 'post', requestBody: dto });
	}

	create(dto: CreatePartnerDto) {
		return this.request<Partner>({ url: '', method: 'post', requestBody: dto });
	}

	findOne(id: number) {
		return this.request<Partner>({ url: `${id}`, method: 'get' });
	}

	update(id: number, dto: UpdatePartnerDto) {
		return this.request<Partner>({ url: `${id}`, method: 'patch', requestBody: dto });
	}
}

export const partnerService = new PartnerService('admin/partner');
