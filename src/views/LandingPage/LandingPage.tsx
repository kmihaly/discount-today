import React, { Suspense, useEffect } from "react";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";
import { CCol, CContainer, CRow } from "@coreui/react";
import ActionCard from "./ActionCard/ActionCard";

interface LandingPageProps {
  activateModal: () => void;
}

const LandingPage = (): JSX.Element => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex-fill d-flex flex-column">
        <main className="flex-fill d-flex flex-column">
          <CContainer lg className="flex-fill">
            <CRow>
              <CCol xs={12} md={6} lg={4}>
                <ActionCard className="bg-info" title="ÉLELMISZERÁRUHÁZAK AKCIÓI" href="/search" />
              </CCol>
              <CCol xs={12} md={6} lg={4}>
                <ActionCard className="bg-warning" title="GYORSÉTTERMEK AKCIÓI" href="/search" />
              </CCol>
              <CCol xs={12} md={6} lg={4}>
                <ActionCard className="bg-success" title="TOP5 AKCIÓ" href="/search" />
              </CCol>
            </CRow>
          </CContainer>
          <ShopLogoContainer />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default LandingPage;
