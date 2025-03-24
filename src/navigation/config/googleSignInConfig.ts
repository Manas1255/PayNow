import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '71028966356-1kmsblvs68s3i9mitnqmeu3vcu57ht8j.apps.googleusercontent.com',
    offlineAccess: true,
  });
};
