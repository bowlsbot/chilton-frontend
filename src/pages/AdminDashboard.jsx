import { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("fixtures");

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin</h2>

        <nav>
          <button
            className={activeTab === "fixtures" ? "active" : ""}
            onClick={() => setActiveTab("fixtures")}
          >
            Fixtures
          </button>

          <button
            className={activeTab === "teams" ? "active" : ""}
            onClick={() => setActiveTab("teams")}
          >
            Team Sheets
          </button>

          <button
            className={activeTab === "players" ? "active" : ""}
            onClick={() => setActiveTab("players")}
          >
            Players
          </button>

          <button
            className={activeTab === "availability" ? "active" : ""}
            onClick={() => setActiveTab("availability")}
          >
            Availability
          </button>

          <button
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        {activeTab === "fixtures" && <FixturesPanel />}
        {activeTab === "teams" && <TeamsPanel />}
        {activeTab === "players" && <PlayersPanel />}
        {activeTab === "availability" && <AvailabilityPanel />}
        {activeTab === "settings" && <SettingsPanel />}
      </main>
    </div>
  );
}

/* -------------------------
   Fixtures Panel
-------------------------- */
function FixturesPanel() {
  return (
    <section>
      <h1>Fixtures</h1>
      <p>Manage upcoming fixtures, edit details, and create new matches
