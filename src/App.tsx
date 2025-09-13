import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATH } from "./routes";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

export default function App() : JSX.Element {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path={PATH.prefix} element={<Home />} />
          <Route path={PATH.home} element={<Home />} />
        </Routes>
    </Router>
  )
}