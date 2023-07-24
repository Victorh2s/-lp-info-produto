import { Routes, Route } from 'react-router-dom';
import { HomeLayout } from './layout/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes>
  );
}