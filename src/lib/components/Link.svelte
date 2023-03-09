<script lang="ts">
	import { A } from 'flowbite-svelte';

	export let href: string;
</script>

<A
	textColor="text-gray-500 dark:text-gray-400 dark:hover:text-white"
	aClass="inline-flex justify-center items-center p-2 rounded-lg text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
	{href}
>
	<slot />
</A>
