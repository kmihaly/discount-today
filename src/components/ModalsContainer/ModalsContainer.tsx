import { LoginModal } from "./modals";
import { ModalEnum, ModalsVisibility, OpenModal } from "../../interfaces/modal.interface";

interface ModalsContainerProps {
  closeModal: () => void;
  modalsVisibility: ModalsVisibility;
  openModal: OpenModal;
}

const ModalsContainer = ({ closeModal, modalsVisibility, openModal }: ModalsContainerProps): JSX.Element => {
  return (
    <>
      <LoginModal
        modalVisible={modalsVisibility[ModalEnum.login]}
        closeModal={closeModal}
        size="lg"
      />
    </>
  );
};

export default ModalsContainer;
