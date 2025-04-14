// export const BASEURL='https://examwitharihant.com/api/'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// export const APICall = async (
//   method,
//   url,  
//   params, 
//   onSuccess,   
//   onFailure,
//   formData = false,
// ) => {
//   // const getToken = await AsyncStorage.getItem('Token');

//   const headers = {
//     // Authorization: `Bearer ${getToken}`,
//     'Content-Type': formData ? 'multipart/form-data' : 'application/json',
//    };   
//   axios({
//     method: method,
//     url: `${BASEURL}${url}`,
//     data: params,
//     params: params,
//     headers: headers,
//   })
//     .then(response => {
//       onSuccess(response?.data);
//     })    
//     .catch(error => {
//       onFailure(error);
//     });
// };   


import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const BASEURL = 'https://examwitharihant.com/api/';

export const APICall = async (
  method,
  endpoint,
  params = {},
  onSuccess,
  onFailure,
  formData = false,
  refresh
) => {
  try {
    console.log(refresh,'REFRESH<><>')
    // Retrieve token from AsyncStorage
    const token = await AsyncStorage.getItem('Token');
    console.log(token,'hello')
    const headers = {
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
      ...(refresh ? { Authorization: `Bearer ${refresh}` } : token? {Authorization: `Bearer ${token}`}:{}),
    };

    // Configure axios request
    const config = {
      method,
      url: `${BASEURL}${endpoint}`,
      headers,
      ...(method === 'GET' ? { params } : { data: params }),
    };

    // Perform API call
    const response = await axios(config);
    if (response?.status >= 200 && response?.status < 300) {
      onSuccess(response?.data);
    } else {
      onFailure({ message: 'Unexpected response from the server', response });
    }
  } catch (error) {
    // Handle network errors or other unexpected errors
    if (error.response) {
      // API responded with an error status
      onFailure(error.response?.data || error.response);
    } else if (error.request) {
      // Request made but no response received
      onFailure({ message: 'Network error. Please check your connection.', error });
    } else {
      // Something happened while setting up the request
      onFailure({ message: error.message });
    }
  }
};




