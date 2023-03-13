import { signInWithEmailAndPassword, type UserCredential } from 'firebase/auth';
import { auth } from './firebase';

export const signIn = async (email: string, password: string): Promise<UserCredential> => {
	return await signInWithEmailAndPassword(auth, email, password);
};
