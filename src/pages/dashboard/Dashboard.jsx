import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">
        <div className="banner">
          <h2>Earls Store</h2>
          <h4>Dashboard</h4>
        </div>
        <nav className="sidenav">
          <NavLink to="/admin" className="side-nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/admin/product" className="side-nav-link">
            Product
          </NavLink>
          <NavLink to="/admin/settings" className="side-nav-link">
            Settings
          </NavLink>
          <NavLink to="/admin/logout" className="side-nav-link">
            Logout
          </NavLink>
        </nav>
      </aside>
      <section className="dashboard-main-container">
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
