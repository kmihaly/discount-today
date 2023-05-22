import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { CCol, CContainer, CRow, CSpinner } from "@coreui/react";

import ActionCard from "./ActionCard/ActionCard";
import BaseContext from "../../contexts/BaseProvider";
import Top5Card from "./Top5Card";
import { BaseProviderData, OutletContextData } from "../../interfaces";
import { Burger, Grocery, Money } from "../../assets/action-card-photos";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";
import { SearchCondition, StoreType } from "../../interfaces/baseData.interface";
import { useOutletContext } from "react-router-dom";

const LandingPage = (): JSX.Element => {
  const [shouldSetActionCards, setShouldSetActionCards] = useState<boolean>(false);
  const isWindowPreviouslyNarrowForActionCardsRef = useRef<boolean>(null);
  const { toggleSidebar } = useOutletContext<OutletContextData>();
  const { baseData, getAllBaseData, isLoadingBaseData, setSearchCondition } =
    useContext<BaseProviderData>(BaseContext);
  const { storeTypes } = baseData;

  const handleTypeClick = (storeType: StoreType): void => {
    toggleSidebar(true);
    setSearchCondition((condition: SearchCondition) => ({
      ...condition,
      storeType: storeType,
    }));
  };

  useEffect(() => {
    const measureWindowForActionCards = () => {
      const isWindowNarrowForActionCards = window.innerWidth < 1200;
      if (isWindowNarrowForActionCards !== isWindowPreviouslyNarrowForActionCardsRef.current) {
        isWindowPreviouslyNarrowForActionCardsRef.current = isWindowNarrowForActionCards;
        setShouldSetActionCards(isWindowNarrowForActionCards);
      }
    };

    window.addEventListener("resize", measureWindowForActionCards);
    measureWindowForActionCards();
    return () => window.removeEventListener("resize", measureWindowForActionCards);
  }, []);

  useEffect(() => {
    getAllBaseData();
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex-fill d-flex flex-column">
        <main className="flex-fill d-flex flex-column overflow-auto">
          <CContainer lg className="flex-fill">
            <CRow className="mt-2">
              {storeTypes[1] && (
                <CCol xs={12} md={6} lg={4} className="py-2">
                  <ActionCard
                    className="text-light"
                    href="/search"
                    imageSrc={Burger}
                    onClick={() => handleTypeClick(storeTypes[1])}
                    shouldSetActionCards={shouldSetActionCards}
                    title={`${storeTypes[1].name_plural} AKCIÓI`}
                  />
                </CCol>
              )}
              {storeTypes[2] && (
                <CCol xs={12} md={6} lg={4} className="py-2">
                  <ActionCard
                    className="text-dark"
                    href="/search"
                    imageSrc={Grocery}
                    onClick={() => handleTypeClick(storeTypes[2])}
                    shouldSetActionCards={shouldSetActionCards}
                    title={`${storeTypes[2].name_plural} AKCIÓI`}
                  />
                </CCol>
              )}
              <Top5Card imageSrc={Money} shouldSetActionCards={shouldSetActionCards} />
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
