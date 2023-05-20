import { To } from "react-router-dom";

interface StoreType {
  id: string;
  name: string;
  name_plural: string;
}

interface StoreGroup {
  id: string;
  name: string;
}

interface Offer {
  description?: string;
  warning?: string;
  image: string;
  offer_href: To;
  offer_name: string;
  store_group: string;
  valid_from: string;
  valid_to: string;
}

interface BaseData {
  cities: string[];
  offers: Offer[];
  storeTypes: StoreType[];
  storeGroups: StoreGroup[];
}

interface SearchCondition {
  city: string;
  storeType: StoreType;
  storeGroup: StoreGroup;
}

interface OfferCondition {
  city: string;
  storeType: string;
  storeGroup: string;
}

interface BaseProviderData {
  baseData?: BaseData;
  error: Error;
  fetchOffers: (c: OfferCondition) => void;
  getTopFiveAction: () => void;
  isLoadingBaseData?: boolean;
  searchCondition: SearchCondition;
  setSearchCondition: React.Dispatch<React.SetStateAction<SearchCondition>>;
}

export {
  BaseData,
  BaseProviderData,
  Offer,
  OfferCondition,
  SearchCondition,
  StoreType,
  StoreGroup,
};
