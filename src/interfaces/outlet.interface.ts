import { ModalEnum } from "./modal.interface";

interface OutletContextData {
  openModal: (modalType: ModalEnum) => void;
  setErrorToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setGeolocationNotSupportedToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNearestOffers: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTop5Search: React.Dispatch<React.SetStateAction<boolean>>;
  showNearestOffers: boolean;
  showTop5Search: boolean;
  sidebarVisible: boolean;
  toggleSidebar: (state?: boolean) => void;
}

export default OutletContextData;
