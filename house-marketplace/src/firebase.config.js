import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBGM3DC3SAfQhrEe1wyh0HNEet6agES9jw',
	authDomain: 'house-marketplace-d692c.firebaseapp.com',
	projectId: 'house-marketplace-d692c',
	storageBucket: 'house-marketplace-d692c.appspot.com',
	messagingSenderId: '693228718079',
	appId: '1:693228718079:web:1e91fcc8aa372610d5c9ca',
}

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
