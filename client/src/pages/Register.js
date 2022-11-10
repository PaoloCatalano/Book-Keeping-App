import { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();
  const [values, setValues] = useState(initialState);

  // eslint-disable-next-line
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({ currentUser, endpoint: "login" });
    } else {
      setupUser({ currentUser, endpoint: "register" });
    }
  };

  useEffect(() => {
    const { email, password } = values;
    if (user && email && password) {
      setTimeout(() => {
        navigate("/");
      }, 3001);
    }
    // eslint-disable-next-line
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3 style={{ marginBottom: 0 }}>
          {values.isMember ? "Login" : "Register"}
        </h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: "test@test.com", password: "secret" },
              endpoint: "login",
            });
            setValues({
              name: "Demo User",
              email: "test@test.com",
              password: "secret",
            });
          }}
        >
          {isLoading ? "loading..." : "Demo App"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {!values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
