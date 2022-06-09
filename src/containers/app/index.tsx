import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../dashboard/Loadable';
import NotFound from '../notFound/Loadable';
import Images from '../images/Loadable';
import useResponsiveFontSize from '../../hooks/useResponsiveFontSize';

import routes from './routes';

const App = () => {
  useResponsiveFontSize();
  return (
    <Routes>
      <Route path={routes.dashboard} element={<Dashboard />} />
      <Route path={`${routes.images}/:breedId`} element={<Images />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
