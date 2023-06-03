import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CBadge,
  CButton,
  CCollapse,
  CContainer,
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
import {
  cilDoor,
  cibFacebook,
  cibInstagram,
  cilMagnifyingGlass,
  cibReact,
  cilPen,
} from "@coreui/icons";

import UserMenu from "./UserMenu/UserMenu";
import useAuth from "../../hooks/useAuth";
import { ModalEnum } from "../../interfaces";
import { LogoImage, LogoText } from "../../assets/logo";

import "./Navigation.scss";

interface NavigationProps {
  openModal: (modalType: ModalEnum) => void;
  toggleSidebar: (state?: boolean) => void;
}

const Navigation = ({ openModal, toggleSidebar }: NavigationProps): JSX.Element => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState<boolean>(true);
  const isNavbarPreviouslyExpandedRef = useRef<boolean>(null);
  const shouldPreviouslyShowLogoTextRef = useRef<boolean>(null);
  const [shouldShowLogoText, setShouldShowLogoText] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();

  const handleToggler = () => {
    if (!pathname.includes("search")) {
      navigate("/search");
    }
    toggleSidebar();
  };

  useEffect(() => {
    const measureWindowForNavbar = () => {
      const isWindowLarge = window.innerWidth >= 992;
      const isSpaceEnoughForLogoText = window.innerWidth > 460;

      if (isWindowLarge !== isNavbarPreviouslyExpandedRef.current) {
        isNavbarPreviouslyExpandedRef.current = isWindowLarge;
        setIsNavbarExpanded(isWindowLarge);
      }

      if (isSpaceEnoughForLogoText !== shouldPreviouslyShowLogoTextRef.current) {
        shouldPreviouslyShowLogoTextRef.current = isSpaceEnoughForLogoText;
        setShouldShowLogoText(isSpaceEnoughForLogoText);
      }
    };

    window.addEventListener("resize", measureWindowForNavbar);
    measureWindowForNavbar();
    return () => window.removeEventListener("resize", measureWindowForNavbar);
  }, []);

  return (
    <CNavbar expand="lg" colorScheme="light" className="border-bottom">
      <CContainer fluid>
        <CHeaderToggler
          className="ms-1 me-3 px-3 py-1 rounded sidebar-toggler-button"
          onClick={handleToggler}
        >
          <CIcon icon={cilMagnifyingGlass} size="lg" />
        </CHeaderToggler>
        <CNavbarBrand href="/">
          <img src={LogoImage} alt="logo" height="24" className="d-inline-block align-top me-2" />
          {shouldShowLogoText && (
            <img
              src={LogoText}
              alt="logo szöveg"
              height="24"
              className="d-inline-block align-top"
            />
          )}
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="flex-fill">
            <CNavItem>
              <CNavLink href="good-for-you">Miért jó itt Neked?</CNavLink>
            </CNavItem>
            <div className="flex-fill"></div>
            {!isLoggedIn && (
              <>
                <CNavItem className="me-2" >
                  <CNavLink href="registration">Regisztráció</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CButton
                    className={`text-white me-4 ${isNavbarExpanded ? "" : "mt-2"}`}
                    color="primary"
                    onClick={() => openModal(ModalEnum.login)}
                  >
                    <CIcon icon={cilDoor} height={24} className="pe-1" />
                    Belépés
                  </CButton>
                </CNavItem>
              </>
            )}
          </CNavbarNav>
          <CNavbarBrand className="d-flex align-items-center" href="#">
            <CIcon icon={cibFacebook} height={24} />
          </CNavbarBrand>
          <CNavbarBrand className="d-flex align-items-center" href="#">
            <CIcon icon={cibInstagram} height={24} />
          </CNavbarBrand>
          {isLoggedIn && (
            <CHeaderNav>
              <CBadge color="primary" shape="rounded-pill">
                <UserMenu openModal={openModal} />
              </CBadge>
            </CHeaderNav>
          )}
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navigation;
