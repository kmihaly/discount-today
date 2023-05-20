import { useContext, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CAlert, CContainer } from "@coreui/react";

import BaseContext from "../../contexts/BaseProvider";
import OfferCard from "./OfferCard/OfferCard";
import SideBar from "./SideBar/SideBar";
import { BaseProviderData, StoreGroup } from "../../interfaces";
import { Footer, PageLoader, ShopLogoContainer } from "../../components";

import "./SearchPage.scss"
import { cilSad } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const getStoreGroupName = (groups: StoreGroup[], group_id: string): string => {
  const currentGroup = groups.find((gr: StoreGroup) => gr.id === group_id);
  if (currentGroup) {
    return currentGroup.name;
  }

  return ""
}

const SearchPage = () => {
  const { sidebarVisible } = useOutletContext<{ sidebarVisible: boolean }>();
  const { baseData, error, getAllBaseData, isLoadingBaseData } = useContext<BaseProviderData>(BaseContext);
  const { offers } = baseData;

  useEffect(() => {
    getAllBaseData();
  }, []);

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
                storeGroupName={getStoreGroupName(baseData.storeGroups, offer.store_group_id )}
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
