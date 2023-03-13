import { getBlogById } from '$lib/api/schemas';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	return await getBlogById(params.slug);
};

export const prerender = false;
