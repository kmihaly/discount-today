import React from "react";
//import { NavLink } from "react-router-dom";
import { CContainer, CNavLink } from "@coreui/react";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer bg-dark text-light">
      <CContainer lg className="d-flex justify-content-around flex-wrap">
        {/* <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2023 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div> */}
        <CNavLink className="nav-link" href="/impressum">
          Impresszum
        </CNavLink>
        <CNavLink className="nav-link" href="/contact">
          Kapcsolat
        </CNavLink>
        <CNavLink
          className="nav-link"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adatkezelési tájékoztató
        </CNavLink>
      </CContainer>
    </footer>
  );
};

export default React.memo(Footer);
