<script lang="ts">
	import type { PageData } from './$types';
	import { List, Li, Heading } from 'flowbite-svelte';
	import Link from '$lib/components/Link.svelte';

	export let data: PageData;
</script>

<Heading customSize="text-3xl">Travel Logs</Heading>
<List tag="ul" class="space-y-1">
	{#each data.contents as travel}
		<Li>
			<Link href={`${travel.id}`}>
				{travel.name}
			</Link>
		</Li>
	{/each}
</List>
