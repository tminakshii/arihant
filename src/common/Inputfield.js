import {
  Keyboard,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import {BLACK, GRAY, inputBordercolor} from '../values/Colors';
import {IsidoraRegular} from '../values/Fonts';
const {width, height} = Dimensions.get('window');

const Inputfield = ({
  customStyles,
  placeholder,
  value,
  onChangeText = () => {},
  iconLeft = null,
  iconRight = null,
  boxcustomStyle,
  keyboardType,
  placeholderTextColor={GRAY},
  editable = true,
  iconLeftStyle
}) => {
  return (
    <View style={[styles.inputcontainer, {...boxcustomStyle}]}>
      {iconLeft && <View style={[styles.iconLeft,{...iconLeftStyle}]}>{iconLeft}</View>}
      <TextInput
        style={[
          styles.TextInput,
          {

            paddingLeft: iconLeft ? 40 : 0, // Extra padding when left icon is present
            paddingRight: iconRight ? 20 : 0, // Extra padding when right icon is present
            ...customStyles,
    // paddingBottom:Platform.OS=="android"?null:"1%",

          },
        ]}
        value={value}
        placeholder={placeholder}
        editable={editable}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
    </View>
  );
};

export default Inputfield;

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    borderColor: inputBordercolor,
    borderWidth: 1,
    borderRadius: width*0.0137,
    fontFamily: IsidoraRegular,
    color: BLACK,
    fontSize:width*0.035,
  },
  iconLeft: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    // position: 'absolute',
    right: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
