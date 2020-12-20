import React from "react";
import styles from "./Products.scss";
import ProductsList from "@/ui/components/Products/ProductsList/ProductsList";
import Pagination from "@/ui/components/Pagination/Pagination";
import FilterSidebar from "@/ui/components/FilterSidebar/FilterSidebar";
import {
  Product,
  ProductFilter,
  RequestParams,
} from "@/store/entities/products";

type PropTypes = {
  filters?: ProductFilter[];
  products?: Product[] | null;
  total?: number;
  dataValues?: RequestParams;
  onLoadProducts: (data: RequestParams) => void;
};

const Products = ({
  filters,
  products,
  total,
  dataValues,
  onLoadProducts,
}: PropTypes): JSX.Element => {
  return (
    <div className={styles.productsWrapper}>
      <div className={styles.productsContainer}>
        <FilterSidebar filters={filters} />
        <div className={styles.productsCatalog}>
          <ProductsList products={products} />
          <Pagination
            total={total}
            dataValues={dataValues}
            onLoadProducts={onLoadProducts}
          />
        </div>
      </div>
    </div>
  );
};
export default Products;
