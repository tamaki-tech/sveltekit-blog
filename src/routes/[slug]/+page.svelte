<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex flex-col justify-center items-center">
	<h1>{data.title}</h1>
	<img src={data.eyecatch?.url} alt="" />
	<div>{@html data.content}</div>
</section>
