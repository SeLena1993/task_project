import React from "react";
import styles from "./ProductsList.scss";
import { Icon } from "@/ui/services";
import Link from "next/link";
import { Product } from "@/store/entities/products";

type PropTypes = {
  products?: Product[] | null;
};

const ProductsList = ({ products }: PropTypes): JSX.Element => {
  return (
    <>
      {products?.map((product) => {
        const { id, code, media, reviewCount, name, price } = product;
        return (
          <Link href={`/products/${code}-${id}`} key={id} prefetch={false}>
            <div className={styles.productsItem} key={id}>
              <div className={styles.productsItemContent}>
                <img className={styles.productsPhoto} src={`${media.media}`} />
                <div className={styles.ratingAndReviews}>
                  <div className={styles.rating}>
                    <Icon
                      width={14}
                      height={14}
                      src="./assessment-rating-star.svg"
                    />
                    <Icon
                      width={14}
                      height={14}
                      src="./assessment-rating-star.svg"
                    />
                    <Icon
                      width={14}
                      height={14}
                      src="./assessment-rating-star.svg"
                    />
                    <Icon
                      width={14}
                      height={14}
                      src="./assessment-rating-star.svg"
                    />
                    <Icon
                      width={14}
                      height={14}
                      src="./no-assessment-rating-star.svg"
                    />
                  </div>
                  <div className={styles.reviews}>{reviewCount}</div>
                </div>
                <Link href={`/products/${code}-${id}`} prefetch={false}>
                  <a className={styles.productName}>{name}</a>
                </Link>
              </div>
              <div className={styles.itemPhotoFooter}>
                <div>
                  <div className={styles.compare}>Сравнить</div>
                </div>
                <div className={styles.priceProductContainer}>
                  {String(price.priceValue).length >= 6 ? (
                    <div className={styles.bigPrice}>
                      {price.priceValue}
                      <span>₽</span>
                    </div>
                  ) : (
                    <div className={styles.price}>
                      {price.priceValue}
                      <span>₽</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default ProductsList;
