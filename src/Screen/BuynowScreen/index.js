import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import { styles } from './Style';
import RightArrow from 'react-native-vector-icons/Entypo';
import {
  BLACK,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  orange,
  RED,
  WHITE,
} from '../../values/Colors';
import Inputfield from '../../common/Inputfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../common/Button';
import { ImagePath } from '../../values/ImagePath';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from 'react-native-swiper-flatlist/src/themes';
import { ArrivingData1, ArrivingData2 } from '../../values/Utility';
import {
  IsidoraBold,
  IsidoraLight,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../values/Fonts';
import Arriving from '../../common/Arriving';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
let isTablet = DeviceInfo.isTablet();

const Buynow = () => {
  const [showContent, setShowContent] = useState('delivery');
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);
  const [checkAddress, setCheckAddress] = useState("House");

  const [isCheckWeeks, setIsCheckWeeks] = useState(null);

  const [selectedPaymentmode, setSelectedPaymentmode] = useState({
    arihant: false,
    credit: false,
    netbanking: false,
    other: false,
    cashondelivery: false,
  });
  const [selectedorederinformation, setSelectedorederinformation] = useState({
    save: false,
    passwordreq: false,
    impmessage: false,
  });
  const [conditionselected, setConditionselected] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('01'); // Default to January
  const [selectednetbankingItem, setSelectednetbankingItem] =
    useState('Choose an option');
  const [selectedYear, setSelectedYear] = useState(''); // Default year
  const [years, setYears] = useState([]); // Years to be dynamically populated
  const BankingData = [
    { label: 'Choose an option', value: 'Choose an option' },
    { label: 'Choose an option', value: 'Choose an option' },
  ];
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [currentLocationdata, setCurrentLocationdata] = useState(null);
  const [islocationFetched, setIslocationFetched] = useState(false);
  const locationAPIKEY = 'AIzaSyAnrLQq4LPedUb4uI8MQQjyRU_23UvTfmQ';

  const handleCheck = (index) => {
    setIsCheckWeeks(index === isCheckWeeks ? null : index); // Toggle the same index or select a new one
  };
  const navigation = useNavigation()
  const months = [
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
    { label: '06', value: '06' },
    { label: '07', value: '07' },
    { label: '08', value: '08' },
    { label: '09', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
  ];
  const weeks = [
    { name: "Moday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
    { name: "Sunday" },

  ]
  const fetchLocation = () => {
    setIslocationFetched(true);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setLocation(location);
        console.log('Location is', location);
        const { latitude, longitude } = location;
        fetchLocationData(latitude, longitude);
      })
      .catch(error => {
        const { code, message } = error;
        setError(`error,${message}`);
        console.warn(code, message);
      });
  };
  const fetchLocationData = async (latitude, longitude) => {
    try {
      // Make the API call to Google Maps Geocoding API
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${locationAPIKEY}`,
      );

      // Check if response contains valid data
      if (response.data && response.data.results.length > 0) {
        const LocationData = response?.data.results[0];

        const address_components = LocationData?.address_components;
        const formattedAddress = {
          houseNumber: getAddressComponent(address_components, 'street_number'),
          street: getAddressComponent(address_components, 'route'),
          area: getAddressComponent(address_components, 'sublocality_level_1'),
          landmark: getAddressComponent(address_components, 'landmark'),
          pincode: getAddressComponent(address_components, 'postal_code'),
          city: getAddressComponent(address_components, 'locality'),
        };
        setCurrentLocationdata(formattedAddress);
        setIslocationFetched(false);
      } else {
        setError('No location data available');
        console.warn('No location data available');
      }
    } catch (error) {
      // Handle errors related to the API request
      console.error('Error fetching location data:', error);
      setError('Failed to fetch location data');
    }
  };
  const getAddressComponent = (components, type) => {
    const component = components.find(item => item.types.includes(type));
    return component ? component.long_name : '';
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const futureYears = Array.from({ length: 16 }, (v, i) => ({
      label: (currentYear + i).toString(),
      value: (currentYear + i).toString(),
    }));
    setYears(futureYears);
    setSelectedYear(currentYear.toString()); // Set default year as current year
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView style={styles.mainContainer}>
          <View style={styles.subMainContainer1}>
            <Text style={styles.nameText}>Nitin Kumar</Text>
            <TouchableOpacity
              onPress={() => {
                setShowContent('delivery');
              }}
              style={[
                styles.delivery,
                showContent == 'delivery' && { borderBottomColor: LIGHTGRAY2 },
              ]}>
              {showContent == 'delivery' ? (
                <View style={isTablet ? { flexDirection: "row", justifyContent: "space-between", width: width / 1.12, alignItems: "center" } : {}}>
                  <Text style={styles.deliveryText}>Add delivery address</Text>

                  {
                    isTablet &&
                    <TouchableOpacity style={styles.location} onPress={fetchLocation}>
                      <Text style={styles.autofill}>
                        {islocationFetched ? (
                          <ActivityIndicator size={'small'} color={RED} />
                        ) : (
                          'Autofill your current location'
                        )}
                      </Text>
                    </TouchableOpacity>
                  }
                </View>
              ) : (
                <>
                  <Text style={styles.deliveryText}>Delivery address</Text>
                  <RightArrow name="chevron-thin-right" size={15} color={BLACK} />
                </>
              )}
            </TouchableOpacity>
            {showContent == 'delivery' && (
              <>
                {
                  !isTablet ?
                    <>
                      <View>
                        <Text style={styles.fullnametext}>
                          Full name (First and Last name)
                        </Text>
                        <Inputfield customStyles={styles.fullnameinput} />
                      </View>
                      <View style={styles.mobilenumberContainer}>
                        <View>
                          <Text style={styles.mobilenumbertext}>Mobile Number</Text>
                          <Inputfield customStyles={styles.MobileInputTab} />
                        </View>
                        <View>
                          <Text style={styles.mobilenumbertext}>
                            Alternate Mobile Number
                          </Text>
                          <Inputfield customStyles={styles.MobileInputTab} />
                        </View>
                      </View>
                    </> :
                    <View style={isTablet ? { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: width / 1.1 } : {}}>
                      <View>
                        <Text style={styles.fullnametext}>
                          Full name (First and Last name)
                        </Text>
                        <Inputfield customStyles={styles.fullnameinput} />
                      </View>
                      <View>
                        <Text style={styles.mobilenumbertext}>Mobile Number</Text>
                        <Inputfield customStyles={styles.MobileInputTab} />
                      </View>
                      <View>
                        <Text style={styles.mobilenumbertext}>
                          Alternate Mobile Number
                        </Text>
                        <Inputfield customStyles={styles.MobileInputTab} />
                      </View>
                    </View>
                }

                <View style={styles.emailContainer}>
                  <View>
                    <Text style={styles.emailtext}>Email</Text>
                    <Inputfield customStyles={styles.EmailInput} />
                  </View>
                  <View>
                    <Text style={styles.emailtext}>Country/Region</Text>
                    <View style={styles.country}>
                      <Text style={styles.countrytext}>India</Text>
                      <RightArrow
                        name="chevron-thin-down"
                        size={15}
                        color={BLACK}
                      />
                    </View>
                  </View>
                </View>

                {
                  !isTablet &&
                  <TouchableOpacity style={styles.location} onPress={fetchLocation}>
                    <Text style={styles.autofill}>
                      {islocationFetched ? (
                        <ActivityIndicator size={'small'} color={RED} />
                      ) : (
                        'Autofill your current location'
                      )}
                    </Text>
                  </TouchableOpacity>
                }

                <View style={styles.address}>
                  <Text style={styles.countrytext}>
                    Flat, House no., Building, Company, Apartment
                  </Text>
                  <Inputfield
                    customStyles={styles.fullnameinput2}
                    value={currentLocationdata?.houseNumber}
                  />
                </View>

                <View style={styles.mobilenumberContainer}>
                  <View>
                    <Text style={styles.mobilenumbertext}>
                      Area, Street, Village
                    </Text>
                    <Inputfield
                      customStyles={styles.MobileInput}
                      value={currentLocationdata?.area}
                    />
                  </View>
                  <View>
                    <Text style={styles.mobilenumbertext}>Landmark</Text>
                    <Inputfield
                      placeholder={'Eg. near apollo hospital'}
                      customStyles={styles.MobileInput}
                      value={currentLocationdata?.landmark}
                    />
                  </View>
                </View>

                <View style={styles.mobilenumberContainer}>
                  <View>
                    <Text style={styles.mobilenumbertext}>Pincode</Text>
                    <Inputfield
                      placeholder={'6 digit [0-9] pin code'}
                      customStyles={isTablet ? styles.MobileInputTab : styles.MobileInput}
                      value={currentLocationdata?.pincode}
                    />
                  </View>
                  <View>
                    <Text style={styles.mobilenumbertext}>Town/City</Text>
                    <Inputfield
                      customStyles={isTablet ? styles.MobileInputTab : styles.MobileInput}
                      value={currentLocationdata?.city}
                    />
                  </View>
                  {
                    isTablet &&
                    <View style={styles.stateContainer}>
                      <Text style={styles.emailtext}>State</Text>
                      <View style={styles.state}>
                        <Text style={styles.countrytext}>Choose a state</Text>
                        <RightArrow name="chevron-thin-down" size={15} color={BLACK} />
                      </View>
                    </View>
                  }
                </View>

                {
                  !isTablet &&
                  <View style={styles.stateContainer}>
                    <Text style={styles.emailtext}>State</Text>
                    <View style={styles.state}>
                      <Text style={styles.countrytext}>Choose a state</Text>
                      <RightArrow name="chevron-thin-down" size={15} color={BLACK} />
                    </View>
                  </View>
                }

                <View style={styles.conditioncontainer}>
                  <TouchableOpacity
                    style={[
                      styles.conditionbox,
                      { backgroundColor: isAcceptTerm ? GRAY : null },
                    ]}
                    onPress={() => setIsAcceptTerm(!isAcceptTerm)}>
                    {isAcceptTerm ? (
                      <Icon style={{ bottom: width * 0.0035 }} name="check" size={height * 0.02} color={WHITE} />
                    ) : null}
                  </TouchableOpacity>
                  <Text style={styles.conditiontext}>
                    Make this is my default address
                  </Text>
                </View>
                <View style={styles.addressOptions}>
                  <TouchableOpacity style={styles.addresstype}>
                    <Text style={styles.Addresstypetext}>
                      Address Type (Optional)
                    </Text>
                    <RightArrow name="chevron-thin-right" size={isTablet ? width * 0.015 : width * 0.03} color={BLACK} />
                  </TouchableOpacity>
                  {
                    isTablet &&
                    <View>

                      <View style={styles.optioncontainer}>
                        <TouchableOpacity onPress={()=>{setCheckAddress("House")}} style={checkAddress == "House" ? styles.activeaddresstypeOptionTextContainer : styles.addresstypeOptionTextContainer}>
                          <Text style={checkAddress=="House"?styles.activehometext:styles.hometext}>House</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{setCheckAddress("Office")}} style={checkAddress == "Office" ? styles.activeaddresstypeOptionTextContainer : styles.addresstypeOptionTextContainer}>
                          <Text style={checkAddress=="Office"?styles.activehometext:styles.hometext}>Office</Text>

                        </TouchableOpacity>


                      </View>

                      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: "1%" }}>
                        {
                          weeks?.map((value, index) => {
                            return <View>
                              <View style={styles.conditioncontainerweeks}>
                                <TouchableOpacity
                                  style={[
                                    styles.conditionboxWeeks,
                                    { backgroundColor: isCheckWeeks === index ? GRAY : null },
                                  ]}
                                  onPress={() => handleCheck(index)}
                                >
                                  {isCheckWeeks === index && (
                                    <Icon style={{ bottom: width * 0.0005 }} name="check" size={height * 0.008} color={WHITE} />
                                  )}
                                </TouchableOpacity>
                                <Text style={styles.conditiontextWeeks}>
                                  {
                                    value?.name
                                  }
                                </Text>
                              </View>
                            </View>

                          })
                        }
                      </View>
                      <Text style={styles.deliverytext}>6 Am -11 PM delivery</Text>
                    </View>

                  }

                </View>

                <View style={styles.addressbuttonview}>
                  <Button
                    onPress={() => {
                      setShowContent('payment');
                    }}
                    text={'Use this address'}
                    customStyles={styles.addressbutton}
                    textStyle={styles.addresstext}
                  />
                </View>
              </>
            )}

            <TouchableOpacity
              onPress={() => {
                setShowContent('payment');
              }}
              style={[
                styles.paymenttext,
                showContent == 'payment' && { borderBottomWidth: 0 },
              ]}>
              {showContent == 'payment' ? (
                <Text style={styles.deliveryText}>Select Payment Method</Text>
              ) : (
                <>

                 {
                  isTablet?
                
                  <View style={styles.AddContainer}>

                   <Text style={styles.deliveryText}>Payment Method</Text>
                   <TouchableOpacity style={styles.addButton}>
<Text style={styles.addText}>+   Add</Text>
                   </TouchableOpacity>
                  </View>
                  
                 
                  :
                  <>
                   <Text style={styles.deliveryText}>Payment Method</Text>
                   <RightArrow name="chevron-thin-right" size={15} color={BLACK} />
                  </>
                 }
                </>
              )}
            </TouchableOpacity>
            {showContent == 'payment' && (
              <>
                <View style={styles.paymentContainer}>
                  <View style={styles.subpaymentContainer}>
                    <Text style={styles.Avilablebalance}>
                      Your available balance
                    </Text>
                    <View style={styles.conditioncontainer2}>
                      <TouchableOpacity
                        style={[
                          styles.conditionboxx,
                          {
                            backgroundColor: selectedPaymentmode.arihant
                              ? GRAY
                              : null,
                          },
                        ]}
                        onPress={() =>
                          setSelectedPaymentmode(prevState => ({
                            ...prevState,
                            arihant: !prevState.arihant,
                          }))
                        }>
                        {selectedPaymentmode.arihant ? (
                          <Icon name="check" style={{ bottom: isTablet ? width * 0.0005 : width * 0.0015 }} size={isTablet ? height * 0.013 : height * 0.02} color={WHITE} />
                        ) : null}
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'column' }}>
                        <View style={isTablet ? { flexDirection: "row", alignItems: "center" } : {}}>
                          <Text style={styles.conditiontext}>
                            Use your <Text style={styles.rupee}>₹</Text> 00.00 Arihant Plus discount/Pay Balance
                          </Text>
                          {
                            isTablet &&
                            <Text style={styles.Addbalancetextblack}>Add Balance</Text>
                          }

                        </View>

                        <View style={styles.InsufficientContainer}>
                          <View
                            style={{ flexDirection: 'row', alignItems: 'center',marginLeft:isTablet?'10%':null}}>
                            <View style={styles.errormsg}>
                              <Text style={{ color: WHITE, fontSize: isTablet ? width * 0.02 : width * 0.03, fontFamily: IsidoraSemiBold }}>!</Text>
                            </View>
                            <Text style={styles.Insufficienttext}>
                              Insufficient balance.
                            </Text>
                          </View>
                          {
                            !isTablet &&
                            <Text style={styles.Addbalancetext}>Add Balance</Text>
                          }
                        </View>
                      </View>
                    </View>
                    <View style={styles.codeboxContainer}>
                      <RightArrow size={isTablet ? width*0.035 : 20} name="plus" color={'gray'} />
                      <Inputfield
                        customStyles={styles.codeinput}
                        placeholder={'Enter Code'}
                        placeholderTextColor={'#6F757C80'}
                      />
                      <Button
                        customStyles={styles.ApplyButton}
                        text={'Apply'}
                        textStyle={styles.applytext}
                      />
                    </View>

                    <Text style={[styles.Avilablebalance, { marginTop:isTablet?'5%':'8%' }]}>
                      Another Payment Method
                    </Text>
                    <View style={styles.creditcardcontainer}>
                      <View style={styles.conditioncontainer3}>
                        <TouchableOpacity
                          style={[
                            styles.conditionboxx,
                            {
                              marginLeft: '-1%',
                              marginRight: '2%',
                              backgroundColor: selectedPaymentmode.credit
                                ? WHITE
                                : null,
                            },
                          ]}
                          onPress={() =>
                            setSelectedPaymentmode(prevState => ({
                              ...prevState,
                              credit: !prevState.credit,
                            }))
                          }>
                          {selectedPaymentmode.credit ? (
                            // <Icon name="circle" size={width*0.04} style={{margin:height * 0.001}} color={RED} />
                            <View style={styles.circle} />
                          ) : null}
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                          <Text style={styles.debitcardtext}>
                            Credit or debit card
                          </Text>
                          <View style={styles.InsufficientContainer}>
                            <View
                              style={{
                                marginTop: '3%',
                              }}>
                              <Image
                                source={ImagePath.debitcard}
                                style={styles.debitcardimages}
                              />
                            </View>
                          </View>
                          <View style={styles.cardcontainer}>
                            <Text style={styles.cardnumbertext}>Card number </Text>
                            <Inputfield customStyles={styles.cardInput} />
                          </View>
                          <View style={styles.cardcontainer}>
                            <Text style={styles.cardnumbertext}>Nickname </Text>
                            <Inputfield customStyles={styles.cardInput} />
                          </View>

                          <View style={styles.datecontainer}>
                            <Text style={styles.label}>Expiry Date</Text>

                            <View style={styles.pickerContainer}>
                              {/* Month Dropdown */}
                              <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropdownContainer}
                                data={months}
                                labelField="label"
                                valueField="value"
                                value={selectedMonth}
                                onChange={item => {
                                  setSelectedMonth(item.value);
                                }}
                                selectedTextStyle={styles.dropdowndatetext}
                              />

                              {/* Year Dropdown */}
                              <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropdownContainer}
                                data={years}
                                labelField="label"
                                valueField="value"
                                value={selectedYear}
                                onChange={item => {
                                  setSelectedYear(item.value);
                                }}
                                selectedTextStyle={styles.dropdowndatetext}
                              />
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.enterdetailcontainer}>
                        <Text style={styles.pleaseensure}>
                          Please ensure that you enable your card for online
                          payments from your bank’s app.
                        </Text>

                        <View style={styles.buttonContainer}>
                          <Button
                            customStyles={styles.cancelButton}
                            text={'Cancel'}
                            textStyle={styles.buttontext}
                          />
                          <Button
                            customStyles={styles.carddetailbutton}
                            text={'Enter card details'}
                            textStyle={styles.buttontext2}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.conditioncontainer4}>
                      <TouchableOpacity
                        style={[
                          styles.conditionboxx,
                          {
                            marginLeft: '-1%',
                            marginRight: '2%',
                            backgroundColor: selectedPaymentmode.netbanking
                              ? WHITE
                              : null,
                          },
                        ]}
                        onPress={() =>
                          setSelectedPaymentmode(prevState => ({
                            ...prevState,
                            netbanking: !prevState.netbanking,
                          }))
                        }>
                        {selectedPaymentmode.netbanking ? (
                          <Icon name="circle" size={isTablet ? width * 0.025 : width * 0.04} color={RED} />
                        ) : null}
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.debitcardtext}>Net Banking</Text>

                        <View style={styles.datecontainer2}>
                          <View style={styles.pickerContainernet}>
                            {/* Month Dropdown */}
                            <Dropdown
                              style={styles.dropdown2}
                              containerStyle={styles.dropdownContainer}
                              data={BankingData}
                              labelField="label"
                              valueField="value"
                              value={selectednetbankingItem}
                              onChange={item => {
                                setSelectedMonth(item.value);
                              }}
                              selectedTextStyle={styles.selectedDropText}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.conditioncontainer4}>
                      <TouchableOpacity
                        style={[
                          styles.conditionboxx,
                          {
                            marginLeft: '-1%',
                            marginRight: '2%',
                            backgroundColor: selectedPaymentmode.other
                              ? WHITE
                              : null,
                          },
                        ]}
                        onPress={() =>
                          setSelectedPaymentmode(prevState => ({
                            ...prevState,
                            other: !prevState.other,
                          }))
                        }>
                        {selectedPaymentmode.other ? (
                          <Icon name="circle" size={isTablet ? width * 0.025 : width * 0.04} color={RED} />
                        ) : null}
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.debitcardtext}>Other UPI Apps</Text>
                        <Text style={styles.enterupitext1}>
                          Please enter your UPI ID
                        </Text>
                        <View style={styles.verifycontainer}>
                          <Inputfield
                            customStyles={styles.upiInput}
                            placeholderTextColor={LIGHTGREYTEXT}
                            placeholder={'ENTER UPI ID'}
                          />
                          <Button
                            customStyles={styles.veryfyButton}
                            text={'Verify'}
                            textStyle={isTablet?styles.verifyButtonText:null}
                          />
                        </View>
                        <Text style={styles.enterupitext2}>
                          The UPI ID is in the format of name/phone number@bankname
                        </Text>
                      </View>
                    </View>

                    <View style={isTablet ? styles.conditioncontainer4Tab : styles.conditioncontainer4}>
                      <TouchableOpacity
                        style={[
                          styles.conditionboxx,
                          {
                            marginLeft: '-1%',
                            marginRight: '2%',
                            backgroundColor: selectedPaymentmode.cashondelivery
                              ? WHITE
                              : null,
                          },
                        ]}
                        onPress={() =>
                          setSelectedPaymentmode(prevState => ({
                            ...prevState,
                            cashondelivery: !prevState.cashondelivery,
                          }))
                        }>
                        {selectedPaymentmode.cashondelivery ? (
                          <Icon name="circle" size={isTablet ? width * 0.025 : width * 0.04} color={RED} />
                        ) : null}
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.debitcardtext2}>
                          Cash on Delivery/Pay on Delivery
                        </Text>
                        <Text style={styles.enterupitext3}>
                          Cash, UPI and cards accepted.
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.paymentbuttoncontainer}>
                    <Button
                      onPress={() => {
                        setShowContent('itemanddelivery');
                      }}
                      text={'Use this payment method'}
                      customStyles={styles.paymentbutton}
                      textStyle={styles.usethistext}
                    />
                  </View>
                </View>
              </>
            )}
          </View>
          <View style={styles.subMainContainer}>
            <TouchableOpacity
              onPress={() => {
                setShowContent('itemanddelivery');
              }}
              style={[
                styles.itemsdelivery,
                showContent == 'itemanddelivery' && { borderBottomWidth: 0, borderTopWidth: 0 },
                showContent == 'payment' && {
                  paddingTop: '4%',
                  borderTopWidth: 1,
                  borderTopColor:GRAY
                }
              ]}>
              <Text style={styles.deliveryText}>Items and delivery</Text>
            {
              !isTablet ?
              <>
                {showContent !== 'itemanddelivery' && (
                <RightArrow name="chevron-thin-right" size={15} color={BLACK} />
              )}
              </>
              :
              <>
              
              {showContent !== 'itemanddelivery' && (
                // <RightArrow name="chevron-thin-right" size={15} color={BLACK} />
                <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>Review Order</Text>
                                   </TouchableOpacity>
              )}
              </>
            }
            </TouchableOpacity>
            {showContent == 'itemanddelivery' && (
              <>
                <View style={styles.itemanddeliveryfirstcontentcontainer}>
                  <View style={styles.conditioncontainer5}>
                    <TouchableOpacity
                      style={[
                        styles.conditionboxx2,
                        {
                          backgroundColor: selectedorederinformation.save
                            ? RED
                            : null,
                        },
                      ]}
                      onPress={() =>
                        setSelectedorederinformation(prevState => ({
                          ...prevState,
                          save: !prevState.save,
                        }))
                      }>
                      {selectedorederinformation.save ? (
                        <Icon name="check" size={height * 0.015} color={WHITE} />
                      ) : null}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.enterupitext4}>
                        Save your checkout settings as the default for future orders
                      </Text>
                    </View>
                  </View>
                  <View style={styles.conditioncontainer5}>
                    <TouchableOpacity
                      style={[
                        styles.conditionboxx2,
                        {
                          backgroundColor: selectedorederinformation.passwordreq
                            ? RED
                            : null,
                        },
                      ]}
                      onPress={() =>
                        setSelectedorederinformation(prevState => ({
                          ...prevState,
                          passwordreq: !prevState.passwordreq,
                        }))
                      }>
                      {selectedorederinformation.passwordreq ? (
                        <Icon name="check" size={height * 0.015} color={WHITE} />
                      ) : null}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.enterupitext4}>
                        One-time password required at time of delivery
                      </Text>
                    </View>
                  </View>
                  <View style={styles.conditioncontainer5}>
                    <TouchableOpacity
                      style={[
                        styles.conditionboxx2,
                        {
                          backgroundColor: selectedorederinformation.impmessage
                            ? RED
                            : null,
                        },
                      ]}
                      onPress={() =>
                        setSelectedorederinformation(prevState => ({
                          ...prevState,
                          impmessage: !prevState.impmessage,
                        }))
                      }>
                      {selectedorederinformation.impmessage ? (
                        <Icon name="check" size={height * 0.015} color={WHITE} />
                      ) : null}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.enterupitext4}>
                        There are 2 important message about items in your order.
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Arriving item={ArrivingData1} />
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Arriving item={ArrivingData2} />
                </View>

                {
                  !isTablet ? <View style={styles.ordersummary}>
                    <View style={styles.subordersummary}>
                      <Text style={styles.securely}>
                        You'll be securely redirected to payment gateway to enter your
                        password and complete your purchase.
                      </Text>
                      <Text style={styles.securely1}>Order Summary</Text>
                      <View style={styles.orderdetialtextcontainer}>
                        <Text style={styles.securely}>Items:</Text>
                        <Text style={styles.securely}> 1,219.00</Text>
                      </View>
                      <View style={styles.orderdetialtextcontainer}>
                        <Text style={styles.securely}>Delivery:</Text>
                        <Text style={styles.securely}>0.00</Text>
                      </View>

                      <View style={styles.orderTotaltextcontainer}>
                        <Text style={styles.totalordertext}>Order Total:</Text>
                        <Text style={[styles.totalordertext, { fontFamily: IsidoraBold }]}>₹ 1,219</Text>
                      </View>
                      <Text style={styles.savingtext}>
                        Your Savings: ₹ 441.00 (36%)
                      </Text>
                      <View style={styles.itemcontainer}>
                        <View style={styles.dot}></View>
                        <Text style={styles.itemdiscount}>Item discount</Text>
                      </View>
                    </View>
                    <View style={styles.deliverycosttextcontainer}>
                      <Text style={styles.costtext}>
                        How are delivery costs calculated?
                      </Text>
                    </View>
                  </View>
                    :
                    <View style={styles.ordersummary}>
                      <View style={styles.subordersummary}>
                        <View style={{ flexDirection: "row", alignItems: "center", width: width * 0.82, justifyContent: "space-between" }}>
                          <Button
                            text={'Place Your Order and Pay'}
                            customStyles={styles.placeorderbutton}
                            textStyle={styles.placeordertext}
                            onPress={() => {
                              navigation.navigate("ThankyouScreen")
                            }}

                          />
                          <View style={styles.orderTotaltextcontainerTab}>
                            <Text style={styles.totalordertext}>Order Total:</Text>
                            <Text style={[styles.totalordertext, { fontFamily: IsidoraBold }]}>₹ 1,219</Text>
                          </View>

                        </View>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", width: width * 0.87, justifyContent: "space-between" }}>

                          <Text style={styles.securely}>
                            You'll be securely redirected to payment gateway to enter your
                            password and complete your purchase.
                          </Text>
                          <Text style={[styles.securely,{fontFamily:isTablet?IsidoraSemiBold:IsidoraMedium,color:isTablet?LIGHTGREYTEXT:DARKGRAY}]}>
                            By placing your order, you agree to Arihant Plus. Terms and conditions
                          </Text>
                        </View>



                      </View>

                    </View>
                }
                {
                  !isTablet &&
                  <>

                    <Button
                      text={'Place Your Order and Pay'}
                      customStyles={styles.placeorderbutton}
                      textStyle={styles.placeordertext}
                      onPress={() => {
                        navigation.navigate("ThankyouScreen")
                      }}

                    />
                    <Text style={styles.arihantplustext}>
                      By placing your order, you agree to Arihant Plus{' '}
                    </Text>
                    <Text style={styles.termstext}> Terms and conditions.</Text>
                    <View style={styles.line}></View>
                  </>

                }


              </>
            )}
                    <View style={styles.line}></View>

            <Text style={styles.needhelptext}>
              Need help? Check our <Text style={styles.orangetext}>help pages</Text>{' '}
              or <Text style={styles.orangetext}>contact us</Text>.
            </Text>
            <Text style={styles.needhelptext}>
              When your order is placed, we'll send you an e-mail message
              acknowledging receipt of your order. If you choose to pay using an
              electronic payment method (credit card, debit card or net banking),
              you will be directed to your bank's website to complete your payment.
              Your contract to purchase an item will not be complete until we
              receive your electronic payment and dispatch your item. If you choose
              to pay using Pay on Delivery (POD), you can pay using cash/card/net
              banking when you receive your item.
            </Text>
            <Text style={styles.needhelptext}>
              See Arihant Plus <Text style={styles.orangetext}>Return Policy</Text>.
            </Text>
            <Text style={styles.needhelptext}>
              Need to add more items to your order? Continue shopping on the{' '}
              <Text style={styles.orangetext}>Arihant Plus homepage</Text>.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  );
};

export default Buynow;
