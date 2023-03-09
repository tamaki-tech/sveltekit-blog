<script lang="ts">
	import type { PageServerData } from './$types';
	import { List, Li, Heading } from 'flowbite-svelte';

	export let data: PageServerData;
</script>

<section class=" p-20">
	<Heading customSize="text-3xl">{data.travel.name}</Heading>
	<List tag="ul" class="space-y-1">
		{#each data.blogs.contents as blog}
			<Li>{blog.day}日目</Li>
		{/each}
	</List>
</section>
