<script lang="ts">
	import type { PageData } from './$types';
	import { Alert } from 'flowbite-svelte';

	export let data: PageData;
</script>

<section class="flex flex-col justify-center items-center">
	<h1>ブログ</h1>
	<ul class="text-rose-500">
		{#each data.contents as content}
			<li><a href={content.id}>{content.title}</a></li>
		{/each}
	</ul>
	<div class="p-8">
		<Alert>
			<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
		</Alert>
	</div>
</section>
