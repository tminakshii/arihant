import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Dimensions, LayoutAnimation, DeviceEventEmitter, SafeAreaView, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import OnBoarding from '../Screen/Auth/OnBoarding/index';
import Login from '../Screen/Auth/Login/index';
import OTP from '../Screen/Auth/OTP/index';
import Register from '../Screen/Auth/Register';
import Bookdetail from '../Screen/Bookdetail';
import BottomRoute from '../Navigation/BottomTab/BottomRoute';
import Category from '../Screen/Category/index';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import SideMenu from '../Screen/SideMenu/Index';
import VideoPlayer from '../common/VideoPlayer';
import SearchBox from '../Screen/SearchBox';
import Homepage from '../Screen/Homepage';
import { DRAWERBACKGROUND } from '../values/Colors';
import Buynow from '../Screen/BuynowScreen';
import TestSeries from '../common/TestSeries';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ExamPage from '../Screen/Test/ExamPage';
import Questions from '../Screen/Questions/Questions';
import LeftSideQuetions from '../Screen/Questions/LeftSideQuetions';
import RightSideQuestion from '../Screen/Questions/RightSideQuestion';
import AfterTestSubmit from '../common/AfterTestSubmit';
import SubmitDoubt from '../common/SubmitDoubt';
import ThankyouScreen from '../Screen/ThankYouPage/ThankyouScreen';
import Orientation from 'react-native-orientation-locker';

import DeviceInfo from 'react-native-device-info';
import dashboard from '../Screen/Dashboard/dashboard';
import ContactUs from '../Screen/ContactUs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { setLoginState } from '../Redux/AuthSlice';
import Splash from '../Screen/Auth/Splash/Splash';
import dashboardsecond from '../Screen/DashboardSecond/dashboardsecond';
const isTablet=DeviceInfo.isTablet()
const { height, width } = Dimensions.get('window');

const Route = () => {
  const Drawer = createDrawerNavigator();
  const MyDrawer = () => {
    // const showData = useSelector(state => state.cart);
    const showData = useSelector(state => state.cart, shallowEqual);
  
    return (
      <Drawer.Navigator
        drawerContent={props => <SideMenu {...props} />}
        screenOptions={{
          swipeEnabled: false,
          drawerType: 'front',

          drawerStyle: {
            height: height * 0.6,
            marginTop: Platform.OS == "android" ?
              !showData ? width / 0.001
                : height / 6.3
              : !showData ?
                width / 0.001 :isTablet? height / 5.4: height / 4.6,
            width:isTablet? width * 0.6: width * 0.7,
            borderBottomLeftRadius: 20,
            zIndex: 0,
          },
          overlayColor: DRAWERBACKGROUND,
          headerShown: false,
          drawerPosition: 'right',
        }}>
        <Drawer.Screen name="BottomRoute" component={BottomRoute} /> 
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name='dashboard' component={dashboard}/>
        <Drawer.Screen name='dashboardsecond' component={dashboardsecond} />
        <Drawer.Screen name="Buynow" component={Buynow} />
        <Drawer.Screen name="ExamPage" component={ExamPage} />
        <Drawer.Screen name="AfterTestSubmit" component={AfterTestSubmit} />
        <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name="SubmitDoubt" component={SubmitDoubt} />
        <Drawer.Screen name="ThankyouScreen" component={ThankyouScreen} />


      </Drawer.Navigator>
    );
  }
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // Lock the orientation to portrait on app launch
    Orientation.lockToPortrait();

    return () => {
      // Cleanup: Unlock orientation on unmount
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen options={{ headerShown: false }} name="OTP" component={OTP} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyDrawer"
        component={MyDrawer}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Category"
        component={Category}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="BottomRoute"
        component={BottomRoute}
      /> */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="VideoPlayer"
        component={VideoPlayer}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SearchBox"
        component={SearchBox}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Buynow"
        component={Buynow}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TestSeries"
        component={TestSeries}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ExamPage"
        component={ExamPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Questions"
        component={Questions}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LeftSideQuetions"
        component={LeftSideQuetions}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RightSideQuestions"
        component={RightSideQuestion}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SideMenu"
        component={SideMenu}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="SubmitDoubt"
        component={SubmitDoubt}
      /> */}
    </Stack.Navigator>
  );
};
export default Route;
