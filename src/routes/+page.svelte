<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex flex-col justify-center items-center">
	<h1>ブログ</h1>
	<ul class="text-rose-500">
		{#each data.contents as content}
			<li><a href={content.id}>{content.title}</a></li>
		{/each}
	</ul>
</section>
