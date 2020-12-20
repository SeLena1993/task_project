import { TRootReducer } from "../../index.d";
import {
  Product,
  ProductFilter,
  ProductDetail,
  RequestParams,
} from "@/store/entities/products";

export const selectProductsList = (state: TRootReducer): Product[] | null =>
  state?.products.data;
export const selectProductsDataValues = (
  state: TRootReducer
): RequestParams | undefined => state?.products.dataValues;
export const selectProductsListTotal = (
  state: TRootReducer
): number | undefined => state?.products.total;
export const selectFiltersList = (
  state: TRootReducer
): ProductFilter[] | undefined => state?.products.filter;
export const selectProductsCard = (
  state: TRootReducer
): ProductDetail | undefined => state?.products.detail;
