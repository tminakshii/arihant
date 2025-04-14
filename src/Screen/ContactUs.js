import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../common/Header';
import {ImagePath} from '../values/ImagePath';
import {
  IsidoraBlack,
  IsidoraBold,
  IsidoraMedium,
  IsidoraSemiBold,
} from '../values/Fonts';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  orange,
  RED,
  WHITE,
  Yellow,
} from '../values/Colors';
import Inputfield from '../common/Inputfield';
import Button from '../common/Button';
import {withDecay} from 'react-native-reanimated';
import ContactUsMap from '../common/ContactUsMap';
const {width, height} = Dimensions.get('window');

const contactData = [
  {
    icon: ImagePath?.CallIcon,
    heading: 'Call Us',
    description:
      'Just pick up the phone to chat with our customer support team.',
    mainDetails: '+91-11-40546380',
  },
  {
    icon: ImagePath?.ClockIcon,

    heading: 'Working Hours',
    description: 'We appreciate you respecting our available time.',
    mainDetails: '09:30 am - 05:30 pm Monday to Saturday',
  },
  {
    icon: ImagePath?.MailIcon,

    heading: 'Mail Us',
    description: 'Drop us a message. We’ll be glad to answer it. ',
    mainDetails: 'crm@arihantbooks.com',
  },
];

const officeaddressData = [
  {
    heading: 'HEAD OFFICE',
    address:
      '55 NH-58, Delhi-Dehradun Bypass Road, Near Big Bite Resort, Partapur, Meerut - 250103',
    mail: 'info@arihantbooks.com',
  },
  {
    heading: 'CORPORATE OFFICE',
    address:
      '55 NH-58, Delhi-Dehradun Bypass Road, Near Big Bite Resort, Partapur, Meerut - 250103',
    number: '+91-120-3132836',
    mail: 'info@arihantbooks.com',
  },
  {
    heading: 'GRIEVANCE REDRESSAL OFFICER',
    number: '+91-120-3132836',

    mail: 'info@arihantbooks.com',
  },
];

const addressEmailData = [
  {
    keyName: 'A',
    data: [
      {
        name: 'Agra',
        phone: '0562-2601886, 9219022788',
        email: 'agra.arihant@gmail.com',
      },
      {
        name: 'Ahmedabad',
        phone: '9219006325, 8410342539',
        email: 'arihant.ahmedabadbranch@gmail.com',
      },
    ],
  },
  {
    keyName: 'B',
    data: [
      {
        name: 'Bareilly',
        phone: '9219477790',
        email: 'bareilly@arihantbooks.com',
      },
      {
        name: 'Bengaluru',
        phone: '080-23475560, 09219641314',
        email: 'arihantbengaluru@arihantbooks.com',
      },
      {
        name: 'Bhubaneshwar',
        phone: '9238422337',
        email: 'meerutbranch.arihant@gmail.com',
      },
      {
        name: 'Bihar & Jharkhand',
        phone: '9219567021',
        email: 'sonia@arihantbooks.com',
      },
    ],
  },
  {
    keyName: 'D',
    data: [
      {
        name: 'Delhi',
        phone: '011-47630600, 9310065885',
        email: 'arihant.delhil@gmail.com',
      },
    ],
  },
  {
    keyName: 'G',
    data: [
      {
        name: 'Guwahati',
        phone: '08811908718',
        email: 'arihant_guwahati@yahoo.co.in',
      },
    ],
  },
  {
    keyName: 'H',
    data: [
      {
        name: 'Haryana',
        phone: '0120-4102404, 9219641334',
        email: 'arihant_delhi07@yahoo.co.in',
      },
      {
        name: 'HP - Punjab - J&K',
        phone: '0120-4240505, 92196410',
        email: 'arihantjalandhar@gmail.com',
      },
      {
        name: 'Hyderabad',
        phone: '8125-34774',
        email: ' hyd.arihant@gmail.com',
      },
    ],
  },
  {
    keyName: 'J',
    data: [
      {
        name: 'Jaipur',
        phone: '0141-4042386, 9460056188',
        email: 'arihant.jaipurbranch@gmail.com',
      },
      {
        name: 'Jhansi',
        phone: '0510-2440849, 9219006580',
        email: 'jhansi@arihantbooks.com',
      },
    ],
  },
  {
    keyName: 'K',
    data: [
      {
        name: 'Kollkata',
        phone: '7890269000, 9735321175',
        email: 'kolkataarihantbooks@gmail.com',
      },
    ],
  },
  {
    keyName: 'L',
    data: [
      {
        name: 'Lucknow',
        phone: '7617590041, 9235603654',
        email: 'lucknow@arihantbooks.com',
      },
    ],
  },
  {
    keyName: 'M',
    data: [
      {
        name: 'Meerut',
        phone: '121-2401479',
        email: 'meerutbranch.arihant@gmail.com',
      },
    ],
  },
  {
    keyName: 'N',
    data: [
      {
        name: 'Nagpur',
        phone: '0712-2749988, 7218408145',
        email: 'arihantprakashan.nagpur@gmail.com',
      },
    ],
  },
  {
    keyName: 'P',
    data: [
      {
        name: 'Pune',
        phone: '020-26386511, 020-26381316, 9405223138',
        email: 'arihantpublication.pune@gmail.com',
      },
    ],
  },
];

