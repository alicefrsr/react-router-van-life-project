import { Link, Outlet, useLoaderData, useRouteError } from 'react-router-dom';
import HostVanDetailNav from './HostVanDetailNav';
import { fetchHostVans } from '../../api';

export function loader({ params }) {
  // console.log('paramsId ', params);
  return fetchHostVans(params.id);
}

function HostVanDetails() {
  // const { id } = useParams();
  const currentVan = useLoaderData();
  const error = useRouteError();

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
      </div>
    </div>
  );
}

export default HostVanDetails;
