<script lang="ts">
	import { Card, Heading, Input, Label, Button } from 'flowbite-svelte';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/auth/firebase';
	import { authStore } from '$lib/store';

	let email = '';
	let password = '';

	const signIn = async () => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			authStore.set({ ...$authStore, isLoggedIn: true, user: res.user });
		} catch (e) {
			console.log(e);
		}
	};
</script>

<Card class="w-96">
	<form class="flex flex-col space-y-4" action="#" on:submit={signIn}>
		<Heading customSize="text-2xl">Login</Heading>
		<div class="mb-6">
			<Label for="email" class="mb-2">Your email</Label>
			<Input
				type="email"
				id="email"
				placeholder="john.doe@example.com"
				required
				bind:value={email}
			/>
		</div>
		<div class="mb-6">
			<Label for="password" class="mb-2">Your password</Label>
			<Input type="password" id="password" placeholder="•••••••••" required bind:value={password} />
		</div>
		<div class="my-4">
			<Button type="submit" class="w-full">Login</Button>
		</div>
	</form>
</Card>
