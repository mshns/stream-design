import { Routes, Route } from 'react-router-dom';

import { FourTables } from 'scenes';

import './App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path='/4tables' element={<FourTables />}></Route>
    </Routes>
  );
};
