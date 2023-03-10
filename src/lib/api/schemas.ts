import type { MicroCMSImage, MicroCMSQueries } from 'microcms-js-sdk';
import { client } from './client';

export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	travel: Travel;
	day: number;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
};
export type BlogResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};

export type Travel = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
};

export type TravelResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Travel[];
};

export const getBlogs = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: 'blogs', queries });
};

export const getBlogById = async (blogId: string) => {
	return await client.get<Blog>({ endpoint: 'blogs', contentId: blogId });
};

export const getBlogsByTravelId = async (travelId: string) => {
	return await client.get<BlogResponse>({
		endpoint: 'blogs',
		queries: { filters: `travel[equals]${travelId}` }
	});
};

export const getTravels = async (queries?: MicroCMSQueries) => {
	return await client.get<TravelResponse>({ endpoint: 'travels', queries });
};

export const getTravelById = async (travelId: string) => {
	return await client.get<Travel>({
		endpoint: 'travels',
		contentId: travelId
	});
};
