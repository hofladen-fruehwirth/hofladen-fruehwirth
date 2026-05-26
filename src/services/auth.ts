import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, type User } from 'firebase/auth'
import { app } from '@/lib/firebase'

export const auth = getAuth(app)

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signOut() {
  return fbSignOut(auth)
}

export function onAuthChange(cb: (user: User | null) => void) {
  return onAuthStateChanged(auth, cb)
}
