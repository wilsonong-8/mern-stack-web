import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_ADVERT_FORM_VALUES,
  CREATE_ADVERT_BEGIN,
  CREATE_ADVERT_SUCCESS,
  CREATE_ADVERT_ERROR,
  GET_ADVERT_BEGIN,
  GET_ADVERT_SUCCESS,
  GET_OTHER_USER_ADVERT_BEGIN,
  GET_OTHER_USER_ADVERT_SUCCESS,
  GET_OTHER_USER_ADVERT_ERROR,
  SHOW_SINGLE_ADVERT,
  GET_USER_ADVERT_BEGIN,
  GET_USER_ADVERT_SUCCESS,
  GET_USER_ADVERT_ERROR,
  EDIT_ADVERT_BEGIN,
  EDIT_ADVERT_SUCCESS,
  EDIT_ADVERT_ERROR,
  DELETE_ADVERT_BEGIN,
  DELETE_ADVERT_SUCCESS,
  DELETE_ADVERT_ERROR,
  DELETE_ADMIN_ADVERT_BEGIN,
  DELETE_ADMIN_ADVERT_SUCCESS,
  CHANGE_PAGE,
  SET_IMAGE_LIST,
  UPLOAD_IMAGE_LIST_BEGIN,
  UPLOAD_IMAGE_LIST_SUCCESS,
  UPLOAD_IMAGE_LIST_ERROR,
  DELETE_IMAGE_BEGIN,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_ERROR,
  CLEAR_BANKER_FORM_VALUES,
  CREATE_BANKER_BEGIN,
  CREATE_BANKER_SUCCESS,
  CREATE_BANKER_ERROR,
  GET_BANKER_BEGIN,
  GET_BANKER_SUCCESS,
  SET_EDIT_BANKER,
  DELETE_BANKER_BEGIN,
  EDIT_BANKER_BEGIN,
  EDIT_BANKER_SUCCESS,
  EDIT_BANKER_ERROR,
  CLEAR_AGENT_FORM_VALUES,
  CREATE_AGENT_BEGIN,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_ERROR,
  GET_AGENT_BEGIN,
  GET_AGENT_SUCCESS,
  SET_EDIT_AGENT,
  DELETE_AGENT_BEGIN,
  EDIT_AGENT_BEGIN,
  EDIT_AGENT_SUCCESS,
  EDIT_AGENT_ERROR,
  SEARCH_TRANSACTION_BEGIN,
  SEARCH_TRANSACTION_SUCCESS,
  CLEAR_SEARCH_FORM_VALUES,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  //State for turning Single Advert on and off
  showSingleAdvert: false,
  singleAdvertId: '',

  //State for user
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  showSideBar: false,
  hasAdvert: false,
  myAdvert: '',

  //State for Advertisement
  isEditing: false,
  editAdvertId: '',
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
  numOfPages: 1,
  page: 1,

  search: '',
  search_area: '',
  search_unitType: '',
  search_minPrice: '',
  search_maxPrice: '',

  imageList: [],
  imageUrlList: [],

  //State for Bankers

  banker_name: '',
  banker_bank: '',
  banker_position: '',
  banker_number: '',
  banker_email: '',
  banker_image: '',

  isEditingBanker: false,
  editBankerId: '',
  bankers: [],

  //State for Agents
  agent_name: '',
  agent_company: '',
  agent_position: '',
  agent_number: '',
  agent_email: '',
  agent_image: '',

  isEditingAgent: false,
  editAgentId: '',
  agents: [],

  //State for Recent HDB Transaction Search
  hdb_town: '',
  hdb_block: '',
  hdb_street: '',
  hdb_flatType: '',
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

  //State for Messaging
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
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

  //Displays Alert
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  //Clears Alert
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  //Saves user info to local storage when logging in
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  //Removes user info from local storage when logging out
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  //Registers user, if true sends payload and saves user data to local storage, if error displays error message
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      // console.log(response);
      //pulling out user properties
      const { user, token, email, number } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        // payload: { user, token, email, number },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //Log's the user in, if successful will save user data to local storage
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post('/api/v1/auth/login', currentUser);
      //pulling out user properties
      const { user, token, email, number } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, email, number },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('auth/updateUser', currentUser);
      const { user, token } = data;
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const getUser = async (userId) => {
    try {
      const { data } = await authFetch.get(`/auth/${userId}`);
      const { user } = data;
      // console.log(data);
      // console.log(user);
      return user;
    } catch (error) {
      console.log(error.response);
    }
  };

  /**
   * Form Change Handler
   */

  const handleChange = ({ name, value }) =>
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });

  /**
   *  Toggle showSingleAdvertisement
   */

  const toggleShowSingleAdvert = (id) => {
    dispatch({ type: SHOW_SINGLE_ADVERT, payload: id });
  };

  /**
   *CRUD FUNCTION FOR ADVERTISEMENT
   */

  const clearAdvertFormValues = () => {
    dispatch({ type: CLEAR_ADVERT_FORM_VALUES });
  };

  const createAdvert = async () => {
    dispatch({ type: CREATE_ADVERT_BEGIN });
    try {
      const {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageUrlList,
      } = state;
      await authFetch.post('/advert', {
        address,
        postalCode,
        area,
        unitType,
        size,
        price,
        description,
        imageSourceNames: imageUrlList,
      });
      dispatch({ type: CREATE_ADVERT_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_ADVERT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  // const getAdverts = async () => {
  //   //WARNING.. url might be = "/" only because of mainpage
  //   const {
  //     page,
  //     search,
  //     search_area,
  //     search_unitType,
  //     search_minPrice,
  //     search_maxPrice,
  //   } = state;

  //   let url = `/advert?page=${page}&`;

  //   if (search) {
  //     url += `search=${search}&`;
  //   }

  //   if (search_area) {
  //     url += `area=${search_area}&`;
  //   }

  //   if (search_unitType) {
  //     url += `unitType=${search_unitType}&`;
  //   }

  //   if (search_minPrice) {
  //     url += `minPrice=${search_minPrice}&`;
  //   }

  //   if (search_maxPrice) {
  //     url += `maxPrice=${search_maxPrice}&`;
  //   }
  //   dispatch({ type: GET_ADVERT_BEGIN });
  //   try {
  //     const { data } = await authFetch(url);
  //     const { adverts, totalAdverts, numOfPages } = data;
  //     dispatch({
  //       type: GET_ADVERT_SUCCESS,
  //       payload: { adverts, totalAdverts, numOfPages },
  //     });
  //   } catch (error) {
  //     console.log(error.response);
  //     // logoutUser()
  //   }
  //   clearAlert();
  // };

  const getAdverts = async () => {
    // WARNING.. url might be = "/" only because of the main page
    const {
      page,
      search,
      search_area,
      search_unitType,
      search_minPrice,
      search_maxPrice,
    } = state;

    let url = `/advert?page=${page}&limit=2&`; // Add platform=web to indicate the web platform

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
      dispatch({
        type: GET_ADVERT_SUCCESS,
        payload: { adverts, totalAdverts, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser()
    }
    clearAlert();
  };

  const getUserAdvert = async () => {
    dispatch({ type: GET_USER_ADVERT_BEGIN });
    try {
      const { data } = await authFetch.get(`/advert/${state.user._id}`);
      const { advert } = data;

      // Check if advert is null
      if (advert === null) {
        dispatch({ type: GET_USER_ADVERT_ERROR });
      } else {
        // Dispatch GET_USER_ADVERT_SUCCESS with the advert data
        dispatch({
          type: GET_USER_ADVERT_SUCCESS,
          payload: { advert },
        });
      }
    } catch (error) {
      dispatch({ type: GET_USER_ADVERT_ERROR });
      console.log('Error fetching user advert:', error);
    }
    clearAlert();
  };

  const getOtherUserAdvert = async (otherUserId) => {
    dispatch({ type: GET_OTHER_USER_ADVERT_BEGIN });
    try {
      const { data } = await authFetch.get(`/advert/${otherUserId}`);
      const { advert } = data;
      // console.log(data);
      // console.log(advert);
      dispatch({
        type: GET_OTHER_USER_ADVERT_SUCCESS,
      });
      return {
        advert,
      };
    } catch (error) {
      dispatch({ type: GET_OTHER_USER_ADVERT_ERROR });
      console.log('No user found');
    }
    clearAlert();
  };

  const updateAdvert = async () => {
    dispatch({ type: EDIT_ADVERT_BEGIN });
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
        imageUrlList,
      } = state;
      const totalImageUrlList = [...imageSourceNames, ...imageUrlList];
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
      dispatch({ type: EDIT_ADVERT_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_ADVERT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteAdvert = async () => {
    dispatch({ type: DELETE_ADVERT_BEGIN });
    try {
      await deleteImages(state.imageSourceNames);
      await authFetch.delete(`/advert/${state.user._id}`);
      dispatch({ type: DELETE_ADVERT_SUCCESS });
    } catch (error) {
      dispatch({
        type: DELETE_ADVERT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteAdminAdvert = async (userId, imageSourceNames) => {
    dispatch({ type: DELETE_ADMIN_ADVERT_BEGIN });
    try {
      await deleteImages(imageSourceNames);
      await authFetch.delete(`/advert/${userId}`);
      dispatch({ type: DELETE_ADMIN_ADVERT_SUCCESS });
      getAdverts();
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const setImageList = (imageList) => {
    dispatch({ type: SET_IMAGE_LIST, payload: { imageList } });
  };

  const uploadImageList = async (files, length) => {
    dispatch({ type: UPLOAD_IMAGE_LIST_BEGIN });
    if (length > 5) {
      dispatch({
        type: UPLOAD_IMAGE_LIST_ERROR,
        payload: { msg: 'Cannot upload more than 5 images' },
      });
      return;
    }
    try {
      const formData = new FormData();
      files.forEach((image) => {
        formData.append('image', image);
      });
      const response = await authFetch.post('/advert/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch({
        type: UPLOAD_IMAGE_LIST_SUCCESS,
        payload: response.data.images,
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_IMAGE_LIST_ERROR,
        payload: { msg: error.response },
      });
    }
    clearAlert();
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

  const deleteSingleImage = async (userId, imageUrl, length) => {
    dispatch({ type: DELETE_IMAGE_BEGIN });
    try {
      if (length < 2) {
        dispatch({
          type: DELETE_IMAGE_ERROR,
          payload: { msg: 'Minimum 1 Image is Required' },
        });
        return;
      }
      await authFetch.delete('/advert/deleteSingleImage', {
        data: { userId, imageUrl },
      });

      dispatch({
        type: DELETE_IMAGE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_IMAGE_ERROR,
        payload: { msg: error.response },
      });
    }
    clearAlert();
  };

  /**
   *CRUD FUNCTION FOR MORTGAGE BANKER
   */

  const clearBankerFormValues = () => {
    dispatch({ type: CLEAR_BANKER_FORM_VALUES });
  };

  const uploadBankerImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await authFetch.post(
        '/mortgage-banker/uploadImage',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // console.log(response.data.image);

      return response.data.image;
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteBankerImage = async (image) => {
    try {
      const response = await authFetch.delete('/mortgage-banker/deleteImage', {
        data: { image },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error deleting images:', error.response.data.message);
    }
  };

  const createBanker = async (bankerImage) => {
    dispatch({ type: CREATE_BANKER_BEGIN });
    try {
      const {
        banker_name,
        banker_bank,
        banker_position,
        banker_number,
        banker_email,
        // banker_image,
      } = state;
      await authFetch.post('/mortgage-banker', {
        banker_name,
        banker_bank,
        banker_position,
        banker_number,
        banker_email,
        banker_image: bankerImage,
      });
      getBankers();
      dispatch({ type: CREATE_BANKER_SUCCESS });
      dispatch({ type: CLEAR_BANKER_FORM_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_BANKER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getBankers = async () => {
    let url = `/mortgage-banker`;
    dispatch({ type: GET_BANKER_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { bankers } = data;
      dispatch({
        type: GET_BANKER_SUCCESS,
        payload: { bankers },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser()
    }
    clearAlert();
  };

  const setEditBanker = (bankerId) => {
    dispatch({ type: SET_EDIT_BANKER, payload: { bankerId } });
  };

  const editBanker = async (bankerImage) => {
    dispatch({ type: EDIT_BANKER_BEGIN });
    try {
      const {
        banker_name,
        banker_bank,
        banker_position,
        banker_number,
        banker_email,
        banker_image,
      } = state;
      if (bankerImage === banker_image) {
        await authFetch.patch(`/mortgage-banker/${state.editBankerId}`, {
          banker_name,
          banker_bank,
          banker_position,
          banker_number,
          banker_email,
          banker_image: bankerImage,
        });
      } else {
        await deleteBankerImage(banker_image);
        await authFetch.patch(`/mortgage-banker/${state.editBankerId}`, {
          banker_name,
          banker_bank,
          banker_position,
          banker_number,
          banker_email,
          banker_image: bankerImage,
        });
      }
      getBankers();
      dispatch({ type: EDIT_BANKER_SUCCESS });
      dispatch({ type: CLEAR_BANKER_FORM_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_BANKER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteBanker = async (bankerId, image) => {
    dispatch({ type: DELETE_BANKER_BEGIN });
    try {
      await deleteBankerImage(image);
      await authFetch.delete(`/mortgage-banker/${bankerId}`);
      getBankers();
    } catch (error) {
      console.log(error.response);
    }
  };

  /*
   * CRUD FUNCTION FOR PROPERTY AGENTS
   */

  const clearAgentFormValues = () => {
    dispatch({ type: CLEAR_AGENT_FORM_VALUES });
  };

  const uploadAgentImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await authFetch.post(
        '/property-agent/uploadImage',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data.image;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  };

  const deleteAgentImage = async (image) => {
    try {
      const response = await authFetch.delete('/property-agent/deleteImage', {
        data: { image },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error deleting images:', error.response.data.message);
    }
  };

  const createAgent = async (agentImage) => {
    dispatch({ type: CREATE_AGENT_BEGIN });
    try {
      const {
        agent_name,
        agent_company,
        agent_position,
        agent_number,
        agent_email,
        // agent_image,
      } = state;
      await authFetch.post('/property-agent', {
        agent_name,
        agent_company,
        agent_position,
        agent_number,
        agent_email,
        agent_image: agentImage,
      });
      getAgents();
      dispatch({ type: CREATE_AGENT_SUCCESS });
      dispatch({ type: CLEAR_AGENT_FORM_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_AGENT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getAgents = async () => {
    let url = `/property-agent`;
    dispatch({ type: GET_AGENT_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { agents } = data;
      console.log(data);
      console.log(agents);
      dispatch({
        type: GET_AGENT_SUCCESS,
        payload: { agents },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser()
    }
    clearAlert();
  };

  const setEditAgent = (agentId) => {
    dispatch({ type: SET_EDIT_AGENT, payload: { agentId } });
  };

  const editAgent = async (agentImage) => {
    dispatch({ type: EDIT_AGENT_BEGIN });
    try {
      const {
        agent_name,
        agent_company,
        agent_position,
        agent_number,
        agent_email,
        agent_image,
      } = state;
      if (agentImage === agent_image) {
        await authFetch.patch(`/property-agent/${state.editAgentId}`, {
          agent_name,
          agent_company,
          agent_position,
          agent_number,
          agent_email,
          agent_image: agentImage,
        });
      } else {
        await deleteAgentImage(agent_image);
        await authFetch.patch(`/property-agent/${state.editAgentId}`, {
          agent_name,
          agent_company,
          agent_position,
          agent_number,
          agent_email,
          agent_image: agentImage,
        });
      }
      getAgents();
      dispatch({ type: EDIT_AGENT_SUCCESS });
      dispatch({ type: CLEAR_AGENT_FORM_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_AGENT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteAgent = async (agentId, image) => {
    dispatch({ type: DELETE_AGENT_BEGIN });
    try {
      await deleteAgentImage(image);
      await authFetch.delete(`/property-agent/${agentId}`);
      getAgents();
    } catch (error) {
      console.log(error.response);
    }
  };

  /**
   * HDB Transactions Actions
   */

  const clearSearchFormValues = () => {
    dispatch({ type: CLEAR_SEARCH_FORM_VALUES });
  };

  const getPastRecords = async () => {
    let url = 'https://data.gov.sg/api/action/datastore_search';
    dispatch({ type: SEARCH_TRANSACTION_BEGIN });
    try {
      const { hdb_town, hdb_block, hdb_street, hdb_flatType } = state;
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
      console.log(records);
      dispatch({
        type: SEARCH_TRANSACTION_SUCCESS,
        payload: { records, total },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  /**
   * Messaging Functions
   */
  // const getConversations = async () => {
  //   let url = `/conversation/${state.user._id}`
  //   try {
  //     const{data} = await authFetch(url)
  //     // console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  // const getMessages = async (currentChat) => {
  //   let url = `/message/${currentChat._id}`
  //     try {
  //       const {data}= await authFetch(url)
  //       return data;
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSideBar,
        logoutUser,
        updateUser,
        getUser,
        handleChange,
        toggleShowSingleAdvert,
        clearAdvertFormValues,
        createAdvert,
        getAdverts,
        getUserAdvert,
        updateAdvert,
        deleteAdvert,
        deleteAdminAdvert,
        getOtherUserAdvert,
        changePage,
        uploadImageList,
        setImageList,
        deleteImages,
        deleteSingleImage,
        clearBankerFormValues,
        uploadBankerImage,
        deleteBankerImage,
        createBanker,
        getBankers,
        setEditBanker,
        deleteBanker,
        editBanker,
        clearAgentFormValues,
        uploadAgentImage,
        deleteAgentImage,
        createAgent,
        getAgents,
        setEditAgent,
        deleteAgent,
        editAgent,
        clearSearchFormValues,
        getPastRecords,
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
