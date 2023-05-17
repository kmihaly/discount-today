import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CContainer } from "@coreui/react";

import { Footer, ShopLogoContainer } from "../../components";
import SideBar from "./SideBar/SideBar";
import OfferCard from "./OfferCard/OfferCard";
import OfferData from "./Offer.interface";

const SearchPage = () => {
  //const offers: OfferData[] = [];
  const { sidebarVisible } = useOutletContext<{ sidebarVisible: boolean }>();
  const [fakeOfferList, setFakeOfferList] = useState([]);

  useEffect(() => {
    const fakeOffers: OfferData[] = [];

    const fakeData = {
      offerName: "50% leértékelés a SPAR-nál!",
      description:
        "Odio aenean sed adipiscing diam donec. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/WTSB_Obersch%C3%BCtzen_Spar_Tatzmannsdorferstra%C3%9Fe_51.jpg/1280px-WTSB_Obersch%C3%BCtzen_Spar_Tatzmannsdorferstra%C3%9Fe_51.jpg",
      offerHref: "https://www.spar.hu/",
      storeName: "SPAR",
      validFrom: new Date(),
      validTo: new Date(),
    };

    for (let index = 0; index < 25; index++) {
      fakeOffers.push(fakeData);
    }

    setFakeOfferList(fakeOffers);
  }, []);

  return (
    <div className="flex-fill d-flex overflow-auto">
      <SideBar sidebarShow={sidebarVisible} />
      <main className="flex-fill d-flex flex-column">
        <CContainer lg className="flex-fill d-flex justify-content-center flex-wrap">
          {fakeOfferList.map((offer, index) => (
            <OfferCard key={`offer-${index}`} offerData={offer} />
          ))}
        </CContainer>
        <Footer />
      </main>
    </div >
  );
};

export default SearchPage;
