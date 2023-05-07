import React from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  // CModalHeader,
  // CModalTitle,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { ModalProps } from "../../../interfaces";

const RegistrationModal = ({ closeModal, modalVisible }: ModalProps) => {
  return (
    <CModal visible={modalVisible} onClose={closeModal}>
      {/* <CModalHeader closeButton>
                <CModalTitle>{title}</CModalTitle>
            </CModalHeader> */}
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
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary">Mégsem</CButton>
        <CButton color="success">Felhasználói fiók létrehozása</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default RegistrationModal;
