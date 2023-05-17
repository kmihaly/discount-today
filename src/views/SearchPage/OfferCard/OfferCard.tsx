import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
//import { cilLockLocked, cilUser } from '@coreui/icons'
//import CIcon from '@coreui/icons-react';

import OfferData from "../Offer.interface";

import "./OfferCard.scss";

interface OfferCardProps {
  offerData: Omit<OfferData, "storeName">;
}

const formatToHungarianDate = (d: Date) => d.toLocaleString("hu-HU", { dateStyle: "short" });

const OfferCard = ({ offerData }: OfferCardProps) => {
  const {
    offerName,
    description,
    image,
    offerHref,
    //storeName,
    validFrom,
    validTo,
  } = offerData;

  return (
    <CCard className="m-3" style={{ width: "30rem" }}>
    <CCardHeader>{offerName}</CCardHeader>
    <CCardGroup className="card-group-border">    
      <CCard className="p-4 flex-fill">
        <CCardImage src={image} />
      </CCard>
      <CCard className="text-white bg-success py-5" style={{ width: "10rem", flex: 'unset' }}>
        <CCardBody>
          <CCardText>
            {`${formatToHungarianDate(validFrom)} - ${formatToHungarianDate(validTo)}`}
          </CCardText>
          <CCardText>{description}</CCardText>
          <CButton color="warning" className="px-4" href={offerHref as string}>
            Érdekel!
          </CButton>
        </CCardBody>
      </CCard>
    </CCardGroup>
    </CCard>
  );
};

export default OfferCard;
