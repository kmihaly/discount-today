import { useContext, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CDropdownDivider,
  CFormFloating,
  CFormLabel,
  CFormSelect,
  CSidebar,
  CSpinner,
} from "@coreui/react";
import { cilListNumbered, cilStar, cilWalk } from "@coreui/icons";

import BaseContext from "../../../contexts/BaseProvider";
import useAuth from "../../../hooks/useAuth";
import { BaseProviderData } from "../../../interfaces";

import "./SideBar.scss";

interface SideBarProps {
  sidebarShow: boolean;
}

const SideBar = ({ sidebarShow }: SideBarProps) => {
  const { baseData, fetchOffers, getTopFiveAction, isLoadingBaseData, searchCondition, setSearchCondition } =
    useContext<BaseProviderData>(BaseContext);
  const { cities, storeGroups, storeTypes } = baseData;
  const { city, storeGroup, storeType } = searchCondition;

  console.log("baseData: ", baseData);

  console.log("searchCondition: ", searchCondition);
  const { isLoggedIn } = useAuth();

  const handleStoreTypeSelector = (val: string): void => {
    const selectedStoreType = storeTypes?.find((sType) => String(sType.id) === val);
    setSearchCondition((condition) => ({ ...condition, storeType: selectedStoreType }));
  };

  const handleStoreGroupSelector = (val: string): void => {
    const selectedStoreGroup = storeGroups?.find((sGroup) => String(sGroup.id) === val);
    setSearchCondition((condition) => ({ ...condition, storeGroup: selectedStoreGroup }));
  };

  const handleCitySelector = (val: string): void => {
    const selectedCity = cities?.find((city) => city === val);
    setSearchCondition((condition) => ({ ...condition, city: selectedCity }));
  };

  useEffect(() => {
    fetchOffers({
      city: city,
      storeType: storeType.id,
      storeGroup: storeGroup.id,
    });
  }, [city, storeType.id, storeGroup.id]);

  return (
    <CSidebar
      className="p-3"
      color="dark"
      position="sticky"
      unfoldable={false}
      visible={sidebarShow}
      onVisibleChange={() => {}}
    >
      {isLoadingBaseData ? (
        <CSpinner className="sidebar-spinner" color="info" variant="grow" />
      ) : (
        <>
          <CFormFloating className="mb-3">
            <CFormSelect
              aria-label="Település-választó"
              id="city-selector"
              onChange={(e) => handleCitySelector(e.currentTarget?.value)}
              value={city}
            >
              {cities.map((city, index) => (
                <option key={`city-${index}`} value={city}>
                  {city}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="text-dark" htmlFor="city-selector">
              Település
            </CFormLabel>
          </CFormFloating>
          <CFormFloating className="mb-3">
            <CFormSelect
              aria-label="Bolttípus-választó"
              id="store-or-restaurant"
              onChange={(e) => handleStoreTypeSelector(e.currentTarget?.value)}
              value={storeType.id}
            >
              {storeTypes?.map((storeType) => (
                <option key={`store-type-${storeType.id}`} value={storeType.id}>
                  {storeType.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="text-dark" htmlFor="store-or-restaurant">
              Bolttípus
            </CFormLabel>
          </CFormFloating>
          <CFormFloating className="mb-3">
            <CFormSelect
              aria-label="Bolthálózat-választó"
              id="store-group-selector"
              onChange={(e) => handleStoreGroupSelector(e.currentTarget?.value)}
              value={storeGroup.id}
            >
              {storeGroups.map((sGroup, index) => (
                <option key={`store-group-${index}`} value={sGroup.id}>
                  {sGroup.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="text-dark" htmlFor="shop-selector">
              Bolthálózat
            </CFormLabel>
          </CFormFloating>
          <CDropdownDivider className="sidebar-item-divider mb-3" />
          <CButton className="text-white mb-3">
            <CIcon icon={cilWalk} className="me-2" />
            Mutasd a legközelebbit!
          </CButton>
          <CButton className="text-white mb-3" onClick={getTopFiveAction}>
            <CIcon icon={cilListNumbered} className="me-2" />
            Top5 akció
          </CButton>
        </>
      )}
      {isLoggedIn && (
        <>
          <CButton className="text-white mb-3">
            <CIcon icon={cilStar} className="me-2" />
            Kedvenceim
          </CButton>
        </>
      )}
    </CSidebar>
  );
};

export default SideBar;
