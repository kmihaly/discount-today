import CIcon from "@coreui/icons-react";
import { CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react";
import { cilLocationPin, cilPhone, cilEnvelopeClosed } from "@coreui/icons";

import { TextPageContent } from "../../components";

const ContactPage = () => {
  return (
    <TextPageContent title="Kapcsolat">
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Et ligula
          ullamcorper malesuada proin libero nunc.
        </p>
        <CTable>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>
                <CIcon icon={cilLocationPin} className="me-2" />
                Székhely:
              </CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>
                <CIcon icon={cilPhone} className="me-2" />
                Telefon:
              </CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>
                <CIcon icon={cilEnvelopeClosed} className="me-2" />
                Email:
              </CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </>
    </TextPageContent>
  );
};

export default ContactPage;
