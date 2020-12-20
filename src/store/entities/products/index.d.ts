export type ProductMedia = {
  media: string | null;
  pixlId: string | null;
};

export type ProductSearchQueryData = {
  /**
   * Запрос, по которому произошел поиск
   */
  searchQuery: string;
  /**
   * Исходный запрос транслитерирован
   */
  transliterated: boolean;
  /**
   * Исходный запрос скорректирован
   */
  corrected: boolean;
};

export type Price = {
  /**
   * Если этот параметр true, нужно выводить приставку "от"
   */
  isMultiplePrices: boolean;
  priceValue: number;
  oldPriceValue: number;
  discountPercentValue: number;
  currency: string;
};

export type ProductType = "model" | "supermodel" | "gift-card" | "service";

export type ProductBadge = {
  code: string;
  title: string;
  /**
   * Hex Color
   * @example #00ff44
   */
  color: string;
  /**
   * Ссылка на иконку бейджика
   */
  icon: string | null;
};

export type AdvantageLevel = {
  min: number;
  max: number;
  current: number;
};

export type Advantage = {
  code: string;
  title: string;
  /**
   * Ссылка на иконку
   */
  icon: string | null;
  level: AdvantageLevel;
};

export type Gallery = {
  images: ProductMedia[];
  videos: string[];
  gifs: string[];
};

export type Attribute = {
  name: string;
  code: string;
  type: FilterParamType;
  group: string;
  groupName: string;
};

export type ProductShort = {
  id: string;
  code: string;
  url: string;
  media: ProductMedia;
};

export type Product = {
  id: string;
  code: string;
  name: string;
  url: string;
  media: ProductMedia;
  price: Price;
  article: string;
  /**
   * Тип товара
   */
  type: ProductType;
  /**
   * Бейджик
   */
  badge: ProductBadge;
  /**
   * Преимущества
   */
  advantages: Advantage;
  /**
   * Доступность товара
   */
  available: boolean;
  /**
   * @minimum: 0
   * @maximum: 5
   */
  reviewRate: number;
  reviewCount: number;
  /**
   * Модели другого цвета
   */
  similarModels: ProductShort[];
};

export type ProductDetail = Product & {
  gallery: Gallery;
  description: string;
  note: string;
  video: string | null;
  attributes: Attribute;
};

export type RangeGroupParam = {
  /**
   * Предельное (макс. или мин.) значение свойства
   */
  total: number;
  /**
   * Предельное (макс. или мин.) выбранное значение
   */
  selected: number;
  /**
   * Предельное (макс. или мин.) отображенное значение
   */
  displayed: number;
};

export type FilterRange = {
  name: string;
  /**
   * Символьный код параметра
   */
  code: string;
  min: RangeGroupParam;
  max: RangeGroupParam;
};

export type FilterParamType = "list" | "search-list" | "color";

export type FilterParamValue = {
  /**
   * Название параметра
   */
  name: string;
  description?: string;
  value: string;
  icon?: string | null;
  color?: string | null;
  selected?: boolean;
  disabled?: boolean;
  count: number;
};

export type FilterParam = {
  /**
   * Название атрибута
   */
  name: string;
  /**
   * Символьный код атрибута
   */
  code: string;
  /**
   * Тип атрибута
   * @example: color
   */
  type: FilterParamType;
  values: FilterParamValue;
};

export type FilterCheckboxParam = {
  name: string;
  code: string;
  value: FilterParamValue;
};

export type ProductFilter = FilterRange | FilterParam | FilterCheckboxParam;

export type RequestParams = {
  [filter: string]: string | undefined;
};

export type FilterRequestParams = {
  [propName: string]: string | undefined;
};

export type ProductsList = {
  data: Product[] | null;
  total?: number;
  query?: ProductSearchQueryData | null;
};

export type StoreState = ProductsList & {
  /**
   * Массив параметров фильтра для отображения
   */
  filter?: ProductFilter[];
  dataValues?: RequestParams;
  detail?: ProductDetail;
};

export type TAction<T> = {
  type: string;
  payload?: T;
};

export type TProducts = StoreState;
