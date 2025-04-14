import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Route from './src/Navigation/Route';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import myStore from './src/Redux/Store';
import { APICall } from './src/Services/ApiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    // Check and refresh token on app launch
    // const initializeApp = async () => {
    //   await checkAndRefreshToken();
    // };

    // initializeApp();

    // // Schedule token refresh every 55 minutes
    // const intervalId = setInterval(() => {
    //   RefreshToken();
    // }, 55 * 60 * 1000); // 55 minutes in milliseconds

    // // Cleanup interval on unmount
    // return () => clearInterval(intervalId);
  }, []);

  const RefreshToken = async () => {
    const refresh = await AsyncStorage.getItem('refresh');
    APICall(
      'POST',
      'auth/refresh/',
      {},
      async response => {
        // Handle success
        console.log('API Success:', response);
        if (response) {
          console.log('refresh', response?.access_token);
          await AsyncStorage.setItem('Token', response?.access_token);
          const currentTime = Date.now();
          await AsyncStorage.setItem('lastRefreshTime', currentTime.toString()); // Store the current time
        } else {
          console.log('ERROR');
        }
      },
      error => {
        console.error('Error posting data:', error);
      },
      false,
      refresh
    );
  };

  const checkAndRefreshToken = async () => {
    const lastRefreshTime = await AsyncStorage.getItem('lastRefreshTime');
    const currentTime = Date.now();

    if (lastRefreshTime) {
      const timeDifference = (currentTime - parseInt(lastRefreshTime, 10)) / (60 * 1000); // Time difference in minutes
      if (timeDifference > 55) {
        console.log('More than 55 minutes since last refresh. Refreshing token...');
        await RefreshToken();
      } else {
        console.log(`Token refreshed ${timeDifference.toFixed(2)} minutes ago. No refresh needed.`);
      }
    } else {
      console.log('No last refresh time found. Refreshing token for the first time...');
      await RefreshToken();
    }
  };

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); // Ignore all log notifications

  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
