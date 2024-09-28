// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC49FElDNcVkcM00YqVHagJlA56piwMT6o',
  authDomain: 'desafio-auth-37f60.firebaseapp.com',
  projectId: 'desafio-auth-37f60',
  storageBucket: 'desafio-auth-37f60.appspot.com',
  messagingSenderId: '1015118559570',
  appId: '1:1015118559570:web:eece07b18f8acc7d57228b'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const $auth = getAuth(app)

export { $auth }
