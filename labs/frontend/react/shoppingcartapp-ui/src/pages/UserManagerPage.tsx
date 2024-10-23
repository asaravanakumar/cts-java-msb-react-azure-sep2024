import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IUser from "../models/IUser";

const UserManagerPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IUser[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  // Hit the REST API on load of the page
  // 1. What's the API URL? https://jsonplaceholder.typicode.com/users
  // 2. What's the Http Method? GET
  // 3. What's the REST API Client? Axios (npm i axios) or fetch

  useEffect(() => {
    // this will be called after the initial rendering
    // this is the right place for you to hit the REST API using axios or fetch
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // upon successful response this will be executed
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        // upon error this will be executed
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("It is over!");
      });
  }, []); // dependency list

  return (
    <>
      <h1>User Manager </h1>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Manage Users</h1>
        <p className="lead">You can add, view, edit and delete users</p>
        <Link className="btn btn-primary px-5 mb-5" to="/user-manager/add">
          Add User
        </Link>
      </div>

      <div className="row mt-5">
        <h2>Listing Users</h2>

        {isLoading && (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some error occurred! Try again later!
          </div>
        )}

        {users?.map((user) => {
          return (
            <div className="col-md-3 mt-3" key={user?.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user?.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    email: {user?.email}
                  </h6>

                  <Link to={`/user-manager/${user?.id}`} className="card-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserManagerPage;
