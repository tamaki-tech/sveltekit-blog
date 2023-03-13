<script lang="ts">
	import '../app.css';
	import '$lib/css/global.css';
	import DarkModeToggleButton from '$lib/components/DarkModeToggleButton.svelte';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/store';
	import { auth } from '$lib/auth/firebase';

	onMount(() => {
		auth.onAuthStateChanged((user) => {
			authStore.set({
				isLoggedIn: user !== null,
				user: user ?? undefined, // TODO refactor
				firebaseControlled: true
			});
		});
	});
</script>

<DarkModeToggleButton />

<slot />
