import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async () => {
  try {
    // Start the Google Sign-In flow
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();

    // Create Firebase credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.warn('Google cered ', googleCredential);
    // Sign in the user with Firebase
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
};
