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
  SHOW_SINGLE_ADVERT,
  CLEAR_ADVERT_FORM_VALUES,
  CREATE_ADVERT_BEGIN,
  CREATE_ADVERT_SUCCESS,
  CREATE_ADVERT_ERROR,
  GET_ADVERT_BEGIN,
  GET_ADVERT_SUCCESS,
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
  GET_OTHER_USER_ADVERT_BEGIN,
  GET_OTHER_USER_ADVERT_SUCCESS,
  GET_OTHER_USER_ADVERT_ERROR,
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

import { initialState } from './appContext';

/**
 * User Reducer
 */

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please enter all values.',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      // token: action.payload.token,
      // user: action.payload.user,
      // email: action.payload.email,
      // number: action.payload.number,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Proceed to Log In',
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      // email: action.payload.email,
      // number: action.payload.number,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSideBar: !state.showSideBar,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Information Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  /**
   * Advertisement Reducer
   */

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === SHOW_SINGLE_ADVERT) {
    return {
      ...state,
      showSingleAdvert: !state.showSingleAdvert,
      singleAdvertId: action.payload,
    }
  }

  if (action.type === CLEAR_ADVERT_FORM_VALUES) {
    const initialState = {
      isEditing: false,
      address: '',
      postalCode: '',
      area: 'North',
      unitType: '2Room',
      size: '',
      price: '',
      description: '',
      imageList: [],
      imageSourceNames: [],
    };
    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === CREATE_ADVERT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Advert Created',
      imageList: [],
      hasAdvert: true,
    };
  }

  if (action.type === CREATE_ADVERT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
      imageList: [],
    };
  }

  if (action.type === GET_ADVERT_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      adverts: action.payload.adverts,
      totalAdverts: action.payload.totalAdverts,
      numOfPages: action.payload.numOfPages,
    };
  }

  // if (action.type === SET_EDIT_ADVERT) {
  //   const advert = state.adverts.find(
  //     (advert) => advert._id === action.payload.id
  //   );
  //   const {
  //     _id,
  //     address,
  //     postalCode,
  //     area,
  //     unitType,
  //     size,
  //     price,
  //     description,
  //     image,
  //   } = advert;
  //   return {
  //     ...state,
  //     isEditing: true,
  //     editAdvertId: _id,
  //     address,
  //     postalCode,
  //     area,
  //     unitType,
  //     size,
  //     price,
  //     description,
  //     image,
  //   };
  // }

  if (action.type === GET_USER_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_USER_ADVERT_SUCCESS) {
    const { address, postalCode, area, unitType, size, price, description,imageSourceNames } =
      action.payload.advert ;
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
      isLoading: false,
      hasAdvert: true,
    };
  }

  if (action.type === GET_USER_ADVERT_ERROR) {
    return {
      ...state,
      isLoading: false,
      hasAdvert: false,
    };
  }
  
  if (action.type === GET_OTHER_USER_ADVERT_BEGIN) {
    return {
      ...state,
    };
  }

  if (action.type === GET_OTHER_USER_ADVERT_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === GET_OTHER_USER_ADVERT_ERROR) {
    return {
      ...state,
    };
  }

  if (action.type === EDIT_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Advertisement Updated',
      imageList: [],
      imageSourceNames: [],
    };
  }

  if (action.type === EDIT_ADVERT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
      imageList: [],
      imageSourceNames: [],
    };
  }

  if (action.type === DELETE_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Advertisement Deleted',
      hasAdvert: false,
    };
  }

  if (action.type === DELETE_ADVERT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_ADMIN_ADVERT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_ADMIN_ADVERT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }

  if (action.type === SET_IMAGE_LIST) {
    return {
      ...state,
      imageList: action.payload.imageList,
    };
  }

  if (action.type === UPLOAD_IMAGE_LIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === UPLOAD_IMAGE_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      imageUrlList: action.payload,
    };
  }

  if (action.type === UPLOAD_IMAGE_LIST_ERROR) {
    return {
      ...state,
      isLoading:false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
      
    }
  }

  if (action.type === DELETE_IMAGE_BEGIN) {
    return {
      ...state,
      isLoading: true,
      
    }
  }

  if (action.type === DELETE_IMAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: "Image Successfully Deleted",
    }
  }

  if (action.type === DELETE_IMAGE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  /**
   * Banker Reducer
   */

  if (action.type === CLEAR_BANKER_FORM_VALUES) {
    const initialState = {
      banker_name: '',
      banker_bank: '',
      banker_position: '',
      banker_number: '',
      banker_email: '',
      banker_image: '',
    };

    return {
      ...state,
      isEditingBanker: false,
      ...initialState,
    };
  }

  if (action.type === CREATE_BANKER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_BANKER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Mortgage Banker Added',
    };
  }

  if (action.type === CREATE_BANKER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_BANKER_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_BANKER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      bankers: action.payload.bankers,
    };
  }

  if (action.type === SET_EDIT_BANKER) {
    const banker = state.bankers.find(
      (banker) => banker._id === action.payload.bankerId
    );
    const {
      _id,
      banker_name,
      banker_bank,
      banker_position,
      banker_email,
      banker_image,
      banker_number,
    } = banker;
    return {
      ...state,
      isEditingBanker: true,
      editBankerId: _id,
      banker_name,
      banker_bank,
      banker_position,
      banker_number,
      banker_email,
      banker_image,
    };
  }

  if (action.type === DELETE_BANKER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_BANKER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_BANKER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Banker info updated',
    };
  }

  if (action.type === EDIT_BANKER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  /**
   * Property Agent Reducer
   */

  if (action.type === CLEAR_AGENT_FORM_VALUES) {
    const initialState = {
      agent_name: '',
      agent_company: '',
      agent_position: '',
      agent_number: '',
      agent_email: '',
      agent_image: '',
    };

    return {
      ...state,
      isEditingAgent: false,
      ...initialState,
    };
  }

  if (action.type === CREATE_AGENT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_AGENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Property Agent Added',
    };
  }

  if (action.type === CREATE_AGENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_AGENT_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_AGENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      agents: action.payload.agents,
    };
  }

  if (action.type === SET_EDIT_AGENT) {
    const agent = state.agents.find(
      (agent) => agent._id === action.payload.agentId
    );
    const {
      _id,
      agent_name,
      agent_company,
      agent_position,
      agent_email,
      agent_image,
      agent_number,
    } = agent;
    return {
      ...state,
      isEditingAgent: true,
      editAgentId: _id,
      agent_name,
      agent_company,
      agent_position,
      agent_number,
      agent_email,
      agent_image,
    };
  }

  if (action.type === DELETE_AGENT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_AGENT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_AGENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Agent info updated',
    };
  }

  if (action.type === EDIT_AGENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  /**
   * Past Transactions Reducer
   */

  if (action.type === CLEAR_SEARCH_FORM_VALUES) {
    const initialState = {
      hdb_town: '',
      hdb_block: '',
      hdb_street: '',
      hdb_flatType: '',
    };

    return {
      ...state,
      ...initialState,
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
      isLoading: false,
      hdb_records: action.payload.records,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
