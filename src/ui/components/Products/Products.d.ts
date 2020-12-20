export type Props = {
  products: unknown[];
  pagination: {
    sort: string;
    offset: number;
  };
  className?: string;
  loadProducts: ({ offset: number, sort: string }) => void;
};
