import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../server';

import AppLayout from './components/AppLayout';

import Home from './pages/Home';
import About from './pages/About';

import VansList from './pages/Vans/VansList';
import VanDetails from './pages/Vans/VanDetails';

import HostLayout from './components/HostLayout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostVansList from './pages/host/HostVansList';
import HostVanDetails from './pages/host/HostVanDetails';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanInfo from './pages/host/HostVanInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<VansList />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVansList />} />

            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>

            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
