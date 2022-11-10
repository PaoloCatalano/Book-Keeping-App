import { Logo } from "../components";
import main from "../assets/images/main-alt.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page" style={{ color: " var(--red-light)" }}>
        <div className="info">
          <h1>
            BOOK <span>KEEPING</span> APP
          </h1>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>{" "}
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
