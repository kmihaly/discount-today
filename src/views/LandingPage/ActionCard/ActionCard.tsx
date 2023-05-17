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
  title: string;
}

const ActionCard = ({ className, href, title }: ActionCardProps) => {
  return (
    <NavLink to={href} className="action-card">
      <CCard className={`mt-3 ${className}`} style={{ height: "25rem" }}>
        {/* <CCardImage orientation="top" src={ReactImg} /> */}
        <CCardBody className="d-flex justify-content-center align-items-center">
          <CCardTitle>{title}</CCardTitle>
          {/* <CCardText> */}
          {/* Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CCardText> */}
          {/* <CButton href="#"><CCardTitle>Card title</CCardTitle></CButton> */}
        </CCardBody>
      </CCard>
    </NavLink>
  );
};

export default ActionCard;
