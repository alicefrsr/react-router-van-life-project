import { useEffect, useState } from 'react';
import VanItem from './VanItem';

function VansList() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      const res = await fetch('api/vans');
      const data = await res.json();
      // console.log(data);
      setVans(data.vans);
    };
    fetchVans();
  }, []);

  return (
    <div className='van-list-container'>
      <h1 className='vans-list-title'>Explore our van options</h1>
      <ul className='van-list'>
        {vans.map((van) => (
          <VanItem van={van} key={van.id} />
        ))}
      </ul>
    </div>
  );
}

export default VansList;
