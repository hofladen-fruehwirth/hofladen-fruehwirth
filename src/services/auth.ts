import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, type Auth, type User } from 'firebase/auth'
import { app } from '@/lib/firebase'

let authInstance: Auth | null = null
let authError: Error | null = null

try {
  authInstance = getAuth(app)
} catch (e: any) {
  authError = e
}

function ensureAuth(): Auth {
  if (authError) throw authError
  if (!authInstance) throw new Error('Firebase Auth ist nicht verfügbar')
  return authInstance
}

export function getAuthError(): Error | null {
  return authError
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(ensureAuth(), email, password)
}

export function signOut() {
  return fbSignOut(ensureAuth())
}

export function onAuthChange(cb: (user: User | null) => void) {
  return onAuthStateChanged(ensureAuth(), cb)
}
