<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<article class=" dark:text-white">
	<Heading customSize="text-3xl">{data.day}日目</Heading>
	<div>{@html data.content}</div>
</article>
