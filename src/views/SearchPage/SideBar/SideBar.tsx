import { useContext, useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CDropdownDivider,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CSidebar,
} from "@coreui/react";
import { cilListNumbered, cilMagnifyingGlass, cilStar, cilWalk } from "@coreui/icons";

import BaseContext from "../../../contexts/BaseProvider";

import "./SideBar.scss";
import { BaseProviderData } from "../../../interfaces";

interface SearchCondition {
  storeType: { name: string, id: string },
}

const ALL_STORETYPE_OPTION = { name: 'Összes', id: 'all' };

const INITIAL_SEARCH_CONDITIONS = {
  storeType: ALL_STORETYPE_OPTION
}

const shops = [
  { name: "Mindegyik", value: "all" },
  { name: "Tesco", value: "tesco" },
  { name: "SPAR", value: "spar" },
  { name: "Lidl", value: "lidl" },
];

interface SideBarProps {
  sidebarShow: boolean;
}

const SideBar = ({
  sidebarShow
}: SideBarProps) => {

  const [searchConditions, setSearchConditions] = useState<SearchCondition>(INITIAL_SEARCH_CONDITIONS)
  console.log('searchConditions: ', searchConditions);
  const { baseData } = useContext<BaseProviderData>(BaseContext);

  const allStoreTypes = [ALL_STORETYPE_OPTION];

  if (baseData?.storeTypes?.length) {
    allStoreTypes.concat(baseData.storeTypes);
  }

  const handleStoreTypeSelector = (val: string): void => {
      setSearchConditions((sc) => ({ ...sc, storeType: allStoreTypes?.find(s_type => s_type.id === val )}));
  };

  return (
    <CSidebar
      className="p-3"
      color="dark"
      position="sticky"
      unfoldable={false}
      visible={sidebarShow}
      onVisibleChange={() => { }}
    >
      <CFormFloating className="mb-3">
        <CFormInput type="text" id="city-selector" placeholder="Település" />
        <CFormLabel className="text-dark" htmlFor="city-selector">Település</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormSelect
          aria-label="Bolttípus-választó"
          onChange={e => handleStoreTypeSelector(e.currentTarget?.value)}
          value={searchConditions.storeType.id}
          id="store-or-restaurant"
        >
          {allStoreTypes?.map(storeType => <option key={`store-type-${storeType.id}`} value={storeType.id}>{storeType.name}</option>)}
        </CFormSelect>
        <CFormLabel className="text-dark" htmlFor="store-or-restaurant">Bolttípus</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormSelect
          aria-label="Bolthálózat-választó"
          id="shop-selector"
        >
          {shops.map((shop, index) => (
            <option key={`shop-${index}`} value={shop.value}>
              {shop.name}
            </option>
          ))}
        </CFormSelect>
        <CFormLabel className="text-dark" htmlFor="shop-selector">Bolthálózat</CFormLabel>
      </CFormFloating>
      <CButton className="mb-3">
        <CIcon icon={cilMagnifyingGlass} className="me-1" />
        Keresés
      </CButton>
      <CDropdownDivider className="sidebar-item-divider mb-3" />
      <CButton className="mb-3">
        <CIcon icon={cilWalk} className="me-2" />
        Mutasd a legközelebbit!
      </CButton>
      <CButton className="mb-3">
        <CIcon icon={cilListNumbered} className="me-2" />
        Top5 akció
      </CButton>
      <CButton className="mb-3">
        <CIcon icon={cilStar} className="me-2" />
        Kedvenceim
      </CButton>
    </CSidebar>
  );
};

export default SideBar;
