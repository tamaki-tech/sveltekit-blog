<script lang="ts">
	import {
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from '../$types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let data: LayoutData;
	export let asideClass = '';

	const toggleSide = () => {
		dispatch('click');
	};
</script>

<Sidebar {asideClass}>
	<SidebarWrapper divClass="overflow-hidden py-4 px-3 rounded dark:bg-gray-800">
		<SidebarGroup>
			<SidebarItem
				label="HOME"
				href="/"
				on:click={toggleSide}
				active={$page.url.pathname === '/'}
			/>
			{#each data.travels as travel}
				{#if travel.blogs.length > 0}
					<SidebarDropdownWrapper
						label={travel.name}
						isOpen={$page.url.pathname.includes(travel.id)}
						active={$page.url.pathname === `/${travel.id}`}
					>
						{#each travel.blogs as blog}
							<SidebarItem
								spanClass="px-8"
								label={`${blog.day}日目`}
								href={`/blog/${travel.id}/${blog.id}`}
								on:click={toggleSide}
								active={$page.url.pathname === `/${travel.id}/${blog.id}`}
							/>
						{/each}
					</SidebarDropdownWrapper>
				{:else}
					<SidebarItem
						label={travel.name}
						href={`/blog/${travel.id}`}
						on:click={toggleSide}
						active={$page.url.pathname === `/${travel.id}`}
					/>
				{/if}
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
