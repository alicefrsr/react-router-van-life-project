import {
  // BrowserRouter, // does not handle the loaders API
  RouterProvider, // new, instead of BrowserRouter, pass in router made with createBrowserRouter
  createBrowserRouter, // new
  // Routes, // not needed
  Route,
  createRoutesFromElements, // converts all our routes into an array of objects
} from 'react-router-dom';
import '../server';

import AppLayout from './components/AppLayout';

import Home from './pages/Home';
import About from './pages/About';

import VansList, { loader as vansLoader } from './pages/Vans/VansList';
import VanDetails, {
  loader as vanDetailsLoader,
} from './pages/Vans/VanDetails';
import Error from './pages/Vans/Error';

import HostLayout from './components/HostLayout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostVansList, {
  loader as hostVansLoader,
} from './pages/host/HostVansList';
import HostVanDetails, {
  loader as hostVanDetailsLoader,
} from './pages/host/HostVanDetails';

import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanInfo from './pages/host/HostVanInfo';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<VansList />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path='vans/:id'
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />

      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVansList />} loader={hostVansLoader} />
        <Route
          path='vans/:id'
          element={<HostVanDetails />}
          loader={hostVanDetailsLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
