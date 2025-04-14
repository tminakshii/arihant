import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HTMLView from'react-native-htmlview'
import { BLACK, DARKGRAY, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
import Entypo from 'react-native-vector-icons/Entypo'
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const{width,height}=Dimensions.get('window')
const HtmlrenderDetailpage = ({item}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 700; // Adjust based on how much content you want to show initially
    const content = item.features || '';
    // Slice content based on the state
    const initialContent = content.substring(0, maxLength);
    const fullContent = content;

    // Toggle content display based on the state
    const displayContent = isExpanded ? fullContent : initialContent + '...';

  return (
    <View style={styles.container}>
        {/* <Text style={styles.heading}>{item?.heading}</Text> */}
         <HTMLView
                value={displayContent}
                stylesheet={htmlStyles}
                />
     <TouchableOpacity style={styles.viewMorecontainer} onPress={()=>setIsExpanded(!isExpanded)}>
        <Text style={styles.view}>{isExpanded ? 'View Less' : 'View More'}</Text>
        <Entypo name={isExpanded ? 'chevron-thin-up' : 'chevron-thin-down'} size={isTablet?22:12} color={BLACK} style={styles.downicon}/>
     </TouchableOpacity>
    </View>
  )
}

export default HtmlrenderDetailpage

const htmlStyles = StyleSheet.create({
       
    h1:{
        fontSize: width*0.035,
        color: DARKGRAY,
        fontFamily:IsidoraBold,
    },
    p:{
        fontSize:isTablet?width*0.023:width*0.035,
        color: DARKGRAY,
        fontFamily:IsidoraBold,
    },
    ul:{
        fontSize:width*0.023,
        color: BLACK,
        fontFamily: IsidoraRegular,
        marginBottom:5,
        marginTop:-20,
        textAlign:"auto"
    },

    li: {
        fontSize:isTablet?width*0.021:width*0.028,
        color: BLACK,
        fontFamily: IsidoraRegular,
        lineHeight:isTablet?height*0.025:height*0.02,
    },

});
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingBottom:isTablet?'3%':'5%'
    },
    viewMorecontainer:{
        flexDirection:'row',
        marginTop:'3%',
        alignItems:"center",
        elevation:5
        // backgroundColor:WHITE

    },
    view:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.022:width*0.035,
        color:BLACK
    },
    downicon:{
        paddingHorizontal:'2%'
    },
    
})