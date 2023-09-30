import { useLoaderData, useRouteError } from 'react-router-dom';
import HostVanItem from './HostVanItem';

import { fetchHostVans } from '../../api';

export function loader() {
  return fetchHostVans();
}

function HostVans() {
  const hostVans = useLoaderData();
  const error = useRouteError();

  if (error) {
    return <p>An unexpected error has occurred : {error.message}</p>;
  }

  return (
    <div className='host-van-info'>
      <h2 className='host-vans-title'>Your listed vans</h2>
      <ul className='host-vans-list'>
        {hostVans.map((van) => (
          <HostVanItem van={van} key={van.id} />
        ))}
      </ul>
    </div>
  );
}

export default HostVans;
