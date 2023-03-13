import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

export const authStore = writable<{
	isLoggedIn: boolean;
	user?: User;
	firebaseControlled: boolean;
}>({
	isLoggedIn: false,
	firebaseControlled: false
});
