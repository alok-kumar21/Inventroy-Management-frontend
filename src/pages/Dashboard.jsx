import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const Dashboard = () => {
  const navigate = useNavigate();

  const { data } = useFetch("http://localhost:5001/api/inventory/stats");
  console.log(data);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <section className="container-fluid p-0">
        <div className="row min-vh-100">
          {/* Sidebar Navbar */}
          <aside className="col-12 col-md-2 bg-light ">
            <Navbar />
          </aside>

          {/* Main Dashboard */}
          <main className="col-12 col-md-10 p-4">
            <div className="container d-flex justify-content-between">
              <h3>Dashboard</h3>
              <button onClick={logout} type="button" class="btn btn-danger">
                Logout
                <i class="ms-2 bi bi-box-arrow-right"></i>
              </button>
            </div>
            <div className="row g-3 mt-5">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card bg-primary text-white text-center">
                  <div className="card-body">
                    <h6>Total Products</h6>
                    <h5>{data?.totalProducts}</h5>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card bg-warning text-white text-center">
                  <div className="card-body">
                    <h6>Low Stocks</h6>
                    <h5>{data?.lowStock}</h5>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3>Recent Product</h3>
                <div className="row gap-0 p-4">
                  {data?.recentProducts?.map((product) => (
                    <div className="col-12 col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <h5>{product.name}</h5>
                          <p>Category: {product.category}</p>
                          <p>Price: {product.price}</p>
                          <p>Stocks: {product.stock}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
