import { getTravels } from '../lib/api/schemas';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return await getTravels();
};

export const prerender = 'auto';
