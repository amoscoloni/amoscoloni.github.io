import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATH } from './routes';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App(): JSX.Element {
  React.useEffect(() => {
    document.title = 'Anna Moscoloni';
    document.body.style.backgroundColor = '#f5f5f5';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Router>
      <Layout />
      <Routes>
        <Route path={PATH.prefix} element={<Home />} />
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.projects} element={<Projects />} />
      </Routes>
    </Router>
  );
}
