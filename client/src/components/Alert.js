import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className="alert-container">
      <div className={`alert alert-${alertType}`}>{alertText}</div>
    </div>
  );
};

export default Alert;
