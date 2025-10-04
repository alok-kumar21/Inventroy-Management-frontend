import { useState } from "react";

const Signup = () => {
  const [formData, setformData] = useState({
    name: "",
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
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response) {
        throw new Error("Failed to add Data");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setformData({
      name: "",
      email: "",
      password: "",
    });
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
        <h6 className="text-center">Create new account</h6>
        <p className="text-center text-secondary">Enter your Details</p>
        <form onSubmit={formSubmit}>
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
          />
          <br />
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="Password"
            required
            className="form-control"
            placeholder="Name"
          />
          <br />
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Signup;
