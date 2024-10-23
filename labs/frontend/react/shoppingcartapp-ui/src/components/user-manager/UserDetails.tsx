import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IUser from "../../models/IUser";

const UserDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser>();
  const [isError, setIsError] = useState(false);

  // Reading URL Param -- check for url param in Routing
  const { id } = useParams();

  useEffect(() => {
    // connect to rest api
    // what's the REST API URL? https://jsonplaceholder.typicode.com/users/1
    // what's the Http Method? GET
    // what's the REST API Client? Axios
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>User Details</h1>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {isError && (
        <div className="alert alert-danger" role="alert">
          Something went wrong! Unable to load user details for User Id: 1
        </div>
      )}

      {user && (
        <>
          <Link to="/user-manager" className="btn btn-link">
            Go Back
          </Link>
          <div className="card">
            <div className="card-header">
              You are seeing details of User ID: {user.id}
            </div>
            <div className="card-body">
              <h5 className="card-title">Name: {user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <Link to="edit" className="btn btn-primary">
                Edit
              </Link>

              <button className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;
