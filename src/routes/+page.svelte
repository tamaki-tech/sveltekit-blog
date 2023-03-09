<script lang="ts">
	import type { PageData } from './$types';
	import { List, Li, Heading, A } from 'flowbite-svelte';

	export let data: PageData;
</script>

<section class=" p-20">
	<Heading customSize="text-3xl">Travel Logs</Heading>
	<List tag="ul" class="space-y-1">
		{#each data.contents as travel}
			<Li>
				<A href={travel.id}>{travel.name}</A>
			</Li>
		{/each}
	</List>
</section>
