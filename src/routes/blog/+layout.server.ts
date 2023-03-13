import { getBlogsByTravelId, getTravels } from '$lib/api/schemas';
import type { LayoutServerLoad } from './$types';

type SidebarPageData = {
	travels: {
		id: string;
		name: string;
		blogs: {
			id: string;
			day: number;
		}[];
	}[];
};

export const load: LayoutServerLoad = async (): Promise<SidebarPageData> => {
	const travels = await getTravels();
	return {
		travels: await Promise.all(
			travels.contents.map(async (travel) => {
				const blogs = await getBlogsByTravelId(travel.id);
				return {
					id: travel.id,
					name: travel.name,
					blogs: blogs.contents.map((blog) => {
						return {
							id: blog.id,
							day: blog.day
						};
					})
				};
			})
		)
	};
};

export const prerender = false;
