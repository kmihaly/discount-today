import { Suspense, useContext } from "react";
import { CCol, CContainer, CRow, CSpinner } from "@coreui/react";

import ActionCard from "./ActionCard/ActionCard";
import BaseContext from "../../contexts/BaseProvider";
import Top5Card from "./Top5Card";
import { BaseProviderData } from "../../interfaces";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";
import { SearchCondition, StoreType } from "../../interfaces/baseData.interface";

const LandingPage = (): JSX.Element => {
  const { baseData, isLoadingBaseData, setSearchCondition } =
    useContext<BaseProviderData>(BaseContext);
  const { storeTypes } = baseData;

  const handleTypeClick = (storeType: StoreType): void => {
    setSearchCondition((condition: SearchCondition) => ({
      ...condition,
      storeType: storeType,
    }));
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex-fill d-flex flex-column">
        <main className="flex-fill d-flex flex-column">
          <CContainer lg className="flex-fill">
            <CRow>
              {storeTypes[1] && (
                <CCol xs={12} md={6} lg={4}>
                  <ActionCard
                    className="card-1 text-light"
                    onClick={() => handleTypeClick(storeTypes[1])}
                    title={`${storeTypes[1].name_plural} AKCIÓI`}
                    href="/search"
                  />
                </CCol>
              )}
              {storeTypes[2] && (
                <CCol xs={12} md={6} lg={4}>
                  <ActionCard
                    className="card-2 text-dark"
                    onClick={() => handleTypeClick(storeTypes[2])}
                    title={`${storeTypes[2].name_plural} AKCIÓI`}
                    href="/search"
                  />
                </CCol>
              )}
              <Top5Card />
              {isLoadingBaseData && (
                <CCol
                  xs={12}
                  md={6}
                  lg={4}
                  className="d-flex align-items-center justify-content-center"
                >
                  <CSpinner color="primary" style={{ height: "25%", width: "25%" }} />
                </CCol>
              )}
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
