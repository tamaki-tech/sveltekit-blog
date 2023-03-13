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

	const signOut = () => {
		dispatch('signOut');
	};
</script>

<Sidebar {asideClass}>
	<SidebarWrapper divClass="overflow-hidden py-4 px-3 rounded dark:bg-gray-800">
		<SidebarGroup>
			<SidebarItem
				label="HOME"
				href="/blog"
				on:click={toggleSide}
				active={$page.url.pathname === '/blog'}
			/>
			{#each data.travels as travel}
				{#if travel.blogs.length > 0}
					<SidebarDropdownWrapper
						label={travel.name}
						isOpen={$page.url.pathname.includes(travel.id)}
					>
						{#each travel.blogs as blog}
							<SidebarItem
								spanClass="px-8"
								label={`${blog.day}日目`}
								href={`/blog/${travel.id}/${blog.id}`}
								on:click={toggleSide}
								active={$page.url.pathname === `/blog/${travel.id}/${blog.id}`}
							/>
						{/each}
					</SidebarDropdownWrapper>
				{:else}
					<SidebarItem label={travel.name} href={`/blog/${travel.id}`} on:click={toggleSide} />
				{/if}
			{/each}
			<SidebarItem label="LOGOUT" on:click={signOut} />
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
