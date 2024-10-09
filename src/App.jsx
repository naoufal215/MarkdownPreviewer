import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="h-75">
        {/* Header */}
        <Row>
          <Header />
        </Row>

        {/* Main Content - Routing */}
        <Routing />

        {/* Footer */}
        <Row>
          <Footer />
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
