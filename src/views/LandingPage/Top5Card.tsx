import { CCol } from "@coreui/react";

import ActionCard from "./ActionCard/ActionCard";
import { OutletContextData } from "../../interfaces";
import { useOutletContext } from "react-router-dom";

const Top5Card = ({ shouldSetActionCards }: { shouldSetActionCards: boolean }): JSX.Element => {
  const { setShowTop5Search, toggleSidebar } = useOutletContext<OutletContextData>();

  const handleClick = () => {
    toggleSidebar(true);
    setShowTop5Search(true);
  }

  return (
    <CCol xs={12} md={6} lg={4}>
      <ActionCard
        className="card-3 text-dark"
        onClick={handleClick}
        shouldSetActionCards={shouldSetActionCards}
        title="NAPI TOP 5 AKCIÓ"
        href="/search"
      />
    </CCol>
  );
};

export default Top5Card;
