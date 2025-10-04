import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://inventroy-management-backend.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    localStorage.setItem("token", data.token);
    navigate("/dashboard");
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div>
        <h1 className="text-center text-success">Inventory</h1>
        <h6 className="text-center">Login into your account</h6>
        <p className="text-center text-secondary">Enter your Details</p>
        <form onSubmit={formSubmit}>
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            required
            className="form-control"
            placeholder="Email"
          />
          <br />
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="Password"
            required
            className="form-control"
            placeholder="Password"
          />
          <br />
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link to="/signup">create account?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
