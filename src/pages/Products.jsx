import Navbar from "../components/Navbar";
import { useProductContext } from "../context/ProductContext";
const Projects = () => {
  const {
    productData,

    formData,
    handleDelete,
    handleChange,
    handleSubmit,
    handleUpdateClick,
    handleUpdateSubmit,
    isEditing,
    showModal,
    setShowModal,
    searchTerm,
    setSearchTerm,
    handleSearch,
  } = useProductContext();

  return (
    <>
      <section className="container-fluid p-0">
        <div className="row min-vh-100">
          {/* Sidebar */}
          <aside className="col-12 col-md-2 p-0">
            <Navbar />
          </aside>

          {/* Main Content */}
          <section className="col-12 col-md-10 p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Products</h3>

              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#createProduct"
              >
                + Add Product
              </button>

              <div
                className={`modal fade ${showModal ? "show d-block" : ""}`}
                id="createProduct"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        create new Product
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form
                        onSubmit={isEditing ? handleUpdateSubmit : handleSubmit}
                      >
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          name="name"
                          onChange={handleChange}
                          value={formData.name}
                          type="text"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Category
                        </label>
                        <input
                          name="category"
                          onChange={handleChange}
                          value={formData.category}
                          type="text"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Price
                        </label>
                        <input
                          name="price"
                          onChange={handleChange}
                          value={formData.price}
                          type="number"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="" className="form-label">
                          Stock
                        </label>
                        <input
                          name="stock"
                          onChange={handleChange}
                          value={FormData.stock}
                          type="Number"
                          className="form-control"
                        />
                        <br />
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={(e) => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-success">
                            {isEditing ? "Update" : "Create"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="d-flex mb-4"
            >
              <input
                className="form-control "
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Products"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>

            {/* Products Table */}
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productData?.map((product) => (
                    <tr key={product._id}>
                      <td scope="row">{product?.name}</td>
                      <td>{product?.category}</td>
                      <td>₹{product?.price}</td>
                      <td>{product?.stock}</td>
                      <td>
                        <button
                          onClick={(e) => handleUpdateClick(product)}
                          className="btn btn-primary btn-sm me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(product._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