// const addressEmailData = {
//   A: [
//     {
//       name: 'Agra',
//       phone: '0562-2601886, 9219022788',
//       email: 'agra.arihant@gmail.com',
//     },
//     {
//       name: 'Ahmedabad',
//       phone: '9219006325, 8410342539',
//       email: 'arihant.ahmedabadbranch@gmail.com',
//     },
//   ],
//   B: [
//     {
//       name: 'Bareilly',
//       phone: '9219477790',
//       email: 'bareilly@arihantbooks.com',
//     },
//     {
//       name: 'Bengaluru',
//       phone: '080-23475560, 09219641314',
//       email: 'arihantbengaluru@arihantbooks.com',
//     },
//     {
//       name: 'Bhubaneshwar',
//       phone: '9238422337',
//       email: 'meerutbranch.arihant@gmail.com',
//     },
//     {
//       name: 'Bihar & Jharkhand',
//       phone: '9219567021',
//       email: 'sonia@arihantbooks.com',
//     },
//   ],
//   D: [
//     {
//       name: 'Delhi',
//       phone: '011-47630600, 9310065885',
//       email: 'arihant.delhil@gmail.com',
//     },
//   ],
//   G: [
//     {
//       name: 'Guwahati',
//       phone: '08811908718',
//       email: 'arihant_guwahati@yahoo.co.in',
//     },
//   ],
//   H: [
//     {
//       name: 'Haryana',
//       phone: '0120-4102404, 9219641334',
//       email: 'arihant_delhi07@yahoo.co.in',
//     },
//     {
//       name: 'HP - Punjab - J&K',
//       phone: '0120-4240505, 92196410',
//       email: 'arihantjalandhar@gmail.com',
//     },
//   ],
// };

