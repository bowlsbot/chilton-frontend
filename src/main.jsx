import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Fixtures from "./pages/Fixtures";
import Availability from "./pages/Availability";
import Teams from "./pages/Teams";
import SelectTeam from "./pages/SelectTeam";
import AdminDashboard from "./pages/AdminDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/select/:fixtureId" element={<SelectTeam />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

