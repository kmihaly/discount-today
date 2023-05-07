import React from "react";
import { CSpinner } from "@coreui/react";

const PageLoader = () => {
  return (
    <div className="pt-3 text-center">
      <CSpinner color="primary" variant="grow" />
    </div>
  );
};

export default PageLoader;
