import { useEffect, useState } from 'react';
import HostVanItem from './HostVanItem';

function HostVans() {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    const fetchHostVans = async () => {
      const res = await fetch(`/api/host/vans`);
      const data = await res.json();
      console.log(data.vans);
      setHostVans(data.vans);
    };
    fetchHostVans();
  }, []);

  return (
    <div className='host-van-info'>
      <h2 className='host-vans-title'>Your listed vans</h2>
      {hostVans ? (
        <ul className='host-vans-list'>
          {hostVans.map((van) => (
            <HostVanItem van={van} key={van.id} />
          ))}
        </ul>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

export default HostVans;
