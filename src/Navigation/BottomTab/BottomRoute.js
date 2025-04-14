import {DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import Homepage from '../../Screen/Homepage';
import Booklist from '../../Screen/Booklist';
import Profile from '../../Screen/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../../Screen/Category';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  orange,
  WHITE,
} from '../../values/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bookdetail from '../../Screen/Bookdetail';
import SideMenu from '../../Screen/SideMenu/Index';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="SideMenu" component={SideMenu} />

      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Bookdetail" component={Bookdetail} />
    </Stack.Navigator>
  );
}

function categoryTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="SideMenu" component={SideMenu} />

      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Bookdetail" component={Bookdetail} />
    </Stack.Navigator>
  );
}
const BottomRoute = () => {
  const [booleanData, setBooleanData] = useState(false);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    // Set up the listener
    const subscription = DeviceEventEmitter.addListener('user_info', data => {
      // Update the state with the boolean value (true or false)
      setBooleanData(data);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: WHITE},
      }}>
      {booleanData ? (
        <Tab.Screen
          name="HomeTab"
          options={{tabBarStyle: {display: 'none'}, headerShown: false}}
          component={HomeTab}
        />
      ) : (
        <Tab.Screen
          name="HomeTab"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <MaterialIcons
                  name="home"
                  size={25}
                  color={focused ? orange : GRAY}
                />
              );
            },
          }}
          component={HomeTab}
        />
      )}
      {/* <Tab.Screen name="HomeTab" options={{ headerShown: false,tabBarIcon: ({focused}) => {
              return (
               <MaterialIcons name="home" size={25} color={focused?orange:GRAY}/>
              );
            }, }} component={HomeTab} /> */}
      {booleanData ? (
        <Tab.Screen
          name="categoryTab"
          options={{tabBarStyle: {display: 'none'}, headerShown: false}}
          component={categoryTab}
        />
      ) : (
        <Tab.Screen
          name="categoryTab"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <MaterialIcons
                  name="category"
                  size={25}
                  color={focused ? orange : GRAY}
                />
              );
            },
          }}
          component={categoryTab}
        />
      )}

      <Tab.Screen
        name="Booklist"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunity
                name="bookshelf"
                size={25}
                color={focused ? orange : GRAY}
              />
            );
          },
        }}
        component={Booklist}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="user"
                size={25}
                color={focused ? orange : GRAY}
              />
            );
          },
        }}
        component={Profile}
      />
      {/* <Tab.Screen name="Category" options={{ headerShown: false }} component={Category} />
      <Tab.Screen name="Booklist" options={{ headerShown: false }} component={Booklist} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default BottomRoute;

const styles = StyleSheet.create({});
