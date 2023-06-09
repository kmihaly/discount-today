import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import {
  // CModalHeader,
  // CModalTitle,
  CAlert,
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
  // CModalBody,
  // CModalFooter,
  CRow,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import apiUrl from "../../../constants/apiUrl.constant";
import useAuth from "../../../hooks/useAuth";
import { ModalEnum, ModalProps } from "../../../interfaces";
import { axiosPublic } from "../../../api/axios";

const LoginModal = ({ closeModal, size, modalVisible, openModal }: ModalProps) => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  //const from = location.state?.from?.pathname || "/";

  const usernameRef = useRef<HTMLInputElement>();
  const errRef = useRef<HTMLInputElement>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleRegisterButton = () => {
    navigate('/registration');
  };

  const handleSubmit = async () => {
    // e
    //e.preventDefault();

    try {
      const response = await axiosPublic.post(
        apiUrl.login,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const { access, refresh } = response?.data;
      setAuth({ username, password, accessToken: access, refreshToken: refresh });
      setUsername("");
      setPassword("");
      closeModal();
    } catch (err) {
      console.log('err: ', err);
      if (!err?.response) {
        setLoginErrorMessage("Szerverhiba.");
      } else if (err.response?.status === 400) {
        setLoginErrorMessage("A felhasználónév vagy a jelszó nem megfelelő.");
      } else if (err.response?.status === 401) {
        setLoginErrorMessage("Nincs megfelelő jogosultsága.");
      } else {
        setLoginErrorMessage("Bejelentkezés sikertelen.");
      }
      errRef?.current?.focus();
    }
  };

  useEffect(() => {
    usernameRef?.current?.focus();
  }, []);

  useEffect(() => {
    setLoginErrorMessage("");
  }, [username, password]);

  return (
    <CModal visible={modalVisible} size={size} onClose={closeModal}>
      <CCardGroup>
        <CCard className="p-4">
          <CCardBody>
            <CForm>
              <h1>Bejelentkezés</h1>
              { loginErrorMessage && <CAlert color="danger">{loginErrorMessage}</CAlert>}
              <p className="text-medium-emphasis">Lépj be a fiókodba!</p>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  ref={usernameRef}
                  placeholder="Felhasználónév"
                  autoComplete="on"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="Jelszó"
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <CButton color="primary" className="px-4 text-white" onClick={handleSubmit}>
                    Bejelentkezés
                  </CButton>
                </CCol>
                <CCol xs={6} className="text-right">
                  <CButton color="link" className="px-0">
                    Elfelejtetted a jelszót?
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
                feliratkozhatnak személyre szabott hírlevelünkre.
              </p>
              <CButton color="primary" className="mt-3 text-white" active tabIndex={-1} onClick={handleRegisterButton}>
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
