import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutUser from "./layouts/LayoutUser";
import LayoutAdmin from "./layouts/LayoutAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LayoutUser />} />
        <Route path="/admin/*" element={<LayoutAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
