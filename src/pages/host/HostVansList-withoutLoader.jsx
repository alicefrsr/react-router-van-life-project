import { useEffect, useState } from 'react';
import HostVanItem from './HostVanItem';
import { fetchHostVans } from '../../api';

function HostVans() {
  const [hostVans, setHostVans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchHostVans = async () => {
  //     const res = await fetch(`/api/host/vans`);
  //     const data = await res.json();
  //     console.log(data.vans);
  //     setHostVans(data.vans);
  //   };
  //   fetchHostVans();
  // }, []);

  // REFACTORED - fetchVans moved to api
  useEffect(() => {
    async function getHostVans() {
      setLoading(true);
      try {
        const data = await fetchHostVans();
        // console.log(data);
        setHostVans(data);
      } catch (error) {
        console.log('An unexpected error has occurred (from catch block)');
        // console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getHostVans();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>An unexpected error has occurred : {error.message}</p>;
  }

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
