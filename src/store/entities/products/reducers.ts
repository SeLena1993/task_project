import { GET_PRODUCTS_LIST, GET_FILTERS, GET_DETAIL } from "./actionTypes";
import {
  ProductDetail,
  ProductFilter,
  StoreState,
  TAction,
} from "@/store/entities/products";

const initialState: StoreState = {
  data: null,
};

export default function (
  state = initialState,
  action: TAction<any>
): Partial<StoreState> {
  switch (action.type) {
    case GET_PRODUCTS_LIST: {
      return {
        ...state,
        ...action.payload.data,
        dataValues: action.payload.dataValues,
      };
    }
    case GET_FILTERS: {
      return {
        ...state,
        filter: action.payload as ProductFilter[],
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.payload as ProductDetail,
      };
    }
    default:
      return state;
  }
}
