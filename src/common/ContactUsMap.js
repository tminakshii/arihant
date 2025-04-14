

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import {LIGHTGREYTEXT, orange} from '../values/Colors';

const OSM_API_URL = 'https://nominatim.openstreetmap.org/search';
const {height, width} = Dimensions.get('window');

const ContactUsMap = () => {
  const [region, setRegion] = useState({
    latitude: 26.9124, // Default latitude (Jaipur)
    longitude: 75.7873, // Default longitude (Jaipur)
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [place, setPlace] = useState(null); // Store place details
  const [query, setQuery] = useState('Rambagh Palace - Jaipur'); // Default place name

  const fetchPlaceDetails = async placeName => {
    try {
      const response = await axios.get(OSM_API_URL, {
        params: {
          q: placeName,
          format: 'json',
        },
        headers: {
          'User-Agent': 'YourAppName/1.0 (your.email@example.com)',
        },
      });

      if (response.data.length > 0) {
        const location = response.data[0];
        console.log('location', location);
        setPlace({
          name: location.display_name,
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
        });

        setRegion({
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      } else {
        alert('Place not found');
      }
    } catch (error) {
      console.error('Error fetching location:', error.message);
      alert('Error fetching location details. Please try again.');
    }
  };

  // Fetch the place details whenever the query changes
  useEffect(() => {
    fetchPlaceDetails(query);
  }, [query]);

  // Zoom In Function
  const zoomIn = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  // Zoom Out Function
  const zoomOut = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        region={region}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}></MapView>

      {/* Place name at the top-left */}
      {place && (
        <View style={styles.placeContainer}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.placeName}>Arihnat Publications Pvt Ltd</Text>
              <Text style={styles.placeNameDeatil}>
                Partapur, Meerut Uttar Pradesh 250103
              </Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://cdn2.iconfinder.com/data/icons/peppyicons/512/Directions-512.png',
                }}
                style={styles.directionImage}
              />
            </View>
          </View>

          <View style={styles.ratingConatiner}>
            <Text style={styles.ratingText}>4.2</Text>
            <Icon name="star" style={styles.ratingStars} />
            <Icon name="star" style={styles.ratingStars} />
            <Icon name="star" style={styles.ratingStars} />
            <Icon name="star" style={styles.ratingStars} />
            <Text style={styles.ratingReviews}>95 reviews</Text>
          </View>
          <Text style={styles.viewMapText}>View larger Map</Text>
        </View>
      )}

      {/* Zoom Buttons */}
      <View style={styles.zoomControls}>
        {/* <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}> */}
          <Icon name="plus" style={[styles.zoomText,styles.zoomButton]} />
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}> */}
          <Icon name="minus" style={[styles.zoomText,styles.zoomButton]} />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#00000027',
    borderWidth: 1,
    borderRadius: 3,
    overflow: 'hidden',
  },
  map: {
    height: height * 0.2,
  },
  placeContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 2,
    elevation: 4,
  },
  placeName: {
    fontSize: width * 0.02,
    fontWeight: 'bold',
    color: LIGHTGREYTEXT,
  },
  placeNameDeatil: {
    fontSize: width * 0.015,
    color: LIGHTGREYTEXT,
    paddingVertical: height * 0.005,
  },
  ratingStars: {
    color: orange,
    fontSize: width * 0.02,
  },
  ratingReviews: {
    color: LIGHTGREYTEXT,
    paddingHorizontal: width * 0.005,
    fontSize: width * 0.02,
    fontWeight: 'bold',
  },
  ratingConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: LIGHTGREYTEXT,
    // paddingHorizontal: width * 0.005,
    fontSize: width * 0.02,
    fontWeight: 'bold',
  },
  zoomControls: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'column',
    padding: 7,
  },
  zoomButton: {
    width: width*0.05,
    height: height*0.03,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
  },
  zoomText: {
    fontSize: width*0.037,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    color: LIGHTGREYTEXT,
  },
  directionImage: {
    width: width * 0.08,
    height: height * 0.02,
    resizeMode: 'contain',
  },
  viewMapText:{
    color: LIGHTGREYTEXT,
    paddingTop: height * 0.001,
    fontSize: width * 0.02,
    fontWeight: 'bold',
  }
});

export default ContactUsMap;
