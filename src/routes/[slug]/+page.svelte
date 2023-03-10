<script lang="ts">
	import type { PageServerData } from './$types';
	import { List, Li, Heading } from 'flowbite-svelte';
	import Link from '$lib/components/Link.svelte';

	export let data: PageServerData;
</script>

<Heading customSize="text-3xl">{data.travelName}</Heading>
<List tag="ul" class="space-y-1">
	{#each data.blogs as blog}
		<Li><Link href={`${data.travelId}/${blog.id}`}>{blog.day}日目</Link></Li>
	{/each}
</List>
