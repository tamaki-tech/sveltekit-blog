<script lang="ts">
	import type { PageServerData } from './$types';
	import { List, Li, Heading, A } from 'flowbite-svelte';
	import Link from '$lib/components/Link.svelte';

	export let data: PageServerData;
</script>

<Heading customSize="text-3xl">{data.travel.name}</Heading>
<List tag="ul" class="space-y-1">
	{#each data.blogs.contents as blog}
		<Li><Link href={`${data.travel.id}/${blog.id}`}>{blog.day}日目</Link></Li>
	{/each}
</List>
