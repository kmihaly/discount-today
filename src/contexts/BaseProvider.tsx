import { createContext, useEffect, useState } from "react";
import { axiosPublic } from "../api/axios";

import { BaseData, BaseProviderData } from "../interfaces";
import apiURL from "../constants/apiUrl.constant";


interface BaseProviderProps {
    children: React.ReactNode
}

const BaseContext = createContext<BaseProviderData>({
    error: null,
    isLoadingBaseData: false
});

const getBaseData = async (endpoint: string) => {
    const response = await axiosPublic.get(endpoint, {
        withCredentials: true
    });
    return response.data;
};


export const BaseProvider = ({ children }: BaseProviderProps): JSX.Element => {
    const [baseData, setBaseData] = useState<BaseData>({})
    const [error, setError] = useState<Error>(null);
    const [isLoadingBaseData, setIsLoadingBaseData] = useState<boolean>(false);

    const getAllBaseData = async () => {
        setIsLoadingBaseData(true);
        const allPromise = Promise.all([getBaseData(apiURL.storeTypes)])

        allPromise
            .then(responseData => {
                setBaseData({
                    storeTypes: responseData[0],
                });
                setIsLoadingBaseData(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoadingBaseData(false);
                setError(err);
            });
    }

    useEffect(() => {
        getAllBaseData();
    }, [])

    return (
        <BaseContext.Provider value={{ baseData, error, isLoadingBaseData }}>
            {children}
        </BaseContext.Provider>
    )
}

export default BaseContext;
