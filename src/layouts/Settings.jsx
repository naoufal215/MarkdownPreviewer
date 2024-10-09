import { Col, Container, Row } from "react-bootstrap";
import Editing from "./editContainer/Editing";
import Visualization from "./visualizationContainer/Visualization";
import SettingsPanel from "./settingsEditing/settingsPanel/SettingsPanel";
import HomeButton from "./HomeButton";
import VisuSettingsPanel from "./settingsEditing/visuSettingsPanel/VisuSettingsPanel";

export default function Settings() {
  return (
    <Row className="h-100">
      <Container fluid className="d-flex h-100">
        <Row className="justify-content-center">
          <Col md={6} className="bg-light pt-1">
            <SettingsPanel />
            <HomeButton />
          </Col>
          <Col
            md={6}
            className="bg-secondary text-white border-start border-light p-0 
          d-flex justify-content-center align-items-center"
          >
            <VisuSettingsPanel />
          </Col>
        </Row>
      </Container>
    </Row>
  );
}
