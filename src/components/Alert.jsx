import alertIcon from "../assets/AlertIcon.svg";
import reactIcom from "../assets/React.svg";
function Alert({ errorMessage }) {
  return (
    <p className="alert">
      <img src={alertIcon} alt="" className="alert-icon" /> {errorMessage}
    </p>
  );
}

export default Alert;
