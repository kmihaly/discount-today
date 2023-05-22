import { CCol } from "@coreui/react";

import ActionCard from "./ActionCard/ActionCard";
import { OutletContextData } from "../../interfaces";
import { useOutletContext } from "react-router-dom";

const Top5Card = ({
  imageSrc,
  shouldSetActionCards,
}: {
  imageSrc: string;
  shouldSetActionCards: boolean;
}): JSX.Element => {
  const { setShowTop5Search, toggleSidebar } = useOutletContext<OutletContextData>();

  const handleClick = () => {
    toggleSidebar(true);
    setShowTop5Search(true);
  };

  return (
    <CCol xs={12} md={6} lg={4} className="py-2">
      <ActionCard
        onClick={handleClick}
        shouldSetActionCards={shouldSetActionCards}
        title="NAPI TOP 5 AKCIÓ"
        href="/search"
        imageSrc={imageSrc}
      />
    </CCol>
  );
};

export default Top5Card;
