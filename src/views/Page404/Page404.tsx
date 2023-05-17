import { CAlert, CCol, CContainer, CNavLink, CRow } from "@coreui/react";

const Page404 = (): JSX.Element => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Hoppá! Eltévedtél.</h4>
              <p className="text-medium-emphasis float-start">A keresett oldal nem található.</p>
            </div>
            <CAlert color="primary">
              <CNavLink href="/">Vissza az akciókhoz!</CNavLink>
            </CAlert>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page404;
