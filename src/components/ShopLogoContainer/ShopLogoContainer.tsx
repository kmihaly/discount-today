import { CContainer } from "@coreui/react";
import { useContext } from "react";

import { BaseProviderData } from "../../interfaces";
import BaseContext from "../../contexts/BaseProvider";
import fastFoodShopLogoCollection from "../../assets/fast-food-shop-logos";
import foodStoreLogoCollection from "../../assets/food-store-logos";

const ShopLogoContainer = () => {
  const { baseData } = useContext<BaseProviderData>(BaseContext);
  const { storeTypes } = baseData;

  const fastFoodShopLogos = Object.values(fastFoodShopLogoCollection);
  const foodStoreLogos = Object.values(foodStoreLogoCollection);

  if (storeTypes[1]?.name_plural && storeTypes[2]?.name_plural) {
    return (
      <>
        <CContainer lg>
          <h3 className="mt-5">{storeTypes[1].name_plural}</h3>
          <div className="d-flex flex-wrap py-2">
            {fastFoodShopLogos.map((logo) => (
              <img
                src={logo}
                alt={`${storeTypes[1].name} logója`}
                height="64"
                className="me-3 mb-3"
              />
            ))}
          </div>
        </CContainer>
        <CContainer lg>
          <h3 className="mt-5">{storeTypes[2].name_plural}</h3>
          <div className="d-flex flex-wrap py-2">
            {foodStoreLogos.map((logo) => (
              <img
                src={logo}
                alt={`${storeTypes[2].name} logója`}
                height="64"
                className="me-3 mb-3"
              />
            ))}
          </div>
        </CContainer>
      </>
    );
  }

  return null;
};

export default ShopLogoContainer;
