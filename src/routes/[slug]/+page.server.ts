import { getBlogsByTravelId, getTravelById, type Travel } from '$lib/api/schemas';
import type { PageServerLoad } from './$types';

type BlogListPageData = {
	travel: Travel;
	blogs: {
		id: string;
		day: number;
	}[];
};

export const load: PageServerLoad = async ({ params }): Promise<BlogListPageData> => {
	// TODO refactor
	const travel = await getTravelById(params.slug);
	const blogs = await (
		await getBlogsByTravelId(params.slug)
	).contents.map((c) => {
		return { id: c.id, day: c.day };
	});
	return {
		travel,
		blogs
	};
};

export const prerender = 'auto';
