import { CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react";
import { TextPageContent } from "../../components";

const ImpressumPage = () => {
  return (
    <TextPageContent title="Impresszum">
      <>
        <h2>Vállalkozás adatai</h2>
        <CTable>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Cégnév:</CTableDataCell>
              <CTableDataCell>Profilm Junior Bt.</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Székhely:</CTableDataCell>
              <CTableDataCell>1185 Budapest, Jeges utca 55.</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Levelezési cím:</CTableDataCell>
              <CTableDataCell>1185 Budapest, Jeges utca 55.</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Adószám:</CTableDataCell>
              <CTableDataCell>20153832-2-43</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>A céget bejegyző hatóság:</CTableDataCell>
              <CTableDataCell>Fővárosi Törvényszék Cégbírósága</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Email:</CTableDataCell>
              <CTableDataCell>
                <a className="nav-link" href="mailto:info@sporoljma.hu">
                  info@sporoljma.hu
                </a>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <h2>Tárhelyszolgáltató adatai</h2>
        <CTable>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Cégnév:</CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Cím:</CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Telefonszám:</CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Email:</CTableDataCell>
              <CTableDataCell>
                <a className="nav-link" href="mailto:"></a>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </>
    </TextPageContent>
  );
};

export default ImpressumPage;
