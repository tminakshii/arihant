import { StyleSheet, Text, View, Image, TouchableOpacity ,FlatList} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { ImagePath } from '../../values/ImagePath';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const SideMenu = ({ navigation }) => {
// const dispatch =useDispatch()
  const [activeItem, setActiveItem] = useState('Login/Register');
  const sideMenuData = [
    { name: 'Login/Register', Route: '' },
    { name: 'Books', Route: '' },
    { name: 'Test Series', Route: '' },
    { name: 'Videos', Route: '' },
    { name: 'Book/Coupon Code', Route: '' },
    { name: 'Doubt Solver', Route: '' },
    // { name: 'Left Slider', Route: '' },
    // { name: 'Right Slider', Route: '' },
    


  ];
  const handleItemPress = (itemName) => {
    setActiveItem(itemName);
    if (itemName == 'Login/Register') {
      navigation.navigate('Login')
    }
else if(itemName == "Test Series"){
  navigation.navigate('Category',{data:1})
  
}
else if(itemName == "Books"){
  navigation.navigate('Category',{data:0})
  
}
else if(itemName == "Videos"){
  navigation.navigate('Category',{data:2})
  
}
else if(itemName == "Doubt Solver"){
  navigation.navigate('SubmitDoubt')
  
}
  };
  const renderItem = ({ item }) => {
    const isActive = item.name === 'Login/Register';
    return (
      <TouchableOpacity onPress={() => handleItemPress(item.name)} style={isActive && styles.activebox}>
        <View style={[styles.drawerContent, isActive && styles.ActiveDrawerContent]}>
          <Text style={[styles.ContentText, isActive && { color: 'white' }]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {/* <Header  showinitialbox={true} showback={true} showmiddlebox={true}/> */}
      <FlatList data={sideMenuData} renderItem={renderItem} keyExtractor={(item) => item.name} />
    </View>
  );
};
export default SideMenu;