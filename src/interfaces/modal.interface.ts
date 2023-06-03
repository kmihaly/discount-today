enum ModalEnum {
  userData = "userData",
  login = "login",
  preferences = "preferences",
  registration = "registration",
}

type OpenModal = (type: ModalEnum) => void

interface ModalsVisibility {
  [ModalEnum.login]: boolean;
  [ModalEnum.userData]: boolean;
  [ModalEnum.preferences]: boolean;
  [ModalEnum.registration]: boolean;
}

interface ModalProps {
  closeModal: () => void;
  modalVisible: boolean;
  openModal?: OpenModal;
  size?: "sm" | "lg" | "xl";
}

export { ModalEnum, ModalProps, ModalsVisibility, OpenModal };
