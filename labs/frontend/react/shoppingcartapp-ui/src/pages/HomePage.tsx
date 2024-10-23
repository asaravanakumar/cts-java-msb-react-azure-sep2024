import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to Shoping Cart App
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          voluptatum deleniti dicta vero repudiandae obcaecati alias nulla
          molestiae delectus? Culpa molestiae eaque repellat fugit non quis
          ullam, quas amet nobis.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/products" className="btn btn-primary btn-lg px-4 gap-3">
            Shop Products
          </Link>
          <Link to="/user-manager" className="btn btn-secondary btn-lg px-4">
            Manage Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
