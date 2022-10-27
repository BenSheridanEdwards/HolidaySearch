import Layout from './components/Layout/Layout';
import { DestinationDetailPage } from './pages/DestinationDetailPage/DestinationDetailPage';
import { DestinationListPage } from './pages/DestinationListPage/DestinationListPage';
import { Home } from './pages/HomePage/HomePage';
import './sass/master.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<DestinationListPage />} />
        <Route path='/sale/:id' element={<DestinationDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
