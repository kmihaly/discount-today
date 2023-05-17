import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation, ModalsContainer } from "../components";
import { ModalEnum, ModalsVisibility } from "../interfaces";
import { AuthProvider, BaseProvider } from "../contexts";

const INITIAL_MODALS_VISIBILITY = {
  [ModalEnum.login]: false,
  [ModalEnum.userData]: false,
  [ModalEnum.preferences]: false,
  [ModalEnum.registration]: false,
};

const DefaultLayout = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [modalsVisibility, setModalsVisibility] = useState<ModalsVisibility>(INITIAL_MODALS_VISIBILITY);

  const closeModal = useCallback(() => setModalsVisibility(INITIAL_MODALS_VISIBILITY), []);

  const toggleSidebar = (state?: boolean) => {
    if (typeof state === 'boolean') {
      setSidebarVisible(state);
      return;
    }
    setSidebarVisible(!sidebarVisible);
  }

  const openModal = useCallback((modalType: ModalEnum) => {
    setModalsVisibility({
      ...INITIAL_MODALS_VISIBILITY,
      [modalType]: true
    })
  }, []);

  return (
    // <AuthProvider>
      <BaseProvider>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <Navigation openModal={openModal} toggleSidebar={toggleSidebar} />
          <Outlet context={{ openModal, sidebarVisible }} />
        </div>
        <ModalsContainer
          modalsVisibility={modalsVisibility}
          closeModal={closeModal}
        />
      </BaseProvider>
    // </AuthProvider>
  );
};

export default DefaultLayout;
