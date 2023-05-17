import { To } from "react-router-dom";

interface OfferData {
  offerName: string;
  description: string;
  image: string;
  offerHref: To;
  storeName: string;
  validFrom: Date;
  validTo: Date;
}

export default OfferData;
