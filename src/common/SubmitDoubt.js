import { Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGREYTEXT, orange, PURPLE, WHITE } from '../values/Colors'
import Inputfield from './Inputfield'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker'
import { PermissionsAndroid,Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import { ImagePath } from '../values/ImagePath'
import Productcard2 from './ProducCard2'
import { BestSeller, data, latest_test_series, Live_Classes } from '../values/Utility'
import ViewAll from './ViewAll'
import TestseriesCard from './TestseriesCard'
import UpcomingCard from './UpcomingCard'
import LiveVideoclass from './LiveVideoclass'
import TestBanner from './TestBanner'
const{width,height}=Dimensions.get('window')

const SubmitDoubt = () => {
    const [image,setImage]=useState(null)
    const[imagepicmodal,setImagepicmodal]=useState(false)
    const renderPopularbook = ({ item, index }) => {
      return <Productcard2 item={item}/>;
    };

    const renderItemoftestseries = ({ item, index }) => {
      return <TestseriesCard item={item} index={index} />;
    };
    // const requestPermissions = async () => {
    //     if (Platform.OS === 'android') {
    //       try {
    //         const cameraPermission = await PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.CAMERA,
    //           {
    //             title: 'Camera Permission',
    //             message: 'This app needs access to your camera',
    //             buttonNeutral: 'Ask Me Later',
    //             buttonNegative: 'Cancel',
    //             buttonPositive: 'OK',
    //           }
    //         );
      
    //         const storagePermission = await PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //           {
    //             title: 'Storage Permission',
    //             message: 'This app needs access to your storage',
    //             buttonNeutral: 'Ask Me Later',
    //             buttonNegative: 'Cancel',
    //             buttonPositive: 'OK',
    //           }
    //         );
      
    //         // Check if permissions were granted
    //         if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED && storagePermission === PermissionsAndroid.RESULTS.GRANTED) {
    //           console.log('Camera and Storage permissions granted');
    //           return true;
    //         } else {
    //           console.log('Camera or Storage permission denied');
    //           return false;
    //         }
    //       } catch (err) {
    //         console.warn(err);
    //         return false;
    //       }
    //     }
    //     return true;
    //   };

//     const OpenCamera=()=>{
//         launchCamera({
//             mediaType:'photo',
//             quality:0.5,
//             saveToPhotos:true
//         },
//     (response)=>{
//         if(response.didCancel){
//             console.log('user cancelled camera picker')
//         }
//         else if(response.errorCode){
//             console.log('camera error',response.errorMessage)
//         }
//         else{
//             setImage(response.assets[0].uri);
//             setImagepicmodal(false)
//         }
//     })
//     }
//     const OpenGallery=()=>{
// launchImageLibrary(
//     {mediaType:'photo',
//         quality:0.5
//     },
//     (response)=>{
// if(response.didCancel){
//     console.log('user cancel image picker')
// }
// else if(response.errorCode){
//     console.log('imagepicker error',response.errorMessage)
// }
// else{
//     setImage(response.assets[0].uri);
//     setImagepicmodal(false)
// }
//     }
// )
//     }
const OpenGallery = () => {
    ImagePicker.openPicker({
      width: 300, // Set width for cropping
      height: 400, // Set height for cropping
      cropping: true, // Enable cropping
    }).then((image) => {
      console.log('Image selected from gallery:', image.mime);
      setImagepicmodal(false)
      setImage(image);
      
    }).catch((error) => {
      console.log('Error picking image:', error);
      setImagepicmodal(false)

    });
  };

  // Open Camera to capture Image
  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true, // Enable cropping after taking the photo
    }).then((image) => {
      setImage(image);
      setImagepicmodal(false)
    }).catch((error) => {
      console.log('Error opening camera:', error);
      setImagepicmodal(false)

    });
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <ScrollView>
      <View>
              {/* {below header image text} */}
              <Image source={ImagePath.bigimage} style={styles.upperBigimage} />
              <Text style={styles.Home}>
                Home /
                <Text style={styles.other}>Doubt Solver</Text>
              </Text>
            </View>
            <View style={styles.maincontainerbook}>
      <View style={styles.innerbox}>
      <Inputfield
      customStyles={styles.nameinput}
      placeholder={'Book Code'}/>
      <Inputfield
      customStyles={styles.nameinput}
      placeholder={'Book Name'}/>
    
     
    
    
   
    </View>
    <Button text={'Submit'} 
      customStyles={styles.btn}
      textStyle={styles.btntext}/>
      </View>
    <View style={styles.maincontainer}>
      <View style={styles.innerbox}>
      <Inputfield
      customStyles={styles.nameinput}
      placeholder={'Name*'}/>
      <View style={styles.mobileClassbox}>
      <Inputfield
      customStyles={styles.mobileinput}
      placeholder={'Mobile (Whatsapp)*'}/>
       <Inputfield
      customStyles={styles.mobileinput}
      placeholder={'Class*'}/>
      </View>
      <Inputfield
      customStyles={styles.nameinput}
      placeholder={'Subjects*'}/>
      <View style={styles.mobileClassbox}></View>
      <View style={styles.mobileClassbox}>
      <Inputfield
      customStyles={styles.mobileinput}
      placeholder={'Page No*'}/>
       <Inputfield
      customStyles={styles.mobileinput}
      placeholder={'Question No*'}/>
      </View>
    
      <Inputfield
      customStyles={styles.Doubtbox}
      placeholder={'Doubt/Problem*'}/>
      <View  style={styles.attechedbox}>
        <View style={styles.atteched}>
        {image ? (
        <View style={styles.imagePreviewContainer}>
          <Text style={styles.imagetext2}>{image?.mime}</Text>
        </View>
      ):
            <Text style={styles.imagetext}> Attach Image</Text>
    }
        </View>
        <TouchableOpacity style={styles.chooseimg} onPress={()=>setImagepicmodal(true)}>
            <Text style={styles.filetext}>Choose File</Text>
        </TouchableOpacity>
      </View>
      </View>
      <Button text={'Submit Doubt'} 
      customStyles={styles.btn}
      textStyle={styles.btntext}/>
    
  
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    
    <Modal
      visible={imagepicmodal}
      animationType='slide'
      
      transparent={true}
      onRequestClose={()=>setImagepicmodal(false)}>
        <View style={styles.imagemodalbox}>
        <View style={styles.imagemodalcontent}>
        <TouchableOpacity style={styles.cameraicon} onPress={OpenCamera}>
        <FontAwesome5  name='camera-retro' size={width*0.08} color={orange} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryicon} onPress={OpenGallery}>
        <MaterialIcons  name='insert-photo' size={width*0.088} color={orange} />
        </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
    </View>

    <View style={styles.popularbookcontainer2}>
            <Text style={styles.poplulartext}>Popular books related to the Exams</Text>
                <FlatList
                horizontal
                  overScrollMode="never"
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderPopularbook}
                  contentContainerStyle={{paddingHorizontal:width*0.02}}
                 
                />
        <ViewAll title={'View All'} customeStyle={{ marginVertical: '3%' }} />

        <View>
              <FlatList
                horizontal
                contentContainerStyle={styles.swiperontestseries}
                data={latest_test_series}
                renderItem={renderItemoftestseries}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
              />
            </View>
            <ViewAll
              title={'View All'}
              customeTextStyle={{ fontFamily: IsidoraMedium }}
              customeStyle={styles.viewallBox1}
            />

<View style={styles.bestbox}>
            <Text style={styles.bestsellertext}>Best Seller</Text>
            <Text style={styles.bestsellertext2}>
              Discover our release, designed to elevate your learning experience.
              Dive into fresh content for enhanced understanding and mastery.
            </Text>
            <View style={styles.mentorbutton}>
              {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest - 1)}
                style={styles.backarrowmentor}>
                <Entypo name="chevron-small-left" size={20} color={DARKGRAY} />
              </TouchableOpacity> */}
              <FlatList
                overScrollMode="never"
                horizontal
                data={BestSeller}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                // ref={flatListRefBest}
                contentContainerStyle={styles.bestsellerscroll}
                renderItem={({ item, index }) => {
                  return <UpcomingCard item={item} isbestseller={true} />;
                }}
              />

       
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginTop: '3%', marginBottom: '5%',marginLeft:"4.5%" }} />


          </View>
          

          <Text style={styles.live}>Live Classes</Text>
          <Text style={styles.wonderful}>
            A wonderful and unique curriculum that is the best fit for every
            student.
          </Text>
          <LiveVideoclass  item={Live_Classes} solution={true} onpressisviewSeries={() => setIsviewseries(true)} />


              </View>

              <View
          style={{
            marginTop: -height * 0.015,
          }}>
          <Image source={ImagePath.banner1} style={styles.bannerstyle} />
        </View>
        <View>
          <Image source={ImagePath.banner2} style={styles.bannerstyle} />
        </View>

        <View style={styles.newslatter1}>
          <View style={styles.newslatter}>
            <Text style={styles.newslattertext}>
              Our Monthly Newsletter for Exclusive Content, Exams Tips, New
              Releases and more...
            </Text>
            <Button
          
              customStyles={styles.subscribebutton}
              text={'Subscribe'}
              textStyle={styles.subscribetext}
              icon2={ImagePath.subscribeArrow}
              iconStyle2={styles.rightarrowimage}
              // vector2color={WHITE}
            />
          </View>
          <Image
            style={styles.newsletterImage}
            source={ImagePath.newsletterImage}
          />
        </View>

          
           



    </ScrollView>
    </SafeAreaView>
  )
}

