import { CSpinner } from "@coreui/react";

const PageLoader = () => {
  return (
    <div className="pt-3 text-center d-flex align-items-center justify-content-center">
      <CSpinner color="primary" style={{ width: "10rem", height: "10rem" }} />
    </div>
  );
};

export default PageLoader;
