import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilExitToApp,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

//import avatar8 from './../../assets/images/avatars/8.jpg'
import "./UserMenu.scss";
import { ModalEnum } from "../../../interfaces";

const UserMenu = ({
  activateModal,
}: {
  activateModal: (modalType: ModalEnum) => boolean;
}): JSX.Element => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle className="py-0 menu-toggle-anchor" caret={false}>
        {/* <CAvatar src={avatar8} size="md" /> */}
        <CIcon icon={cilUser} className="me-2" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 menu-toggle-list" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Felhasználó beállítások
        </CDropdownHeader>
        <CDropdownItem onClick={() => activateModal(ModalEnum.userData)}>
          {/* href="#"  */}
          <CIcon icon={cilUser} className="me-2" />
          Adatok
        </CDropdownItem>
        <CDropdownItem onClick={() => activateModal(ModalEnum.preferences)}>
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Hírlevél, keresési beállítások
        </CDropdownItem>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilExitToApp} className="me-2" />
          Kilépés
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default UserMenu;
