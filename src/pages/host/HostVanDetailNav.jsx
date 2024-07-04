import { NavLink } from 'react-router-dom';

function HostVanDetailNav() {
  // const activeStyle = {
  //   fontWeight: 'bold',
  //   color: '#83471d',
  // };
  return (
    <>
      <nav className='host-van-detail-nav'>
        <NavLink
          // to={`/host/vans/${id}`}
          // we don't need the absolute path so we don't need the id
          to='.' // = where we are in route hierarchy:   path='vans/:id'
          end
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          // to={`/host/vans/${id}/pricing`}
          to='pricing'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          // to={`/host/vans/${id}/photos`}
          to='photos'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
}

export default HostVanDetailNav;
