import React, { useReducer, useContext, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer';
import axios from 'axios';
import { Alert } from 'react-native';
import { API_BASE_URL } from '../mobileConfig';

import {
  START_APP_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
  HANDLE_CHANGE,
  CREATE_ADVERT_SUCCESS,
  GET_ADVERT_BEGIN,
  GET_ADVERT_SUCCESS,
  GET_USER_ADVERT_BEGIN,
  GET_USER_ADVERT_SUCCESS,
  GET_USER_ADVERT_ERROR,
  EDIT_ADVERT_SUCCESS,
  SET_UNIT_TYPE,
  SET_AREA,
  DELETE_ADVERT_SUCCESS,
  UPLOAD_IMAGE_LIST_SUCCESS,
  DELETE_IMAGE_SUCCESS,
  GET_BANKER_SUCCESS,
  GET_AGENT_SUCCESS,
  SEARCH_TRANSACTION_BEGIN,
  SEARCH_TRANSACTION_SUCCESS,
} from './actions';

const initialState = {
  user: null,
  token: '',
  isLoading: false,
  hasAdvert: false,
  myAdvert: null,

  // //State for Advertisement
  address: '',
  postalCode: '',
  areaOptions: ['North', 'East', 'West', 'South', 'Central'],
  area: 'North',
  unitTypeOptions: [
    '2Room',
    '3Room',
    '4Room',
    '5Room',
    'EA',
    'Jumbo',
    'Maisonette',
  ],
  unitType: '2Room',
  size: '',
  price: '',
  description: '',
  imageSourceNames: [],
  adverts: [],
  totalAdverts: 0,
  imageToUploadList: [],
  bankers: [],

  // //State for Agents
  agents: [],

  // //State for Recent HDB Transaction Search
  hdb_flatTypeOptions: [
    '',
    '2 ROOM',
    '3 ROOM',
    '4 ROOM',
    '5 ROOM',
    'EXECUTIVE',
    'MULTI-GENERATION',
  ],
  hdb_records: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: API_BASE_URL + '/api/v1',
  });

  //Axios Intercept request or response before they are handled
  //request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log('AUTH ERROR');
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = async ({ user, token }) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);
      // const localStorageData = await getUserFromLocalStorage()
      // console.log('Stored user and token:', localStorageData.user, localStorageData.token);
    } catch (error) {
      console.error('Error adding user or token to AsyncStorage:', error);
    }
  };

  const removeUserFromLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
    } catch (error) {
      // Change 'e' to 'error' here
      console.error('Error removing user or token:', error); // Change 'e' to 'error' here
    }
  };

  const getUserFromLocalStorage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userJson = await AsyncStorage.getItem('user');
      const user = JSON.parse(userJson);
      return { token, user };
    } catch (error) {
      console.log('Error retrieving user or token', error);
    }
  };

  const setAuthUserToken = (user, token) => {
    dispatch({
      type: START_APP_SUCCESS,
      payload: { user, token },
    });
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(
        API_BASE_URL + '/api/v1/auth/login',
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
    } catch (error) {
      Alert.alert('Login Failed', error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post(
        API_BASE_URL + '/api/v1/auth/register',
        currentUser
      );
      const { user, token, email, number } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      Alert.alert('Registration failed', error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

  const logoutUser = () => {
    // console.log("before"+ initialState.user,initialState.token);
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
    // console.log(initialState.user,initialState.token);
  };

  const updateUser = async (currentUser) => {
    try {
      const { data } = await authFetch.patch('auth/updateUser', currentUser);
      const { user, token } = data;
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
      Alert.alert('Success!', 'Your information has been updated');
    } catch (error) {
      if (error.response.status) {
        Alert.alert('Update failed', error.response.data.msg);
        console.log(error.response.data.msg);
      } else {
        console.log(error);
      }
      console.log(error);
    }
  };

  const getBankers = async () => {
    let url = `/mortgage-banker`;
    try {
      const { data } = await authFetch(url);
      const { bankers } = data;
      dispatch({
        type: GET_BANKER_SUCCESS,
        payload: { bankers },
      });
    } catch (error) {
      Alert.alert(
        'Error!',
        'This page cannot be loaded, please try again later'
      );
      console.log(error);
    }
  };

  const getAgents = async () => {
    let url = `/property-agent`;
    try {
      const { data } = await authFetch(url);
      const { agents } = data;
      dispatch({
        type: GET_AGENT_SUCCESS,
        payload: { agents },
      });
    } catch (error) {
      Alert.alert(
        'Error!',
        'This page cannot be loaded, please try again later'
      );
      console.log(error);
    }
  };

  const getPastRecords = async (
    hdb_town,
    hdb_block,
    hdb_street,
    hdb_flatType
  ) => {
    let url = 'https://data.gov.sg/api/action/datastore_search';
    dispatch({ type: SEARCH_TRANSACTION_BEGIN });
    try {
      // const { hdb_town, hdb_block, hdb_street, hdb_flatType } = state;
      const hdb_street_caps = hdb_street.toUpperCase();
      const hdb_town_caps = hdb_town.toUpperCase();

      const params = {
        resource_id: 'f1765b54-a209-4718-8d38-a39237f502b3',
        limit: 1000,
        sort: 'month desc',
      };

      if (hdb_flatType) {
        params.filters = JSON.stringify({ flat_type: hdb_flatType });
      }

      if (hdb_street) {
        params.q = JSON.stringify({ street_name: hdb_street_caps });
      }

      if (hdb_town) {
        params.q = JSON.stringify({
          ...JSON.parse(params.q || '{}'),
          town: hdb_town_caps,
        });
      }

      if (hdb_block) {
        params.q = JSON.stringify({
          ...JSON.parse(params.q || '{}'),
          block: hdb_block,
        });
      }

      const response = await axios.get(url, { params });

      const { records, total } = response.data.result;
      // console.log(total);
      dispatch({
        type: SEARCH_TRANSACTION_SUCCESS,
        payload: { records, total },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getAdverts = async (
    search,
    search_area,
    search_unitType,
    search_minPrice,
    search_maxPrice
  ) => {
    // const {
    //   search,
    //   search_area,
    //   search_unitType,
    //   search_minPrice,
    //   search_maxPrice,
    // } = state;

    let url = `/advert?`;

    if (search) {
      url += `search=${search}&`;
    }

    if (search_area) {
      url += `area=${search_area}&`;
    }

    if (search_unitType) {
      url += `unitType=${search_unitType}&`;
    }

    if (search_minPrice) {
      url += `minPrice=${search_minPrice}&`;
    }

    if (search_maxPrice) {
      url += `maxPrice=${search_maxPrice}&`;
    }

    dispatch({ type: GET_ADVERT_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { adverts, totalAdverts, numOfPages } = data;
      // console.log(`Total adverts = ${totalAdverts}`);
      // console.log(JSON.stringify(adverts, null, 2));
      dispatch({
        type: GET_ADVERT_SUCCESS,
        payload: { adverts, totalAdverts, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUserAdvert = async () => {
    try {
      dispatch({
        type: GET_USER_ADVERT_BEGIN,
      });
      const { data } = await authFetch.get(`/advert/${state.user._id}`);
      const { advert } = data;

      // Check if advert is null
      if (advert === null) {
        dispatch({ type: GET_USER_ADVERT_ERROR });
      } else {
        // console.log(JSON.stringify(advert, null, 2));
        dispatch({
          type: GET_USER_ADVERT_SUCCESS,
          payload: { advert },
        });
      }
    } catch (error) {
      dispatch({ type: GET_USER_ADVERT_ERROR });
      console.log('Error fetching user advert:', error);
    }
  };

  const deleteSingleImage = async (userId, imageUrl, length) => {
    try {
      if (length < 2) {
        Alert.alert('Cannot Delete Image', 'Minimum 1 Image is Required');
      } else {
        await authFetch.delete('/advert/deleteSingleImage', {
          data: { userId, imageUrl },
        });
        Alert.alert('Success!', 'Image has been deleted');
        dispatch({ type: DELETE_IMAGE_SUCCESS, payload: { imageUrl } });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: image.uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      const response = await authFetch.post('/advert/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add any additional headers you need (e.g., authorization headers).
        },
      });
      // console.log(response);
      dispatch({
        type: UPLOAD_IMAGE_LIST_SUCCESS,
        payload: response.data.images,
      });
    } catch (error) {
      console.log(error); // Rethrow the error for handling in your component.
    }
  };

  const updateAdvert = async () => {
    try {
      const {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageSourceNames,
        imageToUploadList,
      } = state;
      const totalImageUrlList = [...imageSourceNames, ...imageToUploadList];
      await authFetch.patch(`/advert/${state.user._id}`, {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageSourceNames: totalImageUrlList,
      });
      Alert.alert('Success!', 'Advertisement updated.');
      dispatch({
        type: EDIT_ADVERT_SUCCESS,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      console.log(error);
      Alert.alert('Error!', error.response.data.msg);
    }
  };

  const setArea = (itemValue) => {
    dispatch({ type: SET_AREA, payload: itemValue });
  };

  const setUnitType = (itemValue) => {
    dispatch({ type: SET_UNIT_TYPE, payload: itemValue });
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const createAdvert = async () => {
    try {
      const {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageToUploadList,
      } = state;
      await authFetch.post('/advert', {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageSourceNames: imageToUploadList,
      });
      Alert.alert('Success!', "Advertisement created");
      dispatch({ type: CREATE_ADVERT_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      Alert.alert('Error!', error.response.data.msg);
      console.log(error);
    }
  };

  const deleteAdvert = async () => {
    try {
      await deleteImages(state.imageSourceNames);
      await authFetch.delete(`/advert/${state.user._id}`);
      Alert.alert('Success!', "Your Advertisement is deleted");
      dispatch({ type: DELETE_ADVERT_SUCCESS });
    } catch (error) {
      Alert.alert('Error!', error.response.data.msg);
    }
  };

  const deleteImages = async (imageFiles) => {
    try {
      const response = await authFetch.delete('/advert/deleteImages', {
        data: { imageFiles },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error deleting images:', error.response.data.message);
    }
  };

  const getUser = async (userId) => {
    try {
      const { data } = await authFetch.get(`/auth/${userId}`);
      const { user } = data;
      // console.log("getUser: " + data);
      // console.log(user);
      return user;
    } catch (error) {
      console.log(error.response);
    }
  };

  const getOtherUserAdvert = async (otherUserId) => {
    try {
      const { data } = await authFetch.get(`/advert/${otherUserId}`);
      const { advert } = data;
      // console.log("getOtherUserAdvert: " + data);
      // console.log(advert);
      return {
        advert,
      };
    } catch (error) {
      console.log('No user found in getOtherUserAdvert()');
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getUserFromLocalStorage,
        setAuthUserToken,
        loginUser,
        registerUser,
        logoutUser,
        updateUser,
        getBankers,
        getAgents,
        getPastRecords,
        getAdverts,
        getUserAdvert,
        deleteSingleImage,
        uploadImage,
        updateAdvert,
        setArea,
        setUnitType,
        handleChange,
        createAdvert,
        deleteAdvert,
        getUser,
        getOtherUserAdvert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
