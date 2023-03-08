<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { Alert } from 'flowbite-svelte';

	export let data: PageData;
</script>

<section class="p-8">
	<Heading customSize="text-3xl">ブログ</Heading>
	<ul class="text-rose-500">
		{#each data.contents as content}
			<li><a href={content.id}>{content.title}</a></li>
		{/each}
	</ul>
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</section>
