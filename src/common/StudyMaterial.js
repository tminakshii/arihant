import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BLACK, LIGHTORANGE, orange, WHITE } from '../values/Colors'
import { ImagePath } from '../values/ImagePath';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';

const { width, height } = Dimensions.get('window');

const StudyMaterial = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Title}>{item.Title}</Text>
      {
        item?.description.map((val, ind) => {
          return (
            <View style={styles.descriptionView} key={ind}>
              <Text style={styles.headingText}>{val.heading}</Text>
              <View style={styles.notes}>
                <View style={styles.imageView}>
                  <Image source={ImagePath.pdf} style={styles.pdfImage} />
                </View>
                <Text style={styles.notesText}>Notes</Text>
              </View>
              <View style={styles.notes}>
                <View style={styles.imageView}>
                  <Image source={ImagePath.pdf} style={styles.pdfImage} />
                </View>
                <Text style={styles.notesText}>MCQs</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default StudyMaterial

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: height * 0.035, 
  },
  Title: {
    backgroundColor: WHITE,
    // marginVertical: height * 0.01, 
    paddingHorizontal: width * 0.04, 
    paddingVertical: height * 0.015, 
    fontFamily: IsidoraSemiBold,
    color: orange,
    fontSize: width * 0.04, 
    marginHorizontal: width * 0.04, 
    borderRadius: 5,
    elevation: 5,
    shadowColor: BLACK,
    marginBottom: height * 0.03, 
  },
  descriptionView: {
    flexDirection: 'row',
  },
  headingText: {
    paddingLeft: width * 0.04,
    width: width * 0.5  , 
    marginVertical: height * 0.01, 
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    lineHeight: height * 0.025,
    fontSize:width*0.036
  },
  notes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfImage: {
    resizeMode: 'contain',
    height: height * 0.03, 
    width: width * 0.06, 
  },
  imageView: {
    backgroundColor: LIGHTORANGE,
    borderRadius: 25,
    padding: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesText: {
    marginHorizontal: width * 0.025, 
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize:width*0.036

  },
});
