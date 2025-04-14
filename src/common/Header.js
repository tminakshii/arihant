import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Animated, StyleSheet, Dimensions, DeviceEventEmitter, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImagePath } from '../values/ImagePath';
import { WHITE, LIGHTGRAY2, DARKGRAY, BLACK, orange, RED, GRAY, LIGHTGREYTEXT } from '../values/Colors';
import SearchCommon from './SearchCommon';
import { useDrawerStatus } from '@react-navigation/drawer';
import { drawerstate } from '../Redux/Slice';
import { useDispatch } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Camera, CameraType } from 'react-native-camera-kit';

import ModalCommon from './ModalCommon';
import { IsidoraSemiBold } from '../values/Fonts';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window')
const Header = ({
  customstyle,
  title,
  textStyle,
  showinitialbox = false,
  showmiddlebox = false,
  showlastbox = false,
  showback,
  searchbar = false,
  scanner = false,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isscannerModal, setIsscannerModal] = useState(false);
  const [QrCodedata, setQrCodedata] = useState([])
  const isDrawerOpen = useDrawerStatus() === 'open';
  const isTablet = DeviceInfo.isTablet();
  const headerOptions=[
    {
      id:1,
      title:'Doubt Solver'
    },
    {
      id:2,
      title:'Books'
    },
    {
      id:3,
      title:'Test Series'
    },
    {
      id:4,
      title:'Videos'
    },
    {
      id:5,
      title:'Book/Coupon Code'
    },
  ]

  // console.log(isDrawerOpen,"isdddada");
  dispatch(drawerstate(isDrawerOpen));
  const onQrCodeScan = (e) => {
    setIsscannerModal(false)
    // alert(`QR Code Scanned:${e.data}`)
    setQrCodedata(e.data);
  }


  // Animated value for sliding button
  const slideAnim = useRef(new Animated.Value(-height * 0.20)).current;
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? -height * 0.002 : height * 0.20,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);
  // Function to handle drawer opening
  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  // Function to handle drawer closing
  const handleDrawerClose = () => {
    navigation.closeDrawer();
  };
    return (
      !isTablet?(
      <View style={styles.headerContainer}>
        <View style={styles.headerBox}>
          <TouchableOpacity style={styles.initialBox} onPress={() => navigation.navigate("MyDrawer")}>
            <Image style={styles.logo} source={ImagePath.logo1} />
          </TouchableOpacity>
          <View style={styles.searchAndList}>
            {/* List Button */}
            <TouchableOpacity onPress={handleDrawerOpen}>
              <Image style={styles.listImage} source={ImagePath.list} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <SearchCommon />
          <TouchableOpacity style={styles.scannercontainer} onPress={() => setIsscannerModal(true)} >
            <Image source={ImagePath.scanner} style={styles.scanner} />
          </TouchableOpacity>
        </View>
        {/* Animated button that slides in */}
        <Animated.View
          style={[
            styles.animatedButton,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <TouchableOpacity onPress={handleDrawerClose}>
            <Image source={ImagePath.Cross} style={styles.crossImage} />
          </TouchableOpacity>
        </Animated.View>
        <ModalCommon
          visible={isscannerModal}
          animationType={'slide'}
          onClose={() => setIsscannerModal(false)}
          CustomModalbox={styles.scannercustomModal}
          showclose={true}
          customStyleforClose={styles.closescanner}
          crossbuttonStyle={styles.closebtn}
          color={WHITE}
        >
          {/* <Text>juj</Text> */}
          {/* <QRCodeScanner
          onRead={onQrCodeScan}
          showMarker={true}
          topViewStyle={styles.scanhead}
          markerStyle={styles.marker}
          cameraStyle={styles.camera}
        /> */}
          <Camera

            scanBarcode={true}
            onReadCode={(event) => Alert.alert('QR code found')} // optional
            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner, that stops when a code has been found. Frame always at center of the screen
            laserColor='red' // (default red) optional, color of laser in scanner frame
            frameColor='white' // (default white) optional, color of border of scanner frame
            style={styles.camera}
          // resizeMode='contain'

          />

          <View style={styles.scantextbox}>
            {/* <Text style={styles.scanqrtext}>Scan the QR Code</Text> */}
          </View>
        </ModalCommon>
      </View>
      )
      :
      (
       <View style={styles.headerContainer}>
       <View style={styles.headerTopTab}>
         <TouchableOpacity style={styles.initialBoxTab} onPress={() => navigation.navigate("MyDrawer")}>
           <Image style={styles.logoTab} source={ImagePath.logo1} />
         </TouchableOpacity>
         <View style={styles.searchContainerTab}>
         <SearchCommon />
         <TouchableOpacity style={styles.scannercontainerTab} onPress={() => setIsscannerModal(true)} >
           <Image source={ImagePath.scanner} style={styles.scannerTab} />
         </TouchableOpacity>
       </View>
       </View>
       <View style={styles.bottomHeaderTab}>
       <View style={styles.bottomSubContainerTab}>
       {headerOptions?.map((item,index)=>{
         return(
           <TouchableOpacity style={styles.bottomHeaderButton}>
           <Text style={styles.bottomHeaderButtonText}>{item?.title}</Text>
           </TouchableOpacity>
         );
       })}
       </View>
       <View style={styles.bottomSubContainerTab2}>
       <TouchableOpacity style={styles.loginButtonTab}>
       <Text style={styles.loginButtonText}>Login/Register</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.profileButtonTab}>
       <Image source={ImagePath?.profileTab} style={styles.profileButtonImage}/>
       </TouchableOpacity>
       </View>
       </View>
       <ModalCommon
         visible={isscannerModal}
         animationType={'slide'}
         onClose={() => setIsscannerModal(false)}
         CustomModalbox={styles.scannercustomModal}
         showclose={true}
         customStyleforClose={styles.closescanner}
         crossbuttonStyle={styles.closebtn}
         color={WHITE}
       >
         {/* <Text>juj</Text> */}
         {/* <QRCodeScanner
       onRead={onQrCodeScan}
       showMarker={true}
       topViewStyle={styles.scanhead}
       markerStyle={styles.marker}
       cameraStyle={styles.camera}
     /> */}
         <Camera

           scanBarcode={true}
           onReadCode={(event) => Alert.alert('QR code found')} // optional
           showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner, that stops when a code has been found. Frame always at center of the screen
           laserColor='red' // (default red) optional, color of laser in scanner frame
           frameColor='white' // (default white) optional, color of border of scanner frame
           style={styles.camera}
         // resizeMode='contain'

         />

         <View style={styles.scantextbox}>
           {/* <Text style={styles.scanqrtext}>Scan the QR Code</Text> */}
         </View>
       </ModalCommon>
     </View>
     )
    )

};
export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: WHITE,
    borderBottomWidth: 0.3,
    borderColor: LIGHTGRAY2,
    // paddingTop: '4%',
    paddingTop: height * 0.02
    // marginBottom: '1%',
  },
  headerBox: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.1,
  },
  searchContainerTab:{
    flexDirection: 'row',
    alignItems: 'center',
    width:'50%',
    marginRight:'2%'
  },
  scannercontainer: {
    right: width * 0.02,
  },
  scannercontainerTab:{
    // right: width * 0.02,
  },
  scanner: {
    height: height * 0.04,
    width: width * 0.067,
    resizeMode: 'contain',
  },
  scannerTab:{
    height: height * 0.03,
    width: width * 0.057,
    resizeMode: 'contain',
  },
  listImage: {
    resizeMode: 'contain',
    height: height / 24.5,
    width: width / 12,
    // backgroundColor:"red"
  },
  searchAndList: {
    flexDirection: 'row',
  },
  initialBox: {
    alignItems: 'center',
  },
  headerTopTab:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'2.4%',
    justifyContent:'space-between'
  },
  initialBoxTab:{
    width:'35%',
  },
  logo: {
    height: height / 24,
    width: width / 2.72,
    resizeMode: 'contain',
    // marginLeft:width>500? 0:width*0.01
  },
  logoTab:{
    height: height / 24,
    width: width / 4.5,
    resizeMode: 'center',
    marginLeft:'5%'
  },
  animatedButton: {
    position: 'absolute',
    right: width * 0.024,
    top: height * 0.0165,
    zIndex: 100,
  },
  crossImage: {
    height: height / 23,
    width: width / 9,
    resizeMode: 'contain',
  },
  scannercustomModal: {
    width: width,
    height: height
  },
  closescanner: {
    // backgroundColor:RED,
    marginTop: height * 0.07,
    marginBottom: height * 0.07

  },
  closebtn: {
    backgroundColor: RED,
    height: height * 0.03,
    width: height * 0.03
  },
  scanhead: {
    backgroundColor: 'transparent'
  },
  scantextbox: {
    position: 'absolute',
    bottom: height * 0.06,
    top: '20%',
    alignItems: 'center',
    left: 0,
    right: 0

  },
  camera: {
    height: height * 0.6,
    width: width,
    marginTop: "5%"
    // position: 'absolute',
    // bottom: 0
  },
  scanqrtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    color: WHITE
  },
  marker: {
    borderColor: orange
  },
  bottomHeaderTab:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:'4.5%'
  },
  bottomSubContainerTab:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'3%',
    paddingBottom:'3%',
    paddingLeft:'2.5%'
  },
  bottomHeaderButton:{
    marginLeft:'3%',
  },
  bottomHeaderButtonText:{
    fontSize:width * 0.0195,
    fontFamily:IsidoraSemiBold,
    color:LIGHTGREYTEXT
  },
  bottomSubContainerTab2:{
    flexDirection:'row',
    alignItems:'center',
  },
  loginButtonTab:{
    backgroundColor:orange,
    paddingVertical:'4.7%',
    width:width * 0.19,
    alignItems:'center',
    borderRadius:width * 0.033,
    right:width* 0.02
  },
  loginButtonText:{
    color:WHITE,
    fontFamily:IsidoraSemiBold,
    fontSize:width * 0.0195
  },
  profileButtonTab:{
  },
  profileButtonImage:{
    resizeMode:'contain',
    width:width* 0.04,
    height:width * 0.04
  },
});