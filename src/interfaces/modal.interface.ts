import { MutableRefObject } from "react";

enum ModalEnum {
  userData = "userData",
  login = "login",
  preferences = "preferences",
  registration = "registration",
}

interface ModalProps {
  closeModal: () => void;
  modalVisible: boolean;
  size?: "sm" | "lg" | "xl";
  typeRef?: MutableRefObject<ModalEnum>;
}

export { ModalEnum, ModalProps };
