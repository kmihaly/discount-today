import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { CNavLink, CToast, CToastBody, CToastClose, CToaster } from "@coreui/react";

import { Navigation, ModalsContainer } from "../components";
import { ModalEnum, ModalsVisibility } from "../interfaces";
import { AuthProvider, BaseProvider } from "../contexts";

import CIcon from "@coreui/icons-react";
import { cilWarning } from "@coreui/icons";

import "./DefaultLayout.scss";

const INITIAL_MODALS_VISIBILITY = {
  [ModalEnum.login]: false,
  [ModalEnum.userData]: false,
  [ModalEnum.preferences]: false,
  [ModalEnum.registration]: false,
};

const DefaultLayout = (): JSX.Element => {
  const [error, setError] = useState<Error>(null);
  const [errorToastVisible, setErrorToastVisible] = useState<boolean>(false);
  const [geolocationNotSupportedToastVisible, setGeolocationNotSupportedToastVisible] =
    useState<boolean>(false);
  const [modalsVisibility, setModalsVisibility] =
    useState<ModalsVisibility>(INITIAL_MODALS_VISIBILITY);
  const [showNearestOffers, setShowNearestOffers] = useState<boolean>(false);
  const [showTop5Search, setShowTop5Search] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const closeModal = useCallback(() => { console.log('closeModal: ', closeModal); setModalsVisibility(INITIAL_MODALS_VISIBILITY)}, []);
  

  const toggleSidebar = (state?: boolean) => {
    if (typeof state === "boolean") {
      setSidebarVisible(state);
      return;
    }
    setSidebarVisible(!sidebarVisible);
  };

  const openModal = useCallback((modalType: ModalEnum) => {
  console.log('modalType: ', modalType);
    setModalsVisibility({
      ...INITIAL_MODALS_VISIBILITY,
      [modalType]: true,
    });

  }, []);

  const closeErrorToast = (): void => {
    setError(null);
    setErrorToastVisible(false);
  };
  
  console.log('modalsVisibility: ', modalsVisibility);

  return (
    <AuthProvider>
      <BaseProvider
        error={error}
        setError={setError}
        setErrorToastVisible={setErrorToastVisible}
        setGeolocationNotSupportedToastVisible={setGeolocationNotSupportedToastVisible}
      >
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <Navigation openModal={openModal} toggleSidebar={toggleSidebar} />
          <Outlet
            context={{
              openModal,
              setErrorToastVisible,
              setShowNearestOffers,
              setShowTop5Search,
              showNearestOffers,
              showTop5Search,
              sidebarVisible,
              toggleSidebar,
            }}
          />
        </div>
        <ModalsContainer modalsVisibility={modalsVisibility} closeModal={closeModal} openModal={openModal}/>
        <CToaster className="toasts-container">
          <CToast
            autohide={false}
            visible={errorToastVisible}
            color="danger"
            className="text-white align-items-center"
          >
            <div className="d-flex">
              <CToastBody>
                <CIcon icon={cilWarning} className="me-2" />
                Hiba a kapcsolatban. Kérjük jelezd nekünk! <br />
                <CNavLink className="nav-link" href="mailto:info@sporoljma.hu">
                  info@sporoljma.hu
                </CNavLink>
              </CToastBody>
              <CToastClose className="me-2 m-auto" onClick={closeErrorToast} white />
            </div>
          </CToast>
          <CToast
            autohide={false}
            visible={geolocationNotSupportedToastVisible}
            color="danger"
            className="text-white align-items-center"
          >
            <div className="d-flex">
              <CToastBody>
                <CIcon icon={cilWarning} className="me-2" />
                Ez a böngésző nem támogatja a geolokációt.
              </CToastBody>
              <CToastClose
                className="me-2 m-auto"
                onClick={() => setGeolocationNotSupportedToastVisible(false)}
                white
              />
            </div>
          </CToast>
        </CToaster>
      </BaseProvider>
    </AuthProvider>
  );
};

export default DefaultLayout;
