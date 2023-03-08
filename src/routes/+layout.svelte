<script lang="ts">
	import '../app.css';
	import '$lib/css/global.css';
	import { page } from '$app/stores';
	import {
		DarkMode,
		Navbar,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let width: number;
	let activateClickOutside = true;
	let drawerHidden = false;

	const breakPoint = 1024;

	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};

	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
</script>

<svelte:window bind:innerWidth={width} />

<Navbar>
	<NavHamburger on:click={() => (drawerHidden = false)} btnClass="ml-3 lg:hidden" />
</Navbar>

<DarkMode
	class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50"
/>

<Drawer
	transitionType="fly"
	backdrop={false}
	transitionParams={{
		x: -320,
		duration: 200,
		easing: sineIn
	}}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32 bg-zinc-50"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-hidden py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem
					label="Home"
					href="/"
					on:click={toggleSide}
					active={$page.url.pathname === `/`}
				/>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
