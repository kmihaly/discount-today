import React from "react";

import { LoginModal, PreferencesModal, RegistrationModal, UserDataModal } from "./modals";
import { ModalEnum, ModalProps } from "../../interfaces/Modal.interface";

const ModalSelector = ({ closeModal, modalVisible, typeRef }: ModalProps): JSX.Element => {
  switch (typeRef.current) {
    case ModalEnum.login:
      return <LoginModal modalVisible={modalVisible} closeModal={closeModal} size="lg" />;
    case ModalEnum.userData:
      return <UserDataModal modalVisible={modalVisible} closeModal={closeModal} />;

    case ModalEnum.preferences:
      return <PreferencesModal modalVisible={modalVisible} closeModal={closeModal} />;

    default:
      return <RegistrationModal modalVisible={modalVisible} closeModal={closeModal} />;
  }
};

export default ModalSelector;
