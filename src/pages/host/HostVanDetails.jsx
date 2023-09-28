import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, NavLink } from 'react-router-dom';
import HostVanDetailNav from './HostVanDetailNav';

function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setcurrentVan] = useState(null);

  useEffect(() => {
    const fetchVanDetails = async () => {
      const res = await fetch(`/api/host/vans/${id}`);
      const data = await res.json();
      console.log(data.vans);
      setcurrentVan(data.vans);
    };
    fetchVanDetails();
  }, [id]);

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
