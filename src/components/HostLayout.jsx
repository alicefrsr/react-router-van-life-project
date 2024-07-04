import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
  // const activeStyle = {
  //   fontWeight: 'bold',
  //   color: '#ff8c38',
  // };
  return (
    <>
      <nav className='host-nav'>
        <NavLink
          // to='/host' = current route (where we are already, where this comp is being rendered)
          to='.'
          end
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? active-link : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income' // '/host/income' is implied bc this comp on the /host route
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
