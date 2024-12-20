export interface Item {
  id: number
  count: number,
  typeMetalDetectorsId: number,
  yearIssue: number,
  brand: string,
  countryManufactureId: number,
  availabilityId: number
}

export interface ItemSearch {
  id: number;
  count: number;
  typeMetalDetectorsId: number;
  typeMetalDetectorsNameKaz: string;
  typeMetalDetectorsNameRus: string;
  yearIssue: number;
  brand: string;
  countryManufactureId: number;
  countryManufactureNameKaz: string;
  countryManufactureNameRus: string;
  availabilityId: number;
  availabilityNameKaz: string;
  availabilityNameRus: string;
  createdAt: string;
}

export interface ItemFilter {
  totalPages: number;
  totalElements: number;
  sort: ItemSort;
  first: boolean;
  pageable: ItemPageable;
  numberOfElements: number;
  last: boolean;
  size: number;
  content: ItemSearch[];
  number: number;
  empty: boolean;
}

export interface ItemSort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface ItemPageableSort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface ItemPageable {
  sort: ItemPageableSort;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  offset: number;
}

export interface Spravochnik {
  id: number,
  nameKaz: string,
  nameRus: string
}
