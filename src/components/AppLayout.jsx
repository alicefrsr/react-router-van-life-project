import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className='site-wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
