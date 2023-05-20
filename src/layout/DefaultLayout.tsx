import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { CNavLink, CToast, CToastBody, CToastClose } from "@coreui/react";

import { Navigation, ModalsContainer } from "../components";
import { ModalEnum, ModalsVisibility } from "../interfaces";
import { AuthProvider, BaseProvider } from "../contexts";

import "./DefaultLayout.scss";
import CIcon from "@coreui/icons-react";
import { cilWarning } from "@coreui/icons";

const INITIAL_MODALS_VISIBILITY = {
  [ModalEnum.login]: false,
  [ModalEnum.userData]: false,
  [ModalEnum.preferences]: false,
  [ModalEnum.registration]: false,
};

const DefaultLayout = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [errorToastVisible, setErrorToastVisible] = useState<boolean>(false);
  const [modalsVisibility, setModalsVisibility] =
    useState<ModalsVisibility>(INITIAL_MODALS_VISIBILITY);

  const closeModal = useCallback(() => setModalsVisibility(INITIAL_MODALS_VISIBILITY), []);

  const toggleSidebar = (state?: boolean) => {
    if (typeof state === "boolean") {
      setSidebarVisible(state);
      return;
    }
    setSidebarVisible(!sidebarVisible);
  };

  const openModal = useCallback((modalType: ModalEnum) => {
    setModalsVisibility({
      ...INITIAL_MODALS_VISIBILITY,
      [modalType]: true,
    });
  }, []);

  const closeToast = (): void => {
      setError(null);
      setErrorToastVisible(false);
  }

  return (
    // <AuthProvider>
    <BaseProvider error={error} setError={setError} setErrorToastVisible={setErrorToastVisible}>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Navigation openModal={openModal} toggleSidebar={toggleSidebar} />
        <Outlet context={{ errorToastVisible, openModal, setErrorToastVisible, sidebarVisible, toggleSidebar }} />
      </div>
      <ModalsContainer modalsVisibility={modalsVisibility} closeModal={closeModal} />
      <CToast
        autohide={false}
        visible={errorToastVisible}
        color="danger"
        className="text-white align-items-center error-toast"
      >
        <div className="d-flex">
          <CToastBody>
            <CIcon icon={cilWarning} className="me-2"/>
            Hiba a kapcsolatban. Kérjük jelezd nekünk! <br />
            <CNavLink className="nav-link" href="mailto:info@sporoljma.hu">
                  info@sporoljma.hu
            </CNavLink>
          </CToastBody>
          <CToastClose className="me-2 m-auto" onClick={closeToast} white />
        </div>
      </CToast>
    </BaseProvider>
    // </AuthProvider>
  );
};

export default DefaultLayout;
