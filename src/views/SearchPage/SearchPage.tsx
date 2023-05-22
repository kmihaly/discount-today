import CIcon from "@coreui/icons-react";
import { CAlert, CCol, CContainer, CRow } from "@coreui/react";
import { cilSad } from "@coreui/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { useMeasure } from "react-use";
import { useOutletContext } from "react-router-dom";

import BaseContext from "../../contexts/BaseProvider";
import OfferCard from "./OfferCard/OfferCard";
import SideBar from "./SideBar/SideBar";
import { BaseProviderData, OutletContextData, StoreGroup } from "../../interfaces";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";

import "./SearchPage.scss";

const getStoreGroupName = (groups: StoreGroup[], group_id: string): string => {
  const currentGroup = groups.find((gr: StoreGroup) => gr.id === group_id);
  if (currentGroup) {
    return currentGroup.name;
  }

  return "";
};

const SearchPage = () => {
  const { sidebarVisible } = useOutletContext<OutletContextData>();
  const { baseData, error, isLoadingBaseData } = useContext<BaseProviderData>(BaseContext);
  const [shouldCardDirectionChange, setShouldCardDirectionChange] = useState<boolean>(false);
  const isContainerPreviouslyTooSmallRef = useRef<boolean>(null);
  const [ref, { width: containerWidth }] = useMeasure();
  const { offers } = baseData;

  useEffect(() => {
    const tooSmall = containerWidth < 640;
    if (tooSmall !== isContainerPreviouslyTooSmallRef.current) {
      isContainerPreviouslyTooSmallRef.current = tooSmall;
      setShouldCardDirectionChange(tooSmall);
    }
  }, [containerWidth]);

  return (
    <div className="flex-fill d-flex overflow-auto">
      <SideBar sidebarShow={sidebarVisible} />
      <main className="flex-fill d-flex flex-column overflow-auto">
        <CContainer
          fluid
          className="flex-fill d-flex justify-content-center flex-wrap"
          ref={ref}
        >
          {isLoadingBaseData ? (
            <PageLoader />
          ) : (
            <>
              {offers.map((offer, index) => (
                <OfferCard
                  key={`offer-${index}`}
                  offerData={offer}
                  shouldCardDirectionChange={shouldCardDirectionChange}
                  storeGroupName={getStoreGroupName(baseData.storeGroups, offer.store_group_id)}
                />
              ))}
            </>
          )}
          {!isLoadingBaseData && !error && !offers.length && (
            <CAlert className="d-inline m-5 hit-alert" color="danger">
              <CIcon icon={cilSad} className="me-2" />
              Sajnos nincs találat.
            </CAlert>
          )}
        </CContainer>
        <ShopLogoContainer />
        <Footer />
      </main>
    </div>
  );
};

export default SearchPage;
