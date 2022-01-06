import React from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Dashboard.css";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user, handleLogOut, admin } = useAuth();
  return (
    <div className="">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row g-0 w-100">
            <div className="col-md-3 col-sm-12">
              <div className="bashboard-manu p-1">
                <div className="all-menu mt-5">
                  {/* user profile start here */}
                  <div className="user text-center d-flex flex-column justify-content-center align-content-center">
                    <img className="mx-auto pb-1" src={user.photoURL} alt="" />
                    <small>{user.email}</small>
                    <small>{user.displayName}</small>
                    <small>
                      <button className="logOut_btn" onClick={handleLogOut}>
                        Log Out
                      </button>
                    </small>
                  </div>
                  {/* user profile end here */}
                  <div className="all-order active">
                    <div className="icon pe-3">
                      <i className="fas fa-gift"></i>
                    </div>
                    <li className="admin-menu p-2">
                      {" "}
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-home"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/"
                      >
                        Home Page
                      </NavLink>
                    </li>
                  </div>
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i className="fas fa-baby-carriage"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            background: "none",
                          }}
                          to={`/dashboard/addProduct`}
                        >
                          Add Product
                        </NavLink>
                      </li>
                    </div>
                  )}
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-baby-carriage"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to={`/dashboard/myOrder`}
                      >
                        My Order
                      </NavLink>
                    </li>
                  </div>
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i className="far fa-user"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            background: "none",
                          }}
                          to={`/dashboard/makeAdmin`}
                        >
                          Make Admin
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-truck"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            background: "none",
                          }}
                          to={`/dashboard/mangeOrder`}
                        >
                          Mange Order
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-user-cog"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            background: "none",
                          }}
                          to={`/dashboard/mangeProduct`}
                        >
                          Mange Product
                        </NavLink>
                      </li>
                    </div>
                  )}
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-ice-cream"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to={`/dashboard/review`}
                      >
                        Review
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fab fa-cc-paypal"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to={`/dashboard/payment`}
                      >
                        Payment
                      </NavLink>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
