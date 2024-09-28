import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

export function authGuard(to, form, next) {
  onAuthStateChanged($auth, (user) => {
    if (!user) {
      next({ name: 'register' })
    } else {
      next()
    }
  })
}
