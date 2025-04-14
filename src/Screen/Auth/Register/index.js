import {
  Dimensions,
  Image,
  InputAccessoryView,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Inputfield from '../../../common/Inputfield';
import Button from '../../../common/Button';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  inputBordercolor,
  LIGHTGRAY2,
  orange,
  RED,
  WHITE,
} from '../../../values/Colors';
import {
  IsidoraBlack,
  IsidoraBold,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../../values/Fonts';
import Toast from 'react-native-simple-toast';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
// import EvilIcons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { shouldUseActivityState } from 'react-native-screens';
import Header from '../../../common/Header';
import IntroSlider from '../../../common/IntroSlider';
import LinearGradient from 'react-native-linear-gradient';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImagePath } from '../../../values/ImagePath';
import Entypo from 'react-native-vector-icons/Entypo';
import { ResizeMode } from 'react-native-video';
import { preparationData } from '../../../values/Utility';
import DeviceInfo from 'react-native-device-info';
import IntroSliderTab from '../../../common/IntrosliderTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APICall } from '../../../Services/ApiCall';
import Loadercommon from '../../../common/Loadercommon';
const { width, height } = Dimensions.get('window');

let isTablet = DeviceInfo.isTablet();

const items = [
  { id: 1, name: 'CLAT & Law' },
  { id: 2, name: 'JEE' },
  { id: 3, name: 'NEET' },
  { id: 4, name: 'CUET' },
  { id: 5, name: 'NDA,CDS' },
  { id: 6, name: 'IAS & State PSC' },
  { id: 7, name: 'SSC' },
  { id: 8, name: 'Railway' },
  { id: 9, name: 'Army' },
  { id: 10, name: 'Navy' },
  { id: 11, name: 'Airforce' },
  { id: 12, name: 'CTET' },
  { id: 13, name: 'State TETs' },
];
const CustomIcon = () => (
  <Icon name="search" size={17} color="black" style={styles.preferenceSearch} />
);
const customdropdown = () => (
  <PlusIcon name="pluscircleo" size={24} color="black" />
);
const customDropDownIconUp = () => (
  <PlusIcon name="minuscircleo" size={24} color="black" />
);
const Register = props => {
  const { registerInformation, sliderData } = props?.route?.params;
  const [selectedId, setSelectedId] = useState(1);
  const [conditionselected, setConditionselected] = useState(false);
  const [searchText, setSearchText] = useState(''); // State to track input
  const [filteredItems, setFilteredItems] = useState(registerInformation.preferences_options);
  const [openpreferenceModal, setOpenpreferenceModal] = useState(false);
  const [openpreferenceModalTab, setOpenpreferenceModalTab] = useState(false);
  const [loading, setLoading] = useState(false)

  const [selectedsubid, setSelectedsubid] = useState([]);

  const [entry, setEntry] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: registerInformation?.mobile,
  });
  const [entryerror, setEntryerror] = useState({
    firstnameError: '',
    preferenceError: '',
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const roles = [
    { name: 'Students', id: 1 },
    { name: 'Teachers', id: 2 },
    { name: 'Guest', id: 3 },
  ];
  const handleserchingofpref = text => {
    setSearchText(text);
    // Filter items based on search input
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredItems(filtered);
  };
  console.log(registerInformation, '============>..')
  const handleSelectedRole = id => {
    setSelectedId(id);
  };
  const handleNext = () => {
    let hasError = false;
    if (!conditionselected) {
      Toast.show('Please agree to the terms and conditions.', Toast.SHORT);
      hasError = true;
    }
    if (!entry.firstname.length) {
      setEntryerror(prev => ({
        ...prev,
        firstnameError: 'This is a required field',
      }));
      hasError = true;
    } else {
      setEntryerror(prev => ({
        ...prev,
        firstnameError: '',
      }));
    }
    if (!selectedsubid.length) {
      setEntryerror(prev => ({
        ...prev,
        preferenceError: 'This is a required field',
      }));
      hasError = true;
    } else {
      setEntryerror(prev => ({
        ...prev,
        preferenceError: '',
      }));
    }

    if (!hasError) {
      handleRegisterStudent()
      console.log('press')
      // props.navigation.navigate('MyDrawer');
    }
  };
  const handleselectedsubject = sub => {
    setSelectedsubid(prev => {
      if (prev.some(item => item.id === sub.id)) {
        return prev.map(item =>
          item.id === sub.id ? { ...item, selected: !item.selected } : item
        );
      }
      return [...prev, { ...sub, selected: true }];
      
    });
  };
  console.log(selectedsubid,'subidselected')

  const handlecrosschip = sub => {
    setSelectedsubid(prev => {
      return prev.filter(item => item.id !== sub.id);
    });
  };
  const handleRegisterStudent = async () => {
    setLoading(true)
    console.log('API Success:', 'reg', entry.firstname, entry.email, registerInformation.mobile);

    // const token = await AsyncStorage.getItem('Token');

    const postData = {
      user_type: "student",
      first_name: entry.firstname,
      last_name: entry.lastname,
      preferences_options: selectedsubid,
      email: entry.email,
      mobile: registerInformation.mobile,
      terms_and_conditions: conditionselected
    };
    await APICall(
      'POST', // HTTP method
      'auth/register/submit/', // Endpoint (adjust based on your API)
      postData, // Parameters to send in the request body
      async (response) => {
        console.log('API Success:', response, 'reg===');

        if (response?.success) {
          console.log('API Success:', response);
          try {
            //  AsyncStorage.setItem('userToken', response.data.token); 
            await AsyncStorage.setItem('userInfo', JSON.stringify(response));
            // await AsyncStorage.setItem('Token', response.auth_token);
            // await AsyncStorage.setItem('refresh', response.refresh_token);
            console.log('User data saved to AsyncStorage');
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'MyDrawer' }],
            })
          } catch (error) {
            console.error('Error saving data to AsyncStorage--r:', error);
          }
          setLoading(false)
          // props.navigation.navigate('MyDrawer');


        }
        else {
          Toast.show(response.message, Toast.SHORT)
          setLoading(false)

        }
      },

      error => {
        console.error('Error posting data:', error);
        setLoading(false)

      },
      false
    );


  }
  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
    if (selectedItems.length > 0) {
      setEntryerror(prev => ({
        ...prev,
        preferenceError: '',
      }));
    }
  };
  const icons = ({ name, size = 24, style }) => {
    return <PlusIcon name={name} size={size} style={style} />;
  };
  return !isTablet ? (
    <ScrollView
      overScrollMode="never"
      bounces={false}
      contentContainerStyle={styles.mainContainer1}>
      <LinearGradient
        colors={['#F38314', '#DB3735']}
        style={styles.maincontainer}>
        <StatusBar backgroundColor={'#F38314'} />
        <View style={styles.main}>
          <IntroSlider
            sliderData={sliderData}
            customStyle={styles.Introsliderstyle}
          />
          <View style={styles.welcomeContainer}>
            <Text style={styles.beinvisible}>Be Invincible</Text>
            <Text style={styles.createAccount}>Create an Account</Text>
            <Text style={styles.createAccountas}>Create account as</Text>
            <View style={styles.role}>
              {roles?.map(item => (
                <TouchableOpacity
                  key={item?.id}
                  style={[
                    styles.rolebox,
                    selectedId === item?.id && styles.selectedrole, // Apply selected style based on id
                  ]}
                  onPress={() => handleSelectedRole(item?.id)} // Set selected role by id
                >
                  <Text
                    style={[
                      styles.roleText,
                      selectedId === item?.id && styles.selectedRoleText, // Change text style if selected
                    ]}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.name}>
              <Inputfield
                customStyles={styles.firstname}
                value={entry?.firstname}
                placeholder="First Name*"
                placeholderTextColor={'#75767699'}
                onChangeText={text => {
                  setEntry(prevState => ({ ...prevState, firstname: text }));
                  if (text.length > 0) {
                    setEntryerror(prev => ({ ...prev, firstnameError: '' }));
                  }
                }}
              />
              <Inputfield
                customStyles={styles.lastname}
                value={entry?.lastname}
                placeholder="Last Name"
                placeholderTextColor={'#75767699'}
                onChangeText={text =>
                  setEntry(prevState => ({ ...prevState, lastname: text }))
                }
              />
            </View>
            {entryerror && (
              <View style={styles.errorbox}>
                <Text style={styles.errormessage}>
                  {entryerror?.firstnameError}
                </Text>
              </View>
            )}
            {/* <View style={styles.container}>
              <View style={[styles.preference]}>

                <SectionedMultiSelect
                  headerComponent={<Text style={styles.heading}>Preferences</Text>}
                  items={filteredItems}
                  uniqueKey="id"
                  subKey="children"
                  selectText="Preferences*"
                  onSelectedItemsChange={onSelectedItemsChange}
                  selectedItems={selectedItems}
                  showChips={true}
                  modalAnimationType="slide"
                  modalWithSafeAreaView={true}
                  confirmText="Done"
                  IconRenderer={PlusIcon}
                  alwaysShowSelectText={true}
                  // iconKey='id'
                  icons={icons}
                  // footerComponent={
                  //   <View style={{width:width,height:1,backgroundColor:"red",zIndex:999}}> 
                  //   </View>
                  // }
                  chipRemoveIconComponent={icons({ name: 'close', size: width * 0.04, style: { marginLeft: '8%', color: GRAY } })}
                  // searchIconComponent={icons({ name: 'search1', size: 20, style:{marginLeft:'10%',} })}
                  searchIconComponent={
                    <View style={styles.multiSelect.searchContainer}>
                      {icons({ name: 'search1', size: width * 0.05, style: styles.multiSelect.searchIcon })}
                      <TextInput
                        placeholder="Search"
                        editable={true}
                        onChangeText={handleSearch}
                        placeholderTextColor={DARKGRAY}
                        style={styles.multiSelect.searchTextInput}
                      />

                    </View>
                  }
                  selectToggleIconComponent={icons({ name: 'pluscircle', size: 20, style: { color: orange } })}
                  selectedIconComponent={icons({ name: 'check', size: 16, style: { color: RED } })}

                  styles={styles.multiSelect}
                // customChipsRenderer={renderchip}



                />
              </View>
            </View> */}
            <View style={styles.preferencecontainer}>
              <View
                style={[
                  styles.prebox1,
                  {
                    borderBottomWidth: selectedsubid.length ? 0.8 : 0,
                    borderBottomColor: selectedsubid.length && GRAY,
                  },
                ]}>
                <Text style={styles.preferencetext}>Preferences*</Text>
                <TouchableOpacity
                  onPress={() => setOpenpreferenceModal(true)}
                  style={{ right: '0%' }}>
                  <PlusIcon
                    name="pluscircle"
                    size={width * 0.05}
                    color={orange}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.modalchipbox,
                  { marginVertical: selectedsubid.length ? height * 0.01 : 0 },
                ]}>
                {selectedsubid.map((it, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.nameview2}
                    onPress={() => handlecrosschip(it)}
                    activeOpacity={0.5}>
                    <Text style={styles.chipname}>{it?.name}</Text>
                    <View style={styles.chipcrossmodal}>
                      <Entypo name="cross" size={width * 0.03} color={GRAY} />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {entryerror && (
              <View style={styles.errorbox}>
                <Text style={styles.errormessage}>
                  {entryerror.preferenceError}
                </Text>
              </View>
            )}
            <View style={{ alignSelf: 'center' }}>
              <Inputfield
                customStyles={styles.email}
                value={entry?.email}
                placeholder="Email"
                placeholderTextColor={'#75767699'}
                onChangeText={text =>
                  setEntry(prevState => ({ ...prevState, email: text }))
                }
              />
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Inputfield
                customStyles={styles.phone}
                placeholder="+91 Phone number"
                value={`+91 ${entry?.phone}`}
                keyboardType="number-pad"
                onChangeText={text =>
                  setEntry(prevState => ({ ...prevState, phone: text }))
                }
              />
            </View>
            <TouchableOpacity style={styles.conditioncontainer}
              onPress={() => setConditionselected(!conditionselected)}>
              <View
                style={[
                  styles.conditionbox,
                  { backgroundColor: conditionselected ? orange : null },
                ]}
              >
                {conditionselected ? (
                  <Icon name="check" size={10} color={WHITE} />
                ) : null}
              </View>

              <Text style={styles.conditiontext}>
                Please accept the terms & condition.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineShadow} />
          <View style={styles.alreadyContainer}>
          </View>
          <View style={styles.buttonview}>
            {
              loading ?
                <Loadercommon />

                : (<Button
                  icon2={ImagePath.longarrowright}
                  iconStyle2={styles.rightarrowimage}
                  customStyles={styles.button}
                  text={'Next'}
                  textStyle={styles.textStyle1}
                  onPress={() => handleNext()}
                />)
            }
          </View>
        </View>
      </LinearGradient>

      <Modal
        visible={openpreferenceModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setOpenpreferenceModal(false)}>
        <View style={styles.outerpremodal}>
          <View style={styles.preinnermodal}>
            <Text style={styles.modalpretext}>Preferences</Text>
            {/* <Inputfield
              boxcustomStyle={styles.modalsearchbox}
              customStyles={styles.modalsearchcontainer}
              onChangeText={text =>
                 handleserchingofpref(text)
                }
              iconLeft={
                <View style={styles.preserach}>
                  <PlusIcon name="search1" size={width * 0.04} color={BLACK} />
                </View>
              }
              placeholder={'Search'}
              placeholderTextColor={'#6F757CB3'}
            /> */}
            <View style={styles.searchboxcontainer}>
              <View style={styles.preserach}>
                <PlusIcon name="search1" size={width * 0.04} color={BLACK} />
              </View>
              <TextInput style={styles.modalsearchcontainer}
                onChangeText={text =>
                  handleserchingofpref(text)
                }
                placeholder={'Search'}
                placeholderTextColor={'#6F757CB3'}
              />
            </View>
            <View style={styles.presubbox}>
              <ScrollView
                contentContainerStyle={styles.prescroll}
                nestedScrollEnabled={true}>
                {filteredItems.map((item, ind) => {
                  return (
                    <TouchableOpacity
                      key={ind}
                      onPress={() => handleselectedsubject(item)}>
                      <Text style={styles.presubname}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <ScrollView
              contentContainerStyle={[
                styles.modalchipbox,
                { marginVertical: height * 0.017, paddingBottom: height * 0.04 },
              ]}
              nestedScrollEnabled={true}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
              style={{ maxHeight: height * 0.2 }}>
              {selectedsubid.map((it, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.nameview}
                  onPress={() => handlecrosschip(it)}
                  activeOpacity={0.5}>
                  <Text style={styles.chipname}>{it?.name}</Text>
                  <View style={styles.chipcrossmodal}>
                    <Entypo name="cross" size={width * 0.03} color={GRAY} />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Button
              text={'Done'}
              customStyles={styles.btnpre}
              textStyle={styles.btnpretext}
              onPress={() => setOpenpreferenceModal(false)}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  ) :
    <>
      <ScrollView
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.mainContainer1}>
        <LinearGradient colors={['#F38314', '#DB3735']}
          style={styles.maincontainerTab}>
          <KeyboardAvoidingView>
            <View style={styles.middleContainer}>
              <View style={styles.IntroSliderTab}>
                <View style={styles.IntroSliderstyle}>
                  <View style={styles.Introsliderstyle} />
                  {sliderData && (
                    <IntroSliderTab
                      sliderData={sliderData}
                      customStyle={styles.IntroSlider}
                    />
                  )}
                </View>

                <View style={{ height: height / 1.78, width: width / 1.98, borderTopRightRadius: width * 0.015, borderBottomRightRadius: width * 0.016, backgroundColor: WHITE, overflow: 'hidden' }}>
                  <ScrollView bounces={false} showsVerticalScrollIndicator={false} overScrollMode='never' style={{ backgroundColor: WHITE, height: height / 1.78, width: width / 2, overflow: "hidden" }}>
                    <View style={styles.welcomeContainer}>
                      <Text style={styles.beinvisibleTab}>Be Invincible</Text>
                      <Text style={styles.createAccountTab}>Create an Account</Text>
                      <Text style={styles.createAccountasTab}>Create account as</Text>
                      <View style={styles.roleTab}>
                        {roles?.map(item => (
                          <TouchableOpacity
                            key={item?.id}
                            style={[
                              styles.roleboxTab,
                              selectedId === item?.id && styles.selectedrole, // Apply selected style based on id
                            ]}
                            onPress={() => handleSelectedRole(item?.id)} // Set selected role by id
                          >
                            <Text
                              style={[
                                styles.roleTextTab,
                                selectedId === item?.id && styles.selectedRoleTextTab, // Change text style if selected
                              ]}>
                              {item?.name}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                      <View style={styles.nameTab}>
                        <Inputfield
                          customStyles={styles.firstnameTab}
                          value={entry?.firstname}
                          placeholder="First Name*"
                          placeholderTextColor={'#75767699'}
                          onChangeText={text => {
                            setEntry(prevState => ({ ...prevState, firstname: text }));
                            if (text.length > 0) {
                              setEntryerror(prev => ({ ...prev, firstnameError: '' }));
                            }
                          }}
                        />
                        <Inputfield
                          customStyles={styles.lastnameTab}
                          value={entry?.lastname}
                          placeholder="Last Name"
                          placeholderTextColor={'#75767699'}
                          onChangeText={text =>
                            setEntry(prevState => ({ ...prevState, lastname: text }))
                          }
                        />
                      </View>
                      {entryerror && (
                        <View style={styles.errorboxTab}>
                          <Text style={styles.errormessageTab}>
                            {entryerror?.firstnameError}
                          </Text>
                        </View>
                      )}

                      <View style={styles.preferencecontainerTab}>
                        <View
                          style={[
                            styles.prebox1Tab,
                            {
                              borderBottomWidth: selectedsubid.length ? 0.8 : 0,
                              borderBottomColor: selectedsubid.length && GRAY,
                            },
                          ]}>
                          <Text style={styles.preferencetextTab}>Preferences*</Text>
                          <TouchableOpacity
                            onPress={() => setOpenpreferenceModalTab(true)}
                            style={{ right: '0%' }}>
                            <PlusIcon
                              name="pluscircle"
                              size={width * 0.025}
                              color={orange}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={[
                            styles.modalchipbox,
                            { marginVertical: selectedsubid.length ? height * 0.01 : 0 },
                          ]}>
                          {selectedsubid.map((it, index) => (
                            <TouchableOpacity
                              key={index}
                              style={styles.nameview2Tab}
                              onPress={() => handlecrosschip(it)}
                              activeOpacity={0.5}>
                              <Text style={styles.chipnameTab}>{it?.name}</Text>
                              <View style={styles.chipcrossmodalTab}>
                                <Entypo name="cross" size={width * 0.02} color={GRAY} />
                              </View>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                      {entryerror && (
                        <View style={styles.errorboxTab}>
                          <Text style={styles.errormessageTab}>
                            {entryerror.preferenceError}
                          </Text>
                        </View>
                      )}
                      <View style={{ alignSelf: 'center' }}>
                        <Inputfield
                          customStyles={styles.emailTab}
                          value={entry?.email}
                          placeholder="Email"
                          placeholderTextColor={'#75767699'}
                          onChangeText={text =>
                            setEntry(prevState => ({ ...prevState, email: text }))
                          }
                        />
                      </View>
                      <View style={{ alignSelf: 'center' }}>
                        <Inputfield
                          customStyles={styles.phoneTab}
                          placeholder="+91 Phone number"
                          value={`+91 ${entry?.phone}`}
                          keyboardType="number-pad"
                          onChangeText={text =>
                            setEntry(prevState => ({ ...prevState, phone: text }))
                          }
                        />
                      </View>
                      <View style={styles.conditioncontainerTab}>
                        <TouchableOpacity
                          hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}
                          style={[
                            styles.conditionboxTab,
                            { backgroundColor: conditionselected ? orange : null },
                          ]}
                          onPress={() => setConditionselected(!conditionselected)}>
                          {conditionselected ? (
                            <Icon name="check" size={width * 0.016} color={WHITE} />
                          ) : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setConditionselected(!conditionselected)}>
                          <Text style={styles.conditiontextTab}>
                            Please accept the terms & condition.
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>


                  </ScrollView>
                  <View style={styles.lineShadowTab} />
                  <View style={styles.alreadyContainerTab}>
                    <View style={styles.buttonviewTab}>
                      {loading ?
                        <Loadercommon />
                        :
                        <Button
                          icon2={ImagePath.longarrowright}
                          iconStyle2={styles.rightarrowimageTab}
                          customStyles={styles.buttonTab}
                          text={'Next'}
                          textStyle={styles.textStyle1Tab}
                          onPress={() => handleNext()}
                        />
                      }
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>


        </LinearGradient>

        <Modal
          visible={openpreferenceModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setOpenpreferenceModal(false)}>
          <View style={styles.outerpremodal}>
            <View style={styles.preinnermodal}>
              <Text style={styles.modalpretext}>Preferences</Text>

              <View style={styles.searchboxcontainer}>
                <View style={styles.preserach}>
                  <PlusIcon name="search1" size={width * 0.04} color={BLACK} />
                </View>
                <TextInput style={styles.modalsearchcontainer}
                  onChangeText={text =>
                    handleserchingofpref(text)
                  }
                  placeholder={'Search'}
                  placeholderTextColor={'#6F757CB3'}
                />
              </View>
              <View style={styles.presubbox}>
                <ScrollView
                  contentContainerStyle={styles.prescroll}
                  nestedScrollEnabled={true}>
                  {filteredItems.map((item, ind) => {
                    return (
                      <TouchableOpacity
                        key={ind}
                        onPress={() => handleselectedsubject(item)}>
                        <Text style={styles.presubname}>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>

              <ScrollView
                contentContainerStyle={[
                  styles.modalchipbox,
                  { marginVertical: height * 0.017, paddingBottom: height * 0.04 },
                ]}
                nestedScrollEnabled={true}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                style={{ maxHeight: height * 0.2 }}>
                {selectedsubid.map((it, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.nameview}
                    onPress={() => handlecrosschip(it)}
                    activeOpacity={0.5}>
                    <Text style={styles.chipname}>{it?.name}</Text>
                    <View style={styles.chipcrossmodal}>
                      <Entypo name="cross" size={width * 0.03} color={GRAY} />
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Button
                text={'Done'}
                customStyles={styles.btnpre}
                textStyle={styles.btnpretext}
                onPress={() => setOpenpreferenceModal(false)}
              />
            </View>
          </View>
        </Modal>

        <Modal
          visible={openpreferenceModalTab}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setOpenpreferenceModalTab(false)}>
          <View style={styles.outerpremodal}>
            <View style={styles.preinnermodalTab}>
              <Text style={styles.modalpretextTab}>Preferences</Text>

              <View style={styles.searchboxcontainerTab}>

                <TextInput style={styles.modalsearchcontainerTab}
                  onChangeText={text =>
                    handleserchingofpref(text)
                  }
                  placeholder={'Search'}
                  placeholderTextColor={'#6F757CB3'}
                />
                <View style={styles.preserachTab}>
                  <PlusIcon name="search1" size={width * 0.03} color={BLACK} />
                </View>
              </View>
              <View style={styles.presubboxTab}>
                <ScrollView
                  contentContainerStyle={styles.prescroll}
                  nestedScrollEnabled={true}>
                  {filteredItems.map((item, ind) => {
                    return (
                      <TouchableOpacity
                        key={ind}
                        onPress={() => handleselectedsubject(item)}>
                        <Text style={styles.presubnameTab}>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>

              <ScrollView
                contentContainerStyle={[
                  styles.modalchipboxTab,
                  { marginBottom: height * 0.017, marginTop: height * 0.005, paddingBottom: height * 0.2 },
                ]}
                nestedScrollEnabled={true}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                style={{ maxHeight: height * 0.3 }}>
                {selectedsubid.map((it, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.nameviewTab}
                    onPress={() => handlecrosschip(it)}
                    activeOpacity={0.5}>
                    <Text style={styles.chipnameTab}>{it?.name}</Text>
                    <View style={styles.chipcrossmodalTab}>
                      <Entypo name="cross" size={width * 0.02} color={GRAY} />
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Button
                text={'Done'}
                customStyles={styles.btnpreTab}
                textStyle={styles.btnpretextTab}
                onPress={() => setOpenpreferenceModalTab(false)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
};
export default Register;
