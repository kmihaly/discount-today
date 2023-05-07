import React, { useCallback, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation, ModalSelector } from "../components";
import { ModalEnum } from "../interfaces";

const DefaultLayout = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalTypeRef = useRef(ModalEnum.registration);

  const activateModal = useCallback((modalType: ModalEnum): boolean => {
    modalTypeRef.current = ModalEnum[modalType];
    setModalVisible(true);
    return false;
  }, []);

  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Navigation activateModal={activateModal} />
        <Outlet context={{ activateModal }} />
      </div>
      <ModalSelector
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        typeRef={modalTypeRef}
      />
    </>
  );
};

export default DefaultLayout;
