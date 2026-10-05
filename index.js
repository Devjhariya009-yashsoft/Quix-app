import { registerRootComponent } from 'expo';
import App from './App';

// Safely register background handler if native module is present
try {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  setBackgroundMessageHandler(getMessaging(), async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
} catch (error) {
  // Graceful fallback when running in dev/emulator without native build
  console.log('Firebase messaging not initialized in this environment:', error.message);
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
registerRootComponent(App);
