/* eslint-disable import/no-anonymous-default-export */
import { FETCH_SECTIONS, FETCH_SECTION, NEW_SECTION, UPDATE_SECTION, DELETE_SECTION } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SECTIONS:
      return {
        ...state,
        items: action.payload,
      };
      case FETCH_SECTION:
      return {
        ...state,
        item: action.payload,
      };
    case NEW_SECTION:
      return {
        ...state,
        item: action.payload,
      };
    case UPDATE_SECTION:
      return {
        ...state,
        item: action.payload,
      };
      case DELETE_SECTION:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
