import { createContext, useEffect, useState } from "react";
import { axiosPublic } from "../api/axios";

import apiURL from "../constants/apiUrl.constant";
import { BaseData, BaseProviderData, Offer, OfferCondition } from "../interfaces";
import {
  INITIAL_BASE_DATA,
  INITIAL_OFFER_CONDITION,
  INITIAL_SEARCH_CONDITION,
} from "../constants/baseData.constant";
import { SearchCondition } from "../interfaces/baseData.interface";

interface BaseProviderProps {
  children: React.ReactNode;
  error: Error;
  setError: React.Dispatch<React.SetStateAction<Error>>;
  setErrorToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setGeolocationNotSupportedToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaseContext = createContext<BaseProviderData>({
  baseData: INITIAL_BASE_DATA,
  error: null,
  fetchOffers: () => {},
  getAllBaseData: () => {},
  getNearestOffers: () => {},
  getTopFiveOffers: () => {},
  isLoadingBaseData: false,
  searchCondition: INITIAL_SEARCH_CONDITION,
  setSearchCondition: () => {},
});

const getBaseData = async (endpoint: string) => {
  const response = await axiosPublic.get(endpoint, {
    //withCredentials: true
  });
  return response.data;
};

const getOffers = async (conditions: OfferCondition): Promise<Offer[]> => {
  const data = {
    city: conditions.city === "Összes" ? "all" : conditions.city,
    store_group: conditions.storeGroup,
    store_type: conditions.storeType,
  };

  const response = await axiosPublic.post(apiURL.offers, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      // withCredentials: true,
    },
  });

  return response.data;
};

export const BaseProvider = ({
  children,
  error,
  setError,
  setErrorToastVisible,
  setGeolocationNotSupportedToastVisible,
}: BaseProviderProps): JSX.Element => {
  const [isLoadingBaseData, setIsLoadingBaseData] = useState<boolean>(false);
  const [baseData, setBaseData] = useState<BaseData>(INITIAL_BASE_DATA);
  const [geolocationPosition, setGeolocationPosition] = useState<GeolocationPosition>(null);
  const [searchCondition, setSearchCondition] = useState<SearchCondition>(INITIAL_SEARCH_CONDITION);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setGeolocationPosition, () =>
        setGeolocationNotSupportedToastVisible(true),
      );
    } else {
      setGeolocationNotSupportedToastVisible(true);
    }
  };

  const fetchOffers = async (conditions: OfferCondition) => {
    setError(null);
    setIsLoadingBaseData(true);
    try {
      const offers = await getOffers(conditions);
      setIsLoadingBaseData(false);
      setBaseData(
        (data): BaseData => ({
          ...data,
          offers,
        }),
      );
    } catch (err) {
      console.error(err);
      setIsLoadingBaseData(false);
      setError(err);
    }
  };

  const getAllBaseData = (): void => {
    setError(null);
    setIsLoadingBaseData(true);
    const allPromise = Promise.all([
      getBaseData(apiURL.storeTypes),
      getBaseData(apiURL.storeGroups),
      getBaseData(apiURL.cities),
      getOffers(INITIAL_OFFER_CONDITION),
    ]);

    allPromise
      .then((responseData) => {
        setIsLoadingBaseData(false);
        setBaseData({
          storeTypes: [...INITIAL_BASE_DATA.storeTypes, ...responseData[0]],
          storeGroups: [...INITIAL_BASE_DATA.storeGroups, ...responseData[1]],
          cities: [...INITIAL_BASE_DATA.cities, ...responseData[2]],
          offers: responseData[3],
        });
      })
      .catch((err) => {
        console.error(err);
        setIsLoadingBaseData(false);
        setError(err);
      });
  };

  const getTopFiveOffers = async () => {
    setError(null);
    setIsLoadingBaseData(true);
    try {
      const response = await axiosPublic.get(apiURL.top5, {
        //withCredentials: true
      });
      const offers = response.data;
      setBaseData(
        (data): BaseData => ({
          ...data,
          offers,
        }),
      );
      setIsLoadingBaseData(false);
      setSearchCondition(INITIAL_SEARCH_CONDITION);
    } catch (err) {
      console.error(err);
      setIsLoadingBaseData(false);
      setError(err);
    }
  };

  const getNearestOffers = () => {
    setError(null);
    setIsLoadingBaseData(true);
    getLocation();
  };

  const fetchNearestOffers = async () => {
    if (geolocationPosition?.coords?.latitude && geolocationPosition?.coords?.longitude) {
      try {
        const response = await axiosPublic.post(
          apiURL.nearestOffers,
          JSON.stringify({
            user_location: {
              latitude: geolocationPosition?.coords?.latitude,
              longitude: geolocationPosition?.coords?.longitude,
            },
          }),
          {
            headers: { "Content-Type": "application/json" },
            //withCredentials: true
          },
        );
        const offers = response.data;
        setBaseData(
          (data): BaseData => ({
            ...data,
            offers,
          }),
        );
        setIsLoadingBaseData(false);
        setSearchCondition(INITIAL_SEARCH_CONDITION);
      } catch (err) {
        console.error(err);
        setIsLoadingBaseData(false);
        setError(err);
      }
    }
  };

  useEffect(() => {
    if (error) {
      setErrorToastVisible(true);
    }
  }, [error]);

  useEffect(() => {
    fetchNearestOffers();
  }, [geolocationPosition]);

  return (
    <BaseContext.Provider
      value={{
        baseData,
        error,
        fetchOffers,
        getAllBaseData,
        getNearestOffers,
        getTopFiveOffers,
        isLoadingBaseData,
        searchCondition,
        setSearchCondition,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContext;
