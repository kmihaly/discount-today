import { BaseData, OfferCondition } from "../interfaces";

const ALL_GROUP_OPTION = { name: "Összes", id: "all" };
const ALL_TYPE_OPTION = { name: "Összes", name_plural: "-", id: "all" };

const INITIAL_BASE_DATA: BaseData = {
  cities: ["Összes"],
  offers: [],
  storeTypes: [ALL_TYPE_OPTION],
  storeGroups: [ALL_GROUP_OPTION],
};

const INITIAL_OFFER_CONDITIONS: OfferCondition = {
  city: "all",
  storeGroup: "all",
  storeType: "all",
};

export { ALL_GROUP_OPTION, ALL_TYPE_OPTION, INITIAL_BASE_DATA, INITIAL_OFFER_CONDITIONS };
