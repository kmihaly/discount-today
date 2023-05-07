import React from "react";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CContainer,
  CFormInput,
  CFormSelect,
  CNavItem,
  CNavbar,
  CNavbarNav,
} from "@coreui/react";
import { cilListNumbered, cilStar, cilWalk } from "@coreui/icons";

import "./SearchBar.scss";

const shops = [
  { name: "Mindegyik", value: "all" },
  { name: "Tesco", value: "tesco" },
  { name: "SPAR", value: "spar" },
  { name: "Lidl", value: "lidl" },
];

const SearchBar = () => {
  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-warning border-top">
      <CContainer fluid>
        <CNavbarNav className="flex-fill justify-content-between">
          <CNavItem>
            <CFormSelect
              aria-label="Bolttípus választó"
              floatingLabel="Bolttípus"
              id="store-or-restaurant"
            >
              <option value="all">Összes</option>
              <option value="food-store-only">Csak élelmiszeráruház</option>
              <option value="fast-food-only">Csak gyorsétterem</option>
            </CFormSelect>
          </CNavItem>
          <CNavItem>
            <CFormSelect
              aria-label="Boltválasztó"
              floatingLabel="Válassz egy boltot"
              id="shop-selector"
              style={{ minWidth: "15rem" }}
            >
              {shops.map((shop, index) => (
                <option key={`shop-${index}`} value={shop.value}>
                  {shop.name}
                </option>
              ))}
            </CFormSelect>
          </CNavItem>
          <CNavItem>
            <CFormInput
              type="text"
              id="city-selector"
              floatingLabel="Település"
              placeholder="Település"
            />
          </CNavItem>
          <CNavItem>
            <CButton>
              <CIcon icon={cilWalk} className="me-2" />
              Mutasd a legközelebbit!
            </CButton>
          </CNavItem>
          <CNavItem>
            <CButton>
              <CIcon icon={cilListNumbered} className="me-2" />
              Top5 akció
            </CButton>
          </CNavItem>
          <CNavItem>
            <CButton>
              <CIcon icon={cilStar} className="me-2" />
              Kedvenceim
            </CButton>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default SearchBar;
