import React from 'react';
import { View, Text, FlatList, Image, Dimensions,StyleSheet } from 'react-native';
 import styles from './style';
import Productcard from '../../common/Productcard';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Header from '../../common/Header';
const Booklist = () => {
  const{width,height}=Dimensions.get('window')
  const data = [
    {
      id: '1',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:' ₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
    {
      id: '2',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
  
    {
      id: '3',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
  
    {
      id: '4',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
  

    {
      id: '5',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
  
    {
      id: '6',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
  
    {
      id: '7',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
    {
      id: '8',
      title: 'Environmental Studies & Pedagogy CTET & TET',
      rate: '₹ 265',
      discount:'₹ 290',
      image: 'https://th.bing.com/th/id/OIP.NAA01RUGS-fuQ82rtpGPNgAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    },
        
  ];
  // const renderItem = ({ item }) => (
  //   <View style={styles.container} >
  //     <Image
  //       source={{ uri: item.image }}
  //       style={styles.image}
  //     />  
  //     <View style={styles.detail}>
  //     <Text style={styles.title}>{item.title}</Text>
  //     <Text  style={styles.rate}>{item.rate}</Text>
  //     </View>
  //   </View>
  // );
  const renderItems = ({ item }) => <Productcard item={item} />;
  return (
       
    <View style={styles.main} >
      <Header showinitialbox={true}
      showback={true}
      showmiddlebox={true}
      showlastbox={true}
      title={'Booklist'}
      textStyle={styles.title}
      />
      <FlatList
        data={data}
        renderItem={renderItems}
        numColumns={2}
      />
    </View>
  );
};



export default Booklist;


