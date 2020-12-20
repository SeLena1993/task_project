import axios, { AxiosError, AxiosPromise } from "axios";
import getConfig from "next/config";
import { ParsedUrlQuery } from "querystring";
import { ApiError, DefaultError } from "@/store/entities";
import {
  RequestParams,
  ProductsList,
  ProductFilter,
  FilterRequestParams,
  ProductDetail,
} from "@/store/entities/products";

export const LIMIT = 16;

const {
  publicRuntimeConfig: { siteUrl },
} = getConfig();

export async function getProducts(
  dataValues?: RequestParams
): Promise<AxiosPromise<ProductsList> | DefaultError> {
  try {
    return await axios.get(`${siteUrl}/api/v1/products`, {
      params: { limit: LIMIT, ...dataValues },
      headers: {
        accept: "application/json",
        locale: "ru-RU",
        region: "msk",
        channel: "web",
      },
    });
  } catch (e) {
    const error = <AxiosError<ApiError>>e;
    const code = error.code || (error.response && error.response.status);
    const message =
      error.response && error.response.data && error.response.data.message;

    return {
      data: {
        message: message || `${code}: Не удалось получить список продуктов`,
        ...error.response,
      },
      error: error,
      status: error.response?.status,
    };
  }
}

export async function getFilters(
  dataValues: FilterRequestParams
): Promise<AxiosPromise<ProductFilter[]> | DefaultError> {
  try {
    return await axios.get(`${siteUrl}/api/v1/products/filter`, {
      params: { ...dataValues },
      headers: {
        accept: "application/json",
        locale: "ru-RU",
        region: "msk",
        channel: "web",
      },
    });
  } catch (e) {
    const error = <AxiosError<ApiError>>e;
    const code = error.code || (error.response && error.response.status);
    const message =
      error.response && error.response.data && error.response.data.message;

    return {
      data: {
        message: message || `${code}: Не удалось получить фильтры`,
        ...error.response,
      },
      error: error,
      status: error.response?.status,
    };
  }
}

export async function getProductCard(
  id: ParsedUrlQuery
): Promise<AxiosPromise<ProductDetail> | DefaultError> {
  try {
    return await axios.get(`${siteUrl}/api/v1/products/${id}`, {
      params: {},
      headers: {
        region: "moscow",
        channel: "web",
        locale: "ru-RU",
      },
    });
  } catch (e) {
    const error = <AxiosError<ApiError>>e;
    const code = error.code || (error.response && error.response.status);
    const message =
      error.response && error.response.data && error.response.data.message;

    return {
      data: {
        message: message || `${code}: Не удалось получить карточку товара`,
        ...error.response,
      },
      error: error,
      status: error.response?.status,
    };
  }
}
