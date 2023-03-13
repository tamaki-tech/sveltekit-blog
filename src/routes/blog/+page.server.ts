import { getTravels } from '$lib/api/schemas';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return await getTravels();
};

export const prerender = false;