const ContactUs = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView bounces={false} overScrollMode="false">
        <Image source={ImagePath?.contactus} style={styles.ImageStyle} />
        <View style={styles.container}>
          <Text style={styles.home}>
            Home /<Text style={styles.contact}> Contact Us</Text>
          </Text>

          <FlatList
            data={contactData}
            contentContainerStyle={{marginTop: '10%'}}
            renderItem={({item}) => {
              return (
                <View style={styles.contactDetailView}>
                  <View style={styles.headingview}>
                    <Image source={item?.icon} style={styles.iconstyle} />
                    <Text style={styles.headingText}>{item?.heading}</Text>
                  </View>
                  <Text style={styles.descriptionText}>
                    {item?.description}
                  </Text>
                  <Text style={styles.mainText}>{item?.mainDetails}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.contactUsDetialContainer}>
          <Text style={styles.headingText}>Contact Us</Text>
          <View style={styles.inputContainer}>
            <Inputfield customStyles={styles.nameinput} placeholder={'Name'} />
            <Inputfield customStyles={styles.nameinput} placeholder={'Email'} />
          </View>
          <Inputfield
            customStyles={styles.subjectInput}
            placeholder={'Subject'}
          />
          <Inputfield
            customStyles={styles.messageInput}
            placeholder={'Message '}
          />

          <Button
            text={'Send'}
            customStyles={styles.savebutton}
            textStyle={styles.savetext}
          />

          <View style={styles.officeAddress}>
            <FlatList
              data={officeaddressData}
              renderItem={({item}) => {
                return (
                  <View style={{marginVertical: '5%'}}>
                    <Text style={styles.officeHeading}>{item?.heading}</Text>
                    {item?.address && (
                      <Text style={styles.officeaddress}>{item?.address}</Text>
                    )}
                    {item?.number && (
                      <Text style={styles.officeaddress}>{item?.number}</Text>
                    )}

                    <Text style={styles.officeaddress}>{item?.mail}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View style={styles.ContactUsMap}>
          <ContactUsMap />
        </View>

        <View style={styles.b2bserviceContainer}>
          <Text style={styles.b2btext}>B2B Services</Text>
          <Text style={styles.b2btextDescription}>
            Arihant is the only publisher in the country that publishes for
            almost all the segments of education, be it schools, Entrances,
            Competitions or Government Recruitment Exams. You can browse our
            complete book range on this website or request the catalogue or can
            visit a retailer. If you found our books suitable for your students
            then let us know about your requirement, we can offer a good deal
            through our corporate sales division.
          </Text>
          <View style={styles.serviceIconView}>
            <View style={styles.iconContainer}>
              <Image
                source={ImagePath?.serviceIcon1}
                style={styles.serviceIconStyle}
              />
              <Text style={styles.iconText}>CSD & CUSTOMIZATION</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={ImagePath?.serviceIcon2}
                style={styles.serviceIconStyle}
              />
              <Text style={styles.iconText2}>BULK ORDERS</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={ImagePath?.serviceIcon3}
                style={styles.serviceIconStyle}
              />
              <Text style={styles.iconText2}>LIBRARY ORDERS</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.b2btextDescription}>+91-9557650371 </Text>
            <Text style={styles.b2btextDescription}>crm@arihantbooks.com </Text>
          </View>
        </View>
        <View style={styles.b2bserviceContainer}>
          <Text style={styles.b2btext}>Sales & Support Offices</Text>
          <View style={styles.addressEmailDataConatiner}>
            {addressEmailData.map((item, index1) => {
              return (
                <>
                  <View key={index1} style={styles.addressEmailDataConatiner}>
                    <Text style={styles.addressEmailDataKeyName}>
                      {item.keyName}
                    </Text>
                    <View style={styles.addressEmailOuterBox}>
                      {item.data.map((data, index2) => {
                        return (
                          <View
                            key={index2}
                            style={styles.addressEmailDataInnerBox}>
                            <Text style={styles.addressEmailDataInnerBoxText}>
                              {data.name}
                            </Text>
                            <Text style={styles.addressEmailDataInnerBoxText}>
                              T : {data.phone}
                            </Text>
                            <Text style={styles.addressEmailDataInnerBoxText}>
                              E : {data.email}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  ImageStyle: {
    width: width,
    height: undefined,
    aspectRatio: 16 / 8.2,
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  container: {
    padding: width * 0.04,
  },
  nameinput: {
    width: width / 2.6,
    height: height * 0.04,
    paddingLeft: width * 0.03,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: LIGHTGRAY2,
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    color: GRAY,
  },
  subjectInput: {
    width: width / 1.22,
    height: height * 0.04,
    paddingLeft: width * 0.03,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: LIGHTGRAY2,
    marginTop: '4%',
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    color: GRAY,
  },
  messageInput: {
    width: width / 1.22,
    height: height * 0.1,
    paddingLeft: width * 0.03,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: LIGHTGRAY2,
    marginTop: '4%',
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    color: GRAY,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  home: {
    fontSize: width * 0.027,
    fontFamily: IsidoraMedium,
    color: GRAY,
  },
  contact: {
    fontSize: width * 0.027,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
  },
  contactDetailView: {
    backgroundColor: WHITE,
    width: width / 1.09,
    alignSelf: 'center',
    marginBottom: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '7%',
    borderRadius: width * 0.01,
    elevation: 2,
    shadowColor: GRAY,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.3,
  },
  officeAddress: {
    backgroundColor: RED,
    padding: width * 0.03,
    marginTop: '5%',
  },
  officeHeading: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6%',
  },
  headingview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconstyle: {
    height: height * 0.04,
    width: width * 0.04,
    resizeMode: 'contain',
    marginRight: '5%',
  },
  headingText: {
    fontSize: width * 0.036,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
  },
  b2btext: {
    fontSize: width * 0.04,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    textAlign: 'center',
  },
  b2btextDescription: {
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    textAlign: 'center',
    marginTop: '5%',
    lineHeight: height * 0.02,
  },
  descriptionText: {
    fontSize: width * 0.027,
    fontFamily: IsidoraMedium,
    width: width * 0.65,
    color: DARKGRAY,
    lineHeight: height * 0.017,
  },
  mainText: {
    fontSize: width * 0.027,
    fontFamily: IsidoraSemiBold,
    width: width * 0.6,
    color: BLACK,
    lineHeight: height * 0.017,
    marginTop: '1%',
  },
  contactUsDetialContainer: {
    backgroundColor: WHITE,
    width: width / 1.09,
    paddingHorizontal: '5%',
    paddingVertical: '7%',

    alignSelf: 'center',
    borderRadius: width * 0.02,
  },

  b2bserviceContainer: {
    backgroundColor: WHITE,
    width: width / 1.09,
    paddingHorizontal: '5%',
    paddingVertical: '7%',
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: width * 0.02,
  },
  savebutton: {
    backgroundColor: orange,
    alignSelf: 'flex-start',
    height: height * 0.032,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.005,
  },
  savetext: {
    fontSize: width * 0.035,
    fontFamily: IsidoraSemiBold,
  },
  officeaddress: {
    color: WHITE,
    marginTop: '1%',
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    lineHeight: height * 0.017,
  },
  serviceIconView: {
    flexDirection: 'row',
    marginTop: '5%',
    // width:width/1.6,
    // backgroundColor:"red"
  },
  serviceIconStyle: {
    resizeMode: 'contain',
    height: height * 0.05,
    width: width * 0.1,
    // backgroundColor:"red"
  },
  iconContainer: {
    width: width * 0.28,
    // backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: width * 0.03,
    color: orange,
    fontFamily: IsidoraSemiBold,
    textAlign: 'center',
    marginTop: '3%',
    // height:height*0.035,
    // backgroundColor:"red",
  },
  iconText2: {
    fontSize: width * 0.03,
    color: orange,
    fontFamily: IsidoraSemiBold,
    textAlign: 'center',
    marginTop: '3%',
    // height:height*0.035,
    width: width * 0.17,
  },
  addressEmailDataConatiner: {
    paddingTop: width * 0.025,
    flexDirection: 'column',
  },
  addressEmailDataKeyName: {
    fontSize: width * 0.038,
    fontFamily: IsidoraBold,
    color: orange,
  },
  addressEmailOuterBox: {
    flexDirection: 'column',
  },
  addressEmailDataInnerBox: {
    backgroundColor: '#E7DEE3',
    borderRadius: width * 0.01,
    paddingVertical: width * 0.028,
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.008,
    marginTop: height * 0.007,
  },
  addressEmailDataInnerBoxText: {
    color: LIGHTGREYTEXT,
  },
  ContactUsMap: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
});
