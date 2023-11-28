import {Platform} from 'react-native';
import {View, Text, SafeAreaProvider, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const Login = () => {
  if (Platform.OS !== 'android') {
    return (
      <Text>
        Sorry, you're on an iOS device and haven't spent $100 for this feature!
      </Text>
    );
  } else {
    useEffect(() => {
      GoogleSignin.configure({
        webClientId:
          '631504847688-3b1d88cdee5kogea1sf0dmdgllqn7knh.apps.googleusercontent.com',
      });
    }, []);

    async function onGoogleButtonPress() {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      console.log(user);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
  }
  return (
    <>
      <Text>Hi, Android user!</Text>
      <Button title="Login with Google" onPress={onGoogleButtonPress} />
    </>
  );
};

export default Login;
