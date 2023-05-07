import React from "react";
import { CAlert, CCol, CContainer, CNavLink, CRow } from "@coreui/react";

const Page500 = (): JSX.Element => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Houston, baj van!</h4>
              <p className="text-medium-emphasis float-start">
                A keresett oldal pillanatnyilag nem elérhető.
              </p>
            </span>
            <CAlert color="primary">
              <CNavLink href="/">Megpróbálom újra!</CNavLink>
            </CAlert>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page500;
