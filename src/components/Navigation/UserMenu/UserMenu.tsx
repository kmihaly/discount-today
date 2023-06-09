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
import useAuth from "../../../hooks/useAuth";

const UserMenu = ({ openModal }: { openModal: (modalType: ModalEnum) => void }): JSX.Element => {

  const { auth } = useAuth()

  const isStaff = true;

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle className="py-0 menu-toggle-anchor me-2" caret={false}>
        {/* <CAvatar src={avatar8} size="md" /> */}
        <CIcon icon={cilUser} />
        { auth?.username && <span className="h6 ms-2 mb-0">{ auth.username }</span> }
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 menu-toggle-list" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Felhasználó beállítások
        </CDropdownHeader>
        <CDropdownItem onClick={() => openModal(ModalEnum.userData)}>
          {/* href="#"  */}
          <CIcon icon={cilUser} className="me-2" />
          Adatok
        </CDropdownItem>
        <CDropdownItem onClick={() => openModal(ModalEnum.preferences)}>
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Hírlevél, keresési beállítások
        </CDropdownItem>
        {isStaff && (
          <>
            <CDropdownHeader className="bg-light fw-semibold py-2">Boltok kezelése</CDropdownHeader>
            <CDropdownItem onClick={() => openModal(ModalEnum.userData)}>
              {/* href="#"  */}
              <CIcon icon={cilSettings} className="me-2" />
              Boltok
            </CDropdownItem>
          </>
        )}
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
