import {
  CButton,
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
  storeGroupName: string;
}

const formatDate = (d: string) => d.split("-").join(".");

const OfferCard = ({ offerData, storeGroupName }: OfferCardProps) => {
  const { offer_name, description, warning, image, offer_href, valid_from, valid_to } = offerData;

  return (
    <CCard className="offer-card m-3">
      <CCardHeader>{`${offer_name} (${storeGroupName})`}</CCardHeader>
      <CCardGroup className="card-group-border flex-fill">
        <CCard className="p-4 flex-fill">
          <CCardImage src={image} />
        </CCard>
        <CCard className="text-white bg-success py-2" style={{ width: "11rem", flex: "unset" }}>
          <CCardBody>
            <CCardText>{`${formatDate(valid_from)} - ${formatDate(valid_to)}`}</CCardText>
            <CCardText>{description}</CCardText>
            {warning && (
              <CCardText className="text-danger">
                <CIcon icon={cilWarning} className="me-2" />
                {warning}
              </CCardText>
            )}
            <CButton color="warning" className="px-4" href={offer_href as string}>
              Érdekel!
            </CButton>
          </CCardBody>
        </CCard>
      </CCardGroup>
    </CCard>
  );
};

export default OfferCard;
