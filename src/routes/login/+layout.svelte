<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/store';
	import { onDestroy } from 'svelte';

	const unsbscribe = authStore.subscribe((info) => {
		if (info.isLoggedIn) {
			goto('/blog');
		}
	});

	onDestroy(() => {
		unsbscribe();
	});
</script>

<div class="h-screen w-screen flex justify-center items-center">
	<slot />
</div>
