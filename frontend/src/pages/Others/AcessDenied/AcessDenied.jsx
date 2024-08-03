// Importações
import "./AcessDenied.css";
import { Link } from "react-router-dom";

const AcessDenied = () => {
  return (
    <div className="container-denied">
      <div className="main-denied">
        <img
          src="https://res.cloudinary.com/razeshzone/image/upload/v1588316204/house-key_yrqvxv.svg"
          className="img-key"
        />

        <h1 className="title-denied">
          <span>4</span>
          <span>0</span>
          <span className="broken">3</span>
        </h1>

        <h4 className="text-denied">Access Denied !</h4>
        <h4 className="text-denied-small">
          You do not have access to this area of application. You can go back to <Link to="/">Home Page</Link>
        </h4>
      </div>
    </div>
  );
};

export default AcessDenied;
