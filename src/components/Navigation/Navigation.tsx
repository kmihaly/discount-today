import React, { useState } from "react";
import {
  CBadge,
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilDoor, cibFacebook, cibInstagram, cibReact } from "@coreui/icons";

import "./Navigation.scss";
import UserMenu from "./UserMenu/UserMenu";
import { ModalEnum } from "../../interfaces";

interface NavigationProps {
  activateModal: (modalType: ModalEnum) => boolean;
}

const Navigation = ({ activateModal }: NavigationProps): JSX.Element => {
  const [visible, setVisible] = useState(false);
  // TODO: active element to be set

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-warning">
      <CContainer fluid>
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
            <CNavItem className="me-4">
              <CButton color="primary" onClick={() => activateModal(ModalEnum.registration)}>
                Regisztráció
              </CButton>
            </CNavItem>
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
          <CButton className="me-4" color="primary" onClick={() => activateModal(ModalEnum.login)}>
            <CIcon icon={cilDoor} height={24} />
            Belépés
          </CButton>
          <CHeaderNav>
            <CBadge color="primary" shape="rounded-pill">
              <UserMenu activateModal={activateModal} />
            </CBadge>
          </CHeaderNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navigation;
