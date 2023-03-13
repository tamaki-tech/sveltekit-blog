<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore, type AuthStoreType } from '$lib/store';
	import { onDestroy } from 'svelte';

	let userInfo: AuthStoreType;

	const unsbscribe = authStore.subscribe(async (user) => {
		console.log('login', user);
		if (user.isLoggedIn) return await goto('/blog');
		userInfo = user;
	});

	onDestroy(() => {
		unsbscribe();
	});
</script>

{#if userInfo && !userInfo.isLoggedIn}
	<div class="h-screen w-screen flex justify-center items-center">
		<slot />
	</div>
{/if}
