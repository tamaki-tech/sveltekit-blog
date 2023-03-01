import { getList } from '../lib/api/schemas';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await getList();
};

export const prerender = true;
