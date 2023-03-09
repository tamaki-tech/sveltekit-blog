import {
	getBlogsByTravelId,
	getTravelById,
	type BlogResponse,
	type Travel
} from '$lib/api/schemas';
import type { PageServerLoad } from './$types';

type blogListPageData = {
	travel: Travel;
	blogs: BlogResponse;
};

export const load: PageServerLoad = async ({ params }): Promise<blogListPageData> => {
	const travel = await getTravelById(params.slug);
	const blogs = await getBlogsByTravelId(params.slug);
	return {
		travel,
		blogs
	};
};

export const prerender = false;
