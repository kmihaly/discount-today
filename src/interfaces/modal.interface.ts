enum ModalEnum {
  userData = "userData",
  login = "login",
  preferences = "preferences",
  registration = "registration",
}

interface ModalsVisibility {
  [ModalEnum.login]: boolean;
  [ModalEnum.userData]: boolean;
  [ModalEnum.preferences]: boolean;
  [ModalEnum.registration]: boolean;
}

interface ModalProps {
  closeModal: () => void;
  modalVisible: boolean;
  size?: "sm" | "lg" | "xl";
}

export { ModalEnum, ModalProps, ModalsVisibility };
