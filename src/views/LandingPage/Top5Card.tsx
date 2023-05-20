import { CCol } from "@coreui/react";
import { useContext } from "react";

import ActionCard from "./ActionCard/ActionCard";
import BaseContext from "../../contexts/BaseProvider";
import { BaseProviderData } from "../../interfaces";

const Top5Card = () => {
  const { getTopFiveAction } = useContext<BaseProviderData>(BaseContext);

  return (
    <CCol xs={12} md={6} lg={4}>
      <ActionCard
        className="card-3 text-dark"
        onClick={() => getTopFiveAction()}
        title="NAPI TOP 5 AKCIÓ"
        href="/search"
      />
    </CCol>
  );
};

export default Top5Card;
