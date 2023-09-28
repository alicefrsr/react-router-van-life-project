import { Link, NavLink } from 'react-router-dom';

function Header() {
  // const activeStyle = {
  //   fontWeight: 'bold',
  //   color: '#ff8c38',
  // };
  return (
    <header>
      <Link to='/' className='site-logo'>
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to='/host'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Hosts
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
