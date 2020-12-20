import React from "react";

import SubCategoriesList from "./SubCategoriesList";
import Sort from "./Sort";

import styles from "./Catalog.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAction,
  RequestParams,
  selectFiltersList,
  selectProductsDataValues,
  selectProductsList,
  selectProductsListTotal,
} from "@/store/entities/products";
import Products from "@/ui/components/Products/Products";

const Catalog = (): JSX.Element => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFiltersList);
  const dataValues = useSelector(selectProductsDataValues);
  const total = useSelector(selectProductsListTotal);
  const products = useSelector(selectProductsList);

  const handleLoadProducts = (dataValues: RequestParams) => {
    dispatch(getProductsAction(dataValues));
  };

  return (
    <div className={styles.root}>
      <SubCategoriesList />
      <Sort />
      <Products
        products={products}
        filters={filters}
        dataValues={dataValues}
        total={total}
        onLoadProducts={handleLoadProducts}
      />
    </div>
  );
};

export default Catalog;
