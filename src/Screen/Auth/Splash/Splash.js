import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Splash = () => {
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const focus=useIsFocused()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   
    useEffect(() => {
         initializeApp()
      }, [focus]);
    const initializeApp=async()=>{
        const userData1 = await AsyncStorage.getItem('userInfo');
        const userData2 = JSON.parse(userData1);
      console.log(userData2,'usedata2')
        
        checkLogin(userData2)
        if (userData2) {
            dispatch(setLoginState(userData2));
          }    
        }
    const checkLogin=(userData)=>{
      console.log(userData,'usedata')
        if (userData) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MyDrawer' }], // Reset navigation stack
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }], // Reset navigation stack
            });
          }
    }
  return (
    <View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})