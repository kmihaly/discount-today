import {
  CButton,
  CCallout,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilWarning } from "@coreui/icons";

import { Offer } from "../../../interfaces";

import "./OfferCard.scss";

interface OfferCardProps {
  offerData: Omit<Offer, "storeName">;
  shouldCardDirectionChange: boolean;
  storeGroupName: string;
}

const formatDate = (d: string) => d.split("-").join(".");

const OfferCard = ({ offerData, shouldCardDirectionChange, storeGroupName }: OfferCardProps) => {
  const { offer_name, description, warning, image, offer_href, valid_from, valid_to } = offerData;

  return (
    <CCard className="offer-card m-3">
      <CCardHeader className="text-bold">
        {`${offer_name} ${storeGroupName ? "(" + storeGroupName + ")" : ""}`}
      </CCardHeader>
      <CCardBody
        className="offer-card__group flex-fill "
        style={shouldCardDirectionChange ? { flexDirection: "column" } : {}}
      >
        <div
          className="p-3 flex-fill"
          style={shouldCardDirectionChange ? { marginBottom: 0, borderBottomLeftRadius: 0 } : {}}
        >
          <CCardImage src={image} />
          {warning && (
            <CCallout className="bg-white text-black offer-card__callout" color="danger">
              <CIcon icon={cilWarning} className="me-2" />
              {warning}
            </CCallout>
          )}
        </div>
        <div
          className="p-3 text-white bg-primary"
          style={{
            borderBottomLeftRadius: shouldCardDirectionChange ? "0.375rem" : "0",
            width: shouldCardDirectionChange ? "100%" : "12rem",
          }}
        >
            <CCardText>{`${formatDate(valid_from)} - ${formatDate(valid_to)}`}</CCardText>
            <CCardText>{description}</CCardText>

            <CButton color="light" className="px-4" href={offer_href as string}>
              Érdekel!
            </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default OfferCard;
