<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1>{data.title}</h1>
	<img src={data.eyecatch?.url} alt="" />
	<div>{@html data.content}</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
