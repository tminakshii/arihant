import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlusIcon from 'react-native-vector-icons/AntDesign';

import Inputfield from '../../common/Inputfield';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {BLACK, DARKGRAY, DARKRED, GRAY, WHITE} from '../../values/Colors';
import {styles} from './style';
import {IsidoraBold, IsidoraSemiBold} from '../../values/Fonts';
const {width, height} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchBox = () => {
  const navigation = useNavigation();
  const route=useRoute();
  const recognizedText =route?.params?.recognizedText ||''
  const [searchdata, setSearchdata] = useState(recognizedText);
  const [filtereddata, setFiltereddata] = useState([]);
  
  const categoryData = [
    {
      name: 'JEE & Other Eng. Exams',
      id: 1,
    },
    {name: 'NEET', id: 2},
    {name: 'CUET', id: 3},
    {name: 'Management & Other Exams', id: 4},
    {name: 'CLAT & Law Admissions', id: 5},
    {name: 'NDA, CDS & Asst. Commandant', id: 6},
    {name: 'IAS & State PSC', id: 7},
    {name: 'Banking & Insurance', id: 8},
    {name: 'SSC Exams', id: 9},
    {name: 'Railways Exams', id: 10},
    {name: 'Army, Navy & Airforce', id: 11},
    {name: 'CTET & State TETs', id: 12},
    {name: 'Teacher Recruitment', id: 13},
    {name: 'Other Central Govt. Exams', id: 14},
    {name: 'State Govt. Exams', id: 15},
    {name: 'School Curriculam', id: 16},
    {name: 'School Admissions', id: 17},
    {name: 'ITI Books', id: 18},
  ];
  useEffect(() => {
    const filtered = categoryData.filter(item =>
      item.name.toLowerCase().includes(searchdata.toLowerCase()),
    );
    setFiltereddata(filtered);
  }, [searchdata]);
  const renderItem = ({item}) => {
    return (
      <View style={styles.searchitem}>
        <Text style={styles.searchname}>{item.name}</Text>
      </View>
    );
  };
  return (
 <SafeAreaView>
     <View style={styles.maincontainer}>
      {/* <View style={styles.searchcontainer}> */}
        {/* <Inputfield
          placeholder={'Search'}
          value={searchdata}
          placeholderTextColor={GRAY}
          customStyles={styles.searchinput}
          onChangeText={text => setSearchdata(text)}
          iconLeft={
            <EvilIcons
              name="search"
              size={width/15}
              color={DARKGRAY}
              style={styles.search}
            />
          }
        /> */}

<View style={styles.searchboxcontainer}>
            <View style={styles.preserach}>
                  <PlusIcon name="search1" size={width * 0.04} color={BLACK} />
                </View>
            <TextInput style={styles.modalsearchcontainer} 
           onChangeText={text => setSearchdata(text)}
             placeholder={'Search'}
              placeholderTextColor={'#6F757CB3'}
            />
        <TouchableOpacity
          style={styles.crossbox}
          onPress={() => {
            setSearchdata('');
            navigation.goBack();
          }}>
          <Entypo name="cross" size={20} color={WHITE} />
        </TouchableOpacity>
            </View>

      {/* </View> */}
      {filtereddata.length>0?(
      <FlatList
        data={filtereddata}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />):
      (
        <View style={styles.datanotfoundbox}>
          <Text style={styles.notfoundtext}>Data not found</Text>
        </View>
      )}
    </View>
 </SafeAreaView>
  );
};

export default SearchBox;
