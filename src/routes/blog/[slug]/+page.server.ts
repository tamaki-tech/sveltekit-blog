import { getBlogsByTravelId, getTravelById } from '$lib/api/schemas';
import type { PageServerLoad } from './$types';

type blogListPageData = {
	travelId: string;
	travelName: string;
	blogs: {
		id: string;
		day: number;
	}[];
};

export const load: PageServerLoad = async ({ params }): Promise<blogListPageData> => {
	const travel = await getTravelById(params.slug);
	const blogs = await getBlogsByTravelId(params.slug);

	return {
		travelId: travel.id,
		travelName: travel.name,
		blogs: blogs.contents.map((content) => {
			return {
				id: content.id,
				day: content.day
			};
		})
	};
};

export const prerender = false;
