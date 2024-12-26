/* eslint-disable */
/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export interface Order {
	/**
	 * order
	 * @example "id"
	 */
	key: string;
	/** order */
	value: OrderValueEnum;
}

export enum ProductType {}



export enum ProviderContent {}

export interface MetadataModel {
	totalItems: number;
	itemCount: number;
	itemsPerPage: number;
	totalPages: number;
	currentPage: number;
}

export interface ProductsFilter {
	partnerId?: string;
}

export interface ProductsSearch {
	/**
	 * page
	 * @min 1
	 * @default 1
	 */
	page: number;
	/**
	 * limit
	 * @min 1
	 * @default 25
	 */
	limit: number;
	/**
	 * search
	 * @min 1
	 * @default ""
	 */
	search?: string;
	/** order */
	order?: Order;
	filter?: ProductsFilter;
}

export enum Languages {}




export interface Partner {
	id: number;
	name: string;
	alias: string;
	regionId: number;
	regionIds: number[];
	iconImage: string;
	posterImage: string;
	active: boolean;
	bigProductCard: boolean;
	order: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	products: Product[];
	vkAlbumId: string;
	categories: string[];
	excludePayments: string[];
}

export interface Product {
	id: number;
	type: ProductType;
	partnerId: number;
	partner: Partner;
	name: string;
	description: string;
	bonus: string;
	iconImage: string;
	active: boolean;
	vkProductId: string;
	order: number;
	categories: string[];
}

export interface ProductPagination {
	/** A list of transactions */
	items: Product[];
	/** Pagination metadata */
	meta: MetadataModel;
}

export interface UpdateProductDto {
	name?: string;
	vkProductId?: string;
	order?: number;
	categories?: string[];
	type?: ProductType;
	partnerId?: number;
	description?: string;
	bonus?: string;
	iconImage?: string;
	active?: boolean;
}

export interface CreateProductDto {
	name: string;
	vkProductId: string;
	order: number;
	categories: string[];
	type: ProductType;
	partnerId: number;
	description: string;
	bonus: string;
	iconImage: string;
	active: boolean;
}

export interface LocalizationName {
	lang: Languages;
	name: string;
}

export interface PartnerPagination {
	/** A list of transactions */
	items: Partner[];
	/** Pagination metadata */
	meta: MetadataModel;
}

export interface UpdatePartnerDto {
	name?: string;
	alias?: string;
	regionId?: number;
	regionIds?: number[];
	iconImage?: string;
	posterImage?: string;
	active?: boolean;
	bigProductCard?: boolean;
	order?: number;
	categories?: string[];
	vkAlbumId?: string;
}

export interface CreatePartnerDto {
	name: string;
	alias: string;
	regionId: number;
	regionIds: number[];
	iconImage: string;
	posterImage: string;
	active: boolean;
	bigProductCard: boolean;
	order: number;
	categories: string[];
	vkAlbumId: string;
}

/** order */
export enum OrderValueEnum {}

export interface User {
	name: string;
}

