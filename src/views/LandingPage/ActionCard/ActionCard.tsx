import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  // CCardFooter,
  // CCardGroup,
  // CCardHeader,
  // // CCardImage,
  // CCardLink,
  // CCardSubtitle,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { NavLink, To } from "react-router-dom";

import "./ActionCard.scss";

interface ActionCardProps {
  className?: string;
  href: To;
  imageSrc: string;
  onClick: () => void;
  shouldSetActionCards: boolean;
  title: string;
}

const ActionCard = ({
  className = "",
  href,
  imageSrc,
  onClick,
  shouldSetActionCards,
  title,
}: ActionCardProps) => {
  return (
    <NavLink to={href} className="action-card" onClick={onClick}>
      <CCard className={`h-100 ${className}`}>
        <CCardImage orientation="top" src={imageSrc} />
        <CCardBody className="d-flex justify-content-center align-items-center">
          <div className={`action-card__title text-dark h3 ${shouldSetActionCards ? "h4" : ""}`}>
            {title}
          </div>
        </CCardBody>
      </CCard>
    </NavLink>
  );
};

export default ActionCard;
