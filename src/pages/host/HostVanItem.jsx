import { Link } from 'react-router-dom';

function HostVanItem({ van }) {
  return (
    <li className=''>
      <Link
        // to={`/host/vans/${van.id}`} // absolute path --no need
        // to={`${van.id}`} // relative path --better
        to={van.id} // relative path --better
        key={van.id}
        aria-label={`View details for ${van.name} priced at ${van.price} euros per day`}
        className='host-van-link-wrapper '
      >
        <div className='host-van-single'>
          <img src={van.imageUrl} alt={van.name} />
          <div className='host-van-info'>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </div>

        {/* <i className={`van-type ${van.type} selected`}>{van.type}</i> */}
      </Link>
    </li>
  );
}

export default HostVanItem;
