import { CCard, CCardBody, CCardTitle, CContainer } from "@coreui/react";

import Footer from "../Footer";

import "./TextPageContent.scss";

interface TextPageContentProps {
  children: JSX.Element;
  title: string;
}

const TextPageContent = ({ title, children }: TextPageContentProps): JSX.Element => {
  return (
    <div className="flex-fill d-flex flex-column">
      <main className="flex-fill d-flex flex-column">
        <CContainer sm={true} className="py-5 text-page-container">
          <CCard>
            <CCardBody>
              <CCardTitle>{title}</CCardTitle>
              {children}
            </CCardBody>
          </CCard>
        </CContainer>
      </main>
      <Footer />
    </div>
  );
};

export default TextPageContent;
