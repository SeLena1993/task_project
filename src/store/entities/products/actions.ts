import * as types from "./actionTypes";
import { toast } from "react-toastify";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ParsedUrlQuery } from "querystring";

import { getProducts, getFilters, getProductCard } from "@/api";
import { StoreState, RequestParams } from "@/store/entities/products";

export const getProductsAction = (
  dataValues?: RequestParams
): ThunkAction<void, StoreState, unknown, Action<string>> => {
  return async (dispatch): Promise<void> => {
    const response = await getProducts(dataValues);

    if (!("error" in response)) {
      const { data } = response;

      dispatch({
        type: types.GET_PRODUCTS_LIST,
        payload: {
          data,
          dataValues,
        },
      });
    } else {
      const { error, data } = response;
      toast.error(data.message);
      console.error(error);
    }
  };
};

export const getFiltersAction = (
  dataValues: RequestParams
): ThunkAction<void, StoreState, unknown, Action<string>> => {
  return async (dispatch): Promise<void> => {
    const response = await getFilters(dataValues);

    if (!("error" in response)) {
      const { data } = response;

      dispatch({
        type: types.GET_FILTERS,
        payload: data,
      });
    } else {
      const { error, data } = response;

      toast.error(data.message);
      console.error(error);
    }
  };
};

export const getProductsCardAction = (
  id: ParsedUrlQuery
): ThunkAction<void, StoreState, unknown, Action<string>> => {
  return async (dispatch): Promise<void> => {
    const response = await getProductCard(id);

    if (!("error" in response)) {
      const { data } = response;

      dispatch({
        type: types.GET_DETAIL,
        payload: data,
      });
    } else {
      const { data, error } = response;
      toast.error(data.message);
      console.error(error);
    }
  };
};