export default SubmitDoubt

const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor:WHITE,
        // flex:1,
        alignSelf:'center',
        width:width*0.92,
        paddingHorizontal:width*0.06,
        elevation:5,
        borderRadius:width*0.02,
        paddingTop:height*0.03,
        marginTop:"6%",
        
        elevation:3,
        shadowColor:BLACK,
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.2
    },
    maincontainerbook:{
      backgroundColor:WHITE,
      // flex:1,
      alignSelf:'center',
      width:width*0.92,
      paddingHorizontal:width*0.06,
      elevation:5,
      borderRadius:width*0.02,
      paddingTop:height*0.03,
      paddingBottom:height*0.005,

      marginTop:"6%",
      
      elevation:3,
      shadowColor:BLACK,
      shadowOffset:{width:0,height:3},
      shadowOpacity:0.2
  },
    nameinput:{
        width:width*0.84,
        height:height*0.05,
        paddingLeft:width*0.04,
        marginBottom:height*0.02
    },
    mobileinput:{
        width:width*0.4,
        height:height*0.05,
        paddingLeft:width*0.04,
        marginBottom:height*0.02

    },
    mobileClassbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:"red",
        width:width*0.84,

    },
    Doubtbox:{
        height:height*0.23,
        width:width*0.84,
        textAlignVertical:'top',
        paddingLeft:width*0.04,
        marginBottom:height*0.02,

    },
    attechedbox:{
        flexDirection:'row',
        alignItems:'center',
        width:width*0.84,
        borderWidth:0.5,
        borderColor:GRAY,
        borderRadius:width*0.02

    },
    atteched:{
        width:width*0.56,
        height:height*0.044,
        justifyContent:'center'

    },
    chooseimg:{
        backgroundColor:GRAY,
        width:width*0.28,
        height:height*0.044,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:width*0.02,
        borderBottomRightRadius:width*0.02,

    },
    filetext:{
        color:WHITE,
        fontFamily:IsidoraMedium,
        fontSize:width*0.032
    },
    imagetext:{
        color:GRAY,
        fontFamily:IsidoraMedium,
        fontSize:width*0.032,
        marginLeft:width*0.025
    },
    viewallBox1: {
      // marginVertical:'4%',
      marginTop: '5%',
      marginBottom: '9%',
      // marginLeft: '5%',
    },
    imagetext2:{
        color:orange,
        fontFamily:IsidoraMedium,
        fontSize:width*0.032,
        marginLeft:width*0.025
    },
    btn:{
        backgroundColor:orange,
        height:height*0.04,
        width:width*0.3,
        justifyContent:'center',
        alignItems:'center',
        padding:0,
        borderRadius:width*0.015
    },
    btntext:{
        color:WHITE,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.036
    },
    innerbox:{
         alignItems:'center'
    },
    imagemodalbox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // height:height*0.3
    },
    imagemodalcontent:{
        width: width*0.94,
        height: height*0.1, // Set the height of the modal content here
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center', // Align content within the modal
        alignItems: 'center',
        bottom:height*0.07,
        position:"absolute",
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:"flex-start"
    },
    galleryicon:{
        marginLeft:width*0.04
    },
    imagePreview:{
        resizeMode:'contain',
        height:100,
        width:100
    },
    upperBigimage: {
      resizeMode: 'contain',
      height: undefined,
      aspectRatio: 16 / 8.2, 
      width: width,
      alignSelf: 'center',
      marginTop:"0%",
      // backgroundColor:"red"
      // marginTop: height * 0.01,
    },
    Home: {
      marginLeft:width*0.04,
      marginTop: '2.5%',
      fontFamily: IsidoraMedium,
      color: GRAY,
      fontSize: width * 0.03,
    },
    other: {
      fontFamily: IsidoraMedium,
      color: LIGHTGREYTEXT,
      fontSize: width * 0.03,
    },
    Jee: {
      marginLeft: width*0.04,
      marginTop: '7%',
      fontSize: width * 0.04,
      fontFamily: IsidoraSemiBold,
    },
    popularbookcontainer2: {
      // paddingLeft: width * 0.03,
      backgroundColor:LIGHTGRAY,
      marginTop:"10%",
      paddingBottom: height * 0.04,
      paddingTop: height * 0.03,
      // marginBottom:height*0.04
    },
    poplulartext: {
      fontFamily: IsidoraSemiBold,
      fontSize: width * 0.04,
      color: DARKGRAY,
      marginLeft: width * 0.04,
      marginTop: height * 0.02,
      marginBottom: height * 0.01,
    },
    bestbox: {
      // marginHorizontal: width * 0.03,
      marginTop: height * 0.02,
      backgroundColor:LIGHTGRAY,
      paddingTop:height*0.02
    },
    bestsellertext: {
      fontFamily: IsidoraBold,
      fontSize: width * 0.052,
      // fontSize:19,
      color: BLACK,
      marginLeft: '4%',
    },
    bestsellerscroll: {
      alignSelf: 'center',
      flexDirection: 'row',
      paddingHorizontal: width * 0.02,
    },
    bestsellertext2: {
      fontFamily: IsidoraMedium,
      fontSize: width * 0.03,
      color: GRAY,
      marginLeft: '4%',
      marginTop: '2%',
      marginBottom: '1%',
      width: width / 1.15,
      lineHeight: width * 0.035,
      marginBottom: '7%',
    },
    mentorbutton: {
      flexDirection: 'row',
      // justifyContent: "space-between",
      alignItems: 'center',
      // bottom: "40%"
    },
    live: {
      fontFamily: IsidoraSemiBold,
      color: DARKGRAY,
      fontSize: width * 0.047,
      // fontSize:17,
      marginLeft: '5%',
      marginTop: '5%',
      marginBottom: '1%',
    },

    wonderful: {
      fontFamily: IsidoraMedium,
      color: GRAY,
      fontSize: width * 0.036,
      marginHorizontal: '5%',
      marginBottom: '3%',
      lineHeight: height * 0.022,
    },
    bannerstyle: {
      width: width / 1.08,
      alignSelf: 'center',
      borderRadius: width * 0.03,
      marginBottom: '5%',
      height: undefined,
      aspectRatio:16/5.4,
      resizeMode: 'contain',
      // backgroundColor:"red"
    },
    newslatter1: {
      backgroundColor: PURPLE,
      height: height * 0.3,
      paddingHorizontal: '5%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      // paddingRight:'10%',
      marginTop: '7%',
    },
    rightarrowimage: {
      resizeMode: 'contain',
      width: width / 12,
      height: height / 35,
      // backgroundColor:"red",
      alignSelf:"center",
      marginTop:height*0.011
    },
    subscribetext: {
      fontFamily: IsidoraSemiBold,
      fontSize: width * 0.037,
      color: WHITE,
    },
    newslatter: {
      marginTop: '10%',
    },
  
    subscribetext: {
      fontFamily: IsidoraSemiBold,
      fontSize: width * 0.037,
      color: WHITE,
    },
    newslattertext: {
      color: WHITE,
      fontFamily: IsidoraBold,
      fontSize: width * 0.037,
      lineHeight: height * 0.023,
      width: width / 1.9,
      marginLeft: '4%',
    },
    subscribebutton: {
      backgroundColor: orange,
      borderRadius: 20,
      width: width / 2.7,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      marginTop: '6%',
      height:height*0.046,
      marginLeft:"5%"
    },
})