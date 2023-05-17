import { LoginModal, PreferencesModal, RegistrationModal, UserDataModal } from "./modals";
import { ModalEnum, ModalsVisibility } from "../../interfaces/modal.interface";

interface ModalsContainerProps {
  closeModal: () => void,
  modalsVisibility: ModalsVisibility
}

const ModalsContainer = ({ closeModal, modalsVisibility }: ModalsContainerProps): JSX.Element => {

  return <>
    <LoginModal modalVisible={modalsVisibility[ModalEnum.login]} closeModal={closeModal} size="lg" />
    <UserDataModal modalVisible={modalsVisibility[ModalEnum.userData]} closeModal={closeModal} />
    <PreferencesModal modalVisible={modalsVisibility[ModalEnum.preferences]} closeModal={closeModal} />
    <RegistrationModal modalVisible={modalsVisibility[ModalEnum.registration]} closeModal={closeModal} />
  </>
};

export default ModalsContainer;
