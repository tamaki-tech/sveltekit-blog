import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

export type AuthStoreType = {
	isLoggedIn: boolean;
	user?: User;
	firebaseControlled: boolean;
};

export const authStore = writable<AuthStoreType>({
	isLoggedIn: false,
	firebaseControlled: false
});
