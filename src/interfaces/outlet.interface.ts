import { ModalEnum } from "./modal.interface";

interface OutletContextData {
    errorToastVisible: boolean,
    openModal: (modalType: ModalEnum) => void,
    setErrorToastVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setShowTop5Search: React.Dispatch<React.SetStateAction<boolean>>,
    showTop5Search: boolean,
    sidebarVisible: boolean,
    toggleSidebar: (state?: boolean) => void,
}

export default OutletContextData;