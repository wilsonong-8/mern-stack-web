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

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === START_APP_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
    };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === GET_BANKER_SUCCESS) {
    return {
      ...state,
      bankers: action.payload.bankers,
    };
  }

  if (action.type === GET_AGENT_SUCCESS) {
    return {
      ...state,
      agents: action.payload.agents,
    };
  }

  if (action.type === SEARCH_TRANSACTION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === SEARCH_TRANSACTION_SUCCESS) {
    return {
      ...state,
      hdb_records: action.payload.records,
      isLoading: false,
    };
  }

  if (action.type === GET_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      adverts: action.payload.adverts,
      totalAdverts: action.payload.totalAdverts,
    };
  }

  if (action.type === GET_USER_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_USER_ADVERT_SUCCESS) {
    const { address, postalCode, area, unitType, size, price, description,imageSourceNames } = action.payload.advert ;
    return {
      ...state,
      address,
      postalCode,
      area,
      unitType,
      size,
      price,
      description,
      imageSourceNames,
      // myAdvert: action.payload.myAdvert,
      hasAdvert: true,
      isLoading: false,
    };
  }

  if (action.type === GET_USER_ADVERT_ERROR) {
    return {
      ...state,
      hasAdvert: false,
      isLoading: false,
    };
  }

  if (action.type === UPLOAD_IMAGE_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      imageToUploadList: action.payload,
    };
  }

  if (action.type === EDIT_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      imageToUploadList: [],
    };
  }


  if (action.type === SET_AREA) {
    return {
        ...state,
        area: action.payload
    }
  }

  if (action.type === SET_UNIT_TYPE) {
    return {
        ...state,
        unitType: action.payload
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  
  if (action.type === DELETE_IMAGE_SUCCESS) {
    const updatedImageSourceNames = state.imageSourceNames.filter(
      (imageUrl) => imageUrl !== action.payload.imageUrl
    );
    return {
      ...state,
      imageSourceNames: updatedImageSourceNames,
    };
  }

  if (action.type === CREATE_ADVERT_SUCCESS) {
    return {
      ...state,
      hasAdvert: true,
      imageToUploadList: []
    };
  }

  if (action.type === DELETE_ADVERT_SUCCESS) {
    const initialState = {
        address: '',
        postalCode: '',
        area: 'North',
        unitType: '2Room',
        size: '',
        price: '',
        description: '',
        imageSourceNames: [],
      };
    return {
      ...state,
      hasAdvert: false,
      ...initialState,
    };
  }


  
};

export default reducer;
