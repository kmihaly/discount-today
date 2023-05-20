import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CAlert, CCallout, CContainer, CSpinner } from "@coreui/react";

import BaseContext from "../../contexts/BaseProvider";
import OfferCard from "./OfferCard/OfferCard";
import SideBar from "./SideBar/SideBar";
import { BaseProviderData, StoreGroup } from "../../interfaces";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";

import "./SearchPage.scss"
import { cilSad } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const getStoreGroupName = (groups: StoreGroup[], group_id: string): string =>
  groups.find((gr: StoreGroup) => gr.id === group_id).name;

const SearchPage = () => {
  const { sidebarVisible } = useOutletContext<{ sidebarVisible: boolean }>();
  const { baseData, error, isLoadingBaseData } = useContext<BaseProviderData>(BaseContext);
  const { offers } = baseData;

  return (
    <div className="flex-fill d-flex overflow-auto">
      <SideBar sidebarShow={sidebarVisible} />
      <main className="flex-fill d-flex flex-column">
        <CContainer lg className="flex-fill d-flex justify-content-center flex-wrap">
          {isLoadingBaseData ? (
            <PageLoader />
          ) : (
            offers.map((offer, index) => (
              <OfferCard
                key={`offer-${index}`}
                offerData={offer}
                storeGroupName={getStoreGroupName(baseData.storeGroups, offer.store_group)}
              />
            ))
          )}
          {!isLoadingBaseData && !error && !offers.length && (
            <CAlert className="d-inline m-5 hit-alert" color="danger">
              <CIcon icon={cilSad} className="me-2"/>
              Sajnos nincs találat.
            </CAlert>
          )}
        </CContainer>
        <Footer />
      </main>
    </div>
  );
};

export default SearchPage;
