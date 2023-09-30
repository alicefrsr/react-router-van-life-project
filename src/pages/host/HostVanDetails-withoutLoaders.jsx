import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import HostVanDetailNav from './HostVanDetailNav';
import { fetchHostVans } from '../../api';

function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setcurrentVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchVanDetails = async () => {
  //     const res = await fetch(`/api/host/vans/${id}`);
  //     const data = await res.json();
  //     console.log(data.vans);
  //     setcurrentVan(data.vans);
  //   };
  //   fetchVanDetails();
  // }, [id]);

  // REFACTORED - fetchVans moved to api
  useEffect(() => {
    async function getVans() {
      setLoading(true);
      try {
        const data = await fetchHostVans(id);
        // console.log(data);
        setcurrentVan(data);
      } catch (error) {
        console.log('An unexpected error has occurred (from catch block)');
        // console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>An unexpected error has occurred : {error.message}</p>;
  }

  return (
    <div>
      {/* <Link to='/host/vans' className='back-button'>
        &larr; Back to all vans
      </Link> */}
      <Link
        to='..'
        className='back-button'
        relative='path'
        // up a level in our path structure, not in our routes hierarchy
      >
        {' '}
        &larr; Back to all vans
      </Link>
      <div className='host-van-detail-layout-container'>
        {currentVan ? (
          <>
            <div className='host-van-detail'>
              <img src={currentVan.imageUrl} />
              <div className='host-van-detail-info-text'>
                <i className={`van-type ${currentVan.type} selected`}>
                  {currentVan.type}
                </i>
                <h2>{currentVan.name}</h2>
                <p className='van-price'>
                  <span>${currentVan.price}</span>/day
                </p>
              </div>
            </div>

            <HostVanDetailNav />

            <Outlet context={{ currentVan }} />
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default HostVanDetails;
