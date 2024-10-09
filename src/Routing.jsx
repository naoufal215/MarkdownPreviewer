import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./layouts/Main";
import Settings from "./layouts/Settings";

export default function Routing() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </>
  );
}
