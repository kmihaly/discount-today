import {
  CButton,
  CCallout,
  CCard,
  CCardBody,
  CCardGroup,
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
  shouldCardDirectionChange: boolean,
  storeGroupName: string;
}

const formatDate = (d: string) => d.split("-").join(".");

const OfferCard = ({ offerData, shouldCardDirectionChange, storeGroupName }: OfferCardProps) => {
  const { offer_name, description, warning, image, offer_href, valid_from, valid_to } = offerData;

  return (
    <CCard className="offer-card my-3">
      <CCardHeader className="text-bold">{`${offer_name} ${storeGroupName ? "(" + storeGroupName + ")" : ""}`}</CCardHeader>
      <CCardGroup className="offer-card__group flex-fill" style={shouldCardDirectionChange ? { flexFlow: "column" } : {}} >
        <CCard className="p-4 flex-fill" style={shouldCardDirectionChange ? { marginBottom: 0, borderBottomLeftRadius: 0 } : {}}>
          <CCardImage src={image} />
        </CCard>
        <CCard className="text-white bg-primary" style={{
          borderBottomLeftRadius: shouldCardDirectionChange ? "0.375rem" : "0",
          flex: "unset",
          height: shouldCardDirectionChange ? "auto" : "20rem",
          marginBottom: shouldCardDirectionChange ? 0 : 'initial',
          width: shouldCardDirectionChange ? "100%" : "11rem",
        }}>
          <CCardBody>
            <CCardText>{`${formatDate(valid_from)} - ${formatDate(valid_to)}`}</CCardText>
            <CCardText>{description}</CCardText>
            {warning && (
              <CCallout className="bg-white text-black offer-card__callout" color="danger">
                <CIcon icon={cilWarning} className="me-2" />
                {warning}
              </CCallout>
            )}
            <CButton color="light" className="px-4" href={offer_href as string}>
              Érdekel!
            </CButton>
          </CCardBody>
        </CCard>
      </CCardGroup>
    </CCard>
  );
};

export default OfferCard;
