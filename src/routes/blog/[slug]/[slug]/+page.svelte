<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<article class="dark:text-white lg:w-2/3 w-full">
	<Heading customSize="text-3xl">{data.day}日目</Heading>
	<div>{@html data.content}</div>
</article>
