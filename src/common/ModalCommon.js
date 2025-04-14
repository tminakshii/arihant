import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BLACK, DARKGRAY, LIGHTGRAY2, LIGHTGREYTEXT} from '../values/Colors';
import {IsidoraSemiBold} from '../values/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const {width, height} = Dimensions.get('window');

const ModalCommon = ({
  visible,
  transparent,
  crossbuttonStyle,
  heading,
  showclose = false,
  showheading = false,
  animationType,
  onClose,
  children,
  CustomModalbox,
  color = {DARKGRAY},
  customStyleforClose,
  textCloseStyle,
  CustomStyleModal,
  customheadingtext
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}>
      <View style={[styles.modalmaincontainer, {...CustomStyleModal}]}>
        <View style={[styles.modalbox, {...CustomModalbox}]}>
          <View style={[styles.modalHeading, {...customStyleforClose}]}>
            {showheading && <Text style={[styles.headingtext,{...customheadingtext}]}>{heading}</Text>}
            {showclose && (
              <TouchableOpacity
                style={[styles.close, {...crossbuttonStyle}]}
                onPress={onClose}>
                <Feather name="x" size={isTablet?width*0.03:width*0.05} color={color?color:LIGHTGREYTEXT} />
              </TouchableOpacity>
            )}
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCommon;

const styles = StyleSheet.create({
  modalmaincontainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  headingtext: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.043,
  },
  modalbox: {
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
    height: '50%',
  },
  close: {
    height: height*0.03,
    width: height*0.03,
    borderRadius: width*0.5,
    backgroundColor: LIGHTGRAY2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '85%',
    top: '10%',
  },
});
