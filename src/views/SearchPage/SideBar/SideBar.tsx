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

import "./SideBar.scss";

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
  return (
    <CSidebar
      className="p-4"
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
          id="store-or-restaurant"
        >
          <option value="all">Összes</option>
          <option value="food-store-only">Csak élelmiszeráruház</option>
          <option value="fast-food-only">Csak gyorsétterem</option>
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
      <CFormFloating className="mb-3">
        <CFormSelect
          aria-label="Boltválasztó"
          id="shop-selector"
        >
          {shops.map((shop, index) => (
            <option key={`shop-${index}`} value={shop.value}>
              {shop.name}
            </option>
          ))}
        </CFormSelect>
        <CFormLabel className="text-dark" htmlFor="shop-selector">Bolt</CFormLabel>
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
