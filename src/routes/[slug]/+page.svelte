<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-8 dark:text-white">
	<Heading customSize="text-3xl">{data.title}</Heading>
	<Img src={data.eyecatch?.url} alt="" imgClass="py-4" />
	<div>{@html data.content}</div>
</section>
