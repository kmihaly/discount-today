import { useState } from "react";
import {
  CBadge,
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilDoor, cibFacebook, cibInstagram, cilMagnifyingGlass, cibReact } from "@coreui/icons";

import UserMenu from "./UserMenu/UserMenu";
import useAuth from "../../hooks/useAuth";
import { ModalEnum } from "../../interfaces";
import { useLocation } from "react-router-dom";

import "./Navigation.scss";


interface NavigationProps {
  openModal: (modalType: ModalEnum) => void;
  toggleSidebar: (state?: boolean) => void
}

const Navigation = ({ openModal, toggleSidebar }: NavigationProps): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const isSearchPage = pathname.includes("search");
  // TODO: active element to be set

  return (
    <CNavbar expand="lg" colorScheme="light" className="border-bottom">
      <CContainer fluid>
        {
          isSearchPage &&
          <CHeaderToggler
            className="ms-1 me-3 px-3 py-1 rounded sidebar-toggler-button"
            onClick={(e) => toggleSidebar()}
          >
            <CIcon icon={cilMagnifyingGlass} size="lg" />
          </CHeaderToggler>
        }
        <CNavbarBrand href="/">
          {/* <img
          src={CoreUISignetImg}
          alt=""
          width="22"
          height="24"
          className="d-inline-block align-top"
        /> */}
          <CIcon icon={cibReact} height={24} />
          Brand/logo
        </CNavbarBrand>

        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="flex-fill">
            <CNavItem>
              <CNavLink href="good-for-you">Miért jó Neked itt?</CNavLink>
            </CNavItem>
            <div className="flex-fill"></div>
            {
              !isLoggedIn &&
              <CNavItem className="me-4">
                <CButton color="primary" onClick={() => openModal(ModalEnum.registration)}>
                  Regisztráció
                </CButton>
              </CNavItem>
            }
            <CNavItem className="me-4">
              <CForm className="d-flex">
                <CFormInput type="search" className="me-2" placeholder="Áruház, étterem..." />
                <CButton type="submit" color="primary">
                  Keresés
                </CButton>
              </CForm>
            </CNavItem>
          </CNavbarNav>
          <CNavbarBrand className="d-flex align-items-center" href="#">
            <CIcon icon={cibFacebook} height={24} />
          </CNavbarBrand>
          <CNavbarBrand className="d-flex align-items-center" href="#">
            <CIcon icon={cibInstagram} height={24} />
          </CNavbarBrand>
          {
            !isLoggedIn &&
            <CButton className="me-4" color="primary" onClick={() => openModal(ModalEnum.login)}>
              <CIcon icon={cilDoor} height={24} className="pe-1" />
              Belépés
            </CButton>
          }
          {
            isLoggedIn &&
            <CHeaderNav>
              <CBadge color="primary" shape="rounded-pill">
                <UserMenu openModal={openModal} />
              </CBadge>
            </CHeaderNav>
          }
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navigation;
