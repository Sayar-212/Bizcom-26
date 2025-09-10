import { signInWithGoogle, logOut, auth } from './firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';

// Handle Google Sign In
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login-button');
  
  if (loginButton) {
    loginButton.addEventListener('click', async () => {
      try {
        const result = await signInWithGoogle();
        console.log('User signed in:', result.user);
        // Redirect or update UI after successful login
      } catch (error) {
        console.error('Sign in error:', error);
      }
    });
  }

  // Listen for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in:', user);
      // Update UI for signed-in user
    } else {
      console.log('User is signed out');
      // Update UI for signed-out user
    }
  });
});