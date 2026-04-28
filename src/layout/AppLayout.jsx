import { Outlet, NavLink } from "react-router-dom";
import "../styles/main.css";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <header className="header">Chilton Bowls Club</header>

      <main className="main">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/fixtures">Fixtures</NavLink>
        <NavLink to="/availability">Availability</NavLink>
        <NavLink to="/teams">Teams</NavLink>
      </nav>
    </div>
  );
}

