import {
  CButton,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { ModalProps } from "../../../interfaces";

const RegistrationModal = ({ closeModal, modalVisible }: ModalProps) => {
  return (
    <CModal visible={modalVisible} onClose={closeModal}>
      <CModalBody>
        <CForm>
          <h1>Regisztráció</h1>
          <p className="text-medium-emphasis">Hozz létre saját fiókot!</p>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilUser} />
            </CInputGroupText>
            <CFormInput placeholder="Felhasználónév" autoComplete="username" />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>@</CInputGroupText>
            <CFormInput placeholder="Email" autoComplete="email" />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput type="password" placeholder="Jelszó" autoComplete="new-password" />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              type="password"
              placeholder="Jelszó megerősítése"
              autoComplete="new-password"
            />
          </CInputGroup>
        </CForm>
        <p>
          A regisztráció után lehetőséged van keresési feltételeket (kedvenceket) beállítani, amik
          alapján gyorsan tudsz keresni, továbbá hírlevelünkben is a kedvenceidnek megfelelő
          akciókról, kedvezményekről tájékoztatunk. A regisztrációval vállalod a feliratkozást
          hírlevelünkre, melyről bármikor leiratkozhatsz.
        </p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal}>
          Mégsem
        </CButton>
        <CButton color="success">Saját fiók létrehozása</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default RegistrationModal;
