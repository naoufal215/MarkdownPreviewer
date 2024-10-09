import { useLocation, useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigation = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === "/";

  const goToHome = () => {
    navigation("/");
  };

  return (
    <>
      {!isActive && (
        <button
          
          disabled={isActive}
          className="btn btn-outline-primary d-flex align-items-right mt-3 ms-2"
          onClick={goToHome}
        >
          <i
            className="bi bi-gear-fill"
            style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
          ></i>
          Home
        </button>
      )}
    </>
  );
}
