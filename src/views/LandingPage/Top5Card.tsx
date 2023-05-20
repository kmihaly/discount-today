import { CCol } from "@coreui/react";
import { useContext } from "react";

import ActionCard from "./ActionCard/ActionCard";
import BaseContext from "../../contexts/BaseProvider";
import { BaseProviderData } from "../../interfaces";
import { useOutletContext } from "react-router-dom";

const Top5Card = () => {
  const { toggleSidebar } = useOutletContext<{ toggleSidebar: (state: boolean) => void }>();
  const { getTopFiveAction } = useContext<BaseProviderData>(BaseContext);
  
  const handleClick = () => {
    toggleSidebar(true);
    getTopFiveAction();
  }

  return (
    <CCol xs={12} md={6} lg={4}>
      <ActionCard
        className="card-3 text-dark"
        onClick={handleClick}
        title="NAPI TOP 5 AKCIÓ"
        href="/search"
      />
    </CCol>
  );
};

export default Top5Card;
