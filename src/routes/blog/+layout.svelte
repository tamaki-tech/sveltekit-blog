<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/auth/firebase';
	import { authStore, type AuthStoreType } from '$lib/store';
	import { Navbar, NavHamburger, Drawer, CloseButton } from 'flowbite-svelte';
	import { onDestroy } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import Sidebar from './components/Sidebar.svelte';

	export let data: LayoutData;

	let width: number;
	let activateClickOutside = true;
	let drawerHidden = false;
	let userInfo: AuthStoreType;

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

	const signOut = async () => {
		await auth.signOut();
	};

	authStore.subscribe((user) => {
		console.log('blog', user);
		if (!user.isLoggedIn && user.firebaseControlled) return goto('/login');
		userInfo = user;
	});
</script>

<svelte:window bind:innerWidth={width} />

{#if userInfo && userInfo.isLoggedIn}
	<Navbar>
		<NavHamburger on:click={() => (drawerHidden = false)} btnClass="ml-3 lg:hidden" />
	</Navbar>

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

		<Sidebar asideClass="w-54" {data} on:click={toggleSide} on:signOut={signOut} />
	</Drawer>

	<div class="flex px-4 mx-auto w-full">
		<main class="lg:ml-72 w-full mx-auto">
			<section class="p-20 lg:p-16">
				<slot />
			</section>
		</main>
	</div>
{/if}