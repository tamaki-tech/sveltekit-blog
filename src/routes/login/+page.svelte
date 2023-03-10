<script lang="ts">
	import { Card, Heading, Input, Label, Button } from 'flowbite-svelte';
</script>

<Card class="w-96">
	<Heading customSize="text-2xl" class="mb-2">Login</Heading>
	<div class="mb-6">
		<Label for="email" class="mb-2">Your email</Label>
		<Input type="email" id="email" placeholder="john.doe@example.com" required />
	</div>
	<div class="mb-6">
		<Label for="password" class="mb-2">Your password</Label>
		<Input type="password" id="password" placeholder="•••••••••" required />
	</div>
	<div class="my-4">
		<Button class="w-full" href="/blog">Login</Button>
	</div>
</Card>
