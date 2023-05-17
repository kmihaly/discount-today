interface BaseData {
    storeTypes?: { name: string, id: string }[]
}

interface BaseProviderData {
    baseData?: BaseData,
    error: Error,
    isLoadingBaseData?: boolean
}

export { BaseData, BaseProviderData };