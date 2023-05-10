import {
  // CModalHeader,
  // CModalTitle,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CRow,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { ModalProps } from "../../../interfaces";

const LoginModal = ({ closeModal, size, modalVisible }: ModalProps) => {
  return (
    <CModal visible={modalVisible} size={size} onClose={closeModal}>
      <CCardGroup>
        <CCard className="p-4">
          <CCardBody>
            <CForm>
              <h1>Bejelentkezés</h1>
              <p className="text-medium-emphasis">Jelentkezz be a fiókodba</p>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput placeholder="Felhasználónév" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput type="password" placeholder="Jelszó" autoComplete="current-password" />
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <CButton color="primary" className="px-4">
                    Bejelentkezés
                  </CButton>
                </CCol>
                <CCol xs={6} className="text-right">
                  <CButton color="link" className="px-0">
                    Elfelejtett jelszó?
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="text-white bg-primary py-5" style={{ width: "44%" }}>
          <CCardBody className="text-center">
            <div>
              <h2>Regisztráció</h2>
              <p>
                A regisztrálók elmenthetik kedvezményekkel, akciókkal kapcsolatos beállításaikat és
                feliratkozhatnak hírlevelünkre.
              </p>
              <CButton color="primary" className="mt-3" active tabIndex={-1}>
                Regisztrálj most!
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCardGroup>
    </CModal>
  );
};

export default LoginModal;
