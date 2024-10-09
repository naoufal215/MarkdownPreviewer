import { useLocation, useNavigate } from "react-router-dom";

export default function SettingsButton() {
  const navigation = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === "/settings";

  const goToSettings = () => {
    navigation("/settings");
  };

  return (
    <>
      {!isActive && (
        <button
          disabled={isActive}
          className="btn btn-outline-light d-flex align-items-right"
          onClick={goToSettings}
        >
          <i
            className="bi bi-gear-fill"
            style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
          ></i>
          Settings
        </button>
      )}
    </>
  );
}
