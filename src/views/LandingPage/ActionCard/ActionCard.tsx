import {
  CButton,
  CCard,
  CCardBody,
  // CCardFooter,
  // CCardGroup,
  // CCardHeader,
  // // CCardImage,
  // CCardLink,
  // CCardSubtitle,
  CCardText,
  CCardTitle,
  // CListGroup,
  // CListGroupItem,
  // CNav,
  // CNavItem,
  // CNavLink,
  // CCol,
  // CRow,
} from "@coreui/react";
import { NavLink, To } from "react-router-dom";

import "./ActionCard.scss";

interface ActionCardProps {
  className: string;
  href: To;
  onClick: () => void;
  title: string;
}

const ActionCard = ({ className, href, onClick, title }: ActionCardProps) => {
  return (
    <NavLink to={href} className="action-card" onClick={onClick}>
      <CCard className={`mt-3 ${className}`} style={{ height: "25rem" }}>
        <CCardBody className="action-card__body">
          <div className="action-card__body--cut"></div>
          <div className="action-card__title-container">
            <h3 className="action-card__title text-dark">{title}</h3>
          </div>
        </CCardBody>
      </CCard>
    </NavLink>
  );
};

export default ActionCard;
