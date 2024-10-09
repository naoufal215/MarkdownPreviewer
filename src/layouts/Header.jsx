import React from "react";
import SettingsButton from "./settingsEditing/SettingsButton";
import { Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Row  className="bg-primary text-white py-1 text-center border-bottom border-light">
      <Col className="offset-md-5" xs={3}>
        <h1 className="fs-3">Markdown Previewer</h1>
      </Col>
      <Col className="offset-md-2" xs={2}>
        <SettingsButton />
      </Col>
    </Row>
  );
}
