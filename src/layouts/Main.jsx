import { Container, Row, Col } from 'react-bootstrap';
import Editing from './editContainer/Editing';
import Visualization from './visualizationContainer/Visualization';

export default function Main() {
  return (
    
    <>
      <Row className="d-flex justify-content-center h-100">
        <Container fluid className="d-flex flex-column h-100">
          <Row className="flex-grow-1 ">
            <Col md={6} className="bg-light">
              <Editing />
            </Col>
            <Col
              md={6}
              className="bg-secondary text-white border-start border-light"
            >
              <Visualization />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
