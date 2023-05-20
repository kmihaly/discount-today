import { BaseData, OfferCondition, SearchCondition } from "../interfaces";

const ALL_GROUP_OPTION = { name: "Összes", id: "all" };
const ALL_TYPE_OPTION = { name: "Összes", name_plural: "-", id: "all" };



const INITIAL_BASE_DATA: BaseData = {
  cities: ["Összes"],
  offers: [],
  storeTypes: [ALL_TYPE_OPTION],
  storeGroups: [ALL_GROUP_OPTION],
};

const INITIAL_SEARCH_CONDITION: SearchCondition = {
  city: INITIAL_BASE_DATA.cities[0],
  storeType: INITIAL_BASE_DATA.storeTypes[0],
  storeGroup: INITIAL_BASE_DATA.storeGroups[0],
};

const INITIAL_OFFER_CONDITION: OfferCondition = {
  city: "all",
  storeGroup: "all",
  storeType: "all",
};

export { ALL_GROUP_OPTION, ALL_TYPE_OPTION, INITIAL_BASE_DATA, INITIAL_OFFER_CONDITION, INITIAL_SEARCH_CONDITION };
