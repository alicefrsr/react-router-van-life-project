import { Link } from 'react-router-dom';

function VanItem({ van, typeFilter, searchParams }) {
  // const typeFilter = searchParams.get('type'); // or pass it in as prop
  return (
    <li className='van-tile'>
      <Link
        key={van.id}
        // to={`/vans/${van.id}`} // absolute path -- works but no need
        // to={`${van.id}`} // relative path. AND in our case 'id' is already a string so...
        to={van.id} // <-- ...happens to work here.
        // state={{ type: typeFilter }} // to pass in the 'filter' state with the link
        state={{
          filtersInUrlState: `?${searchParams.toString()}`,
          type: typeFilter, // to have access to 'simple' or 'rugged' etc without any string manip in Details
        }}
      >
        <img src={van.imageUrl} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </li>
  );
}

export default VanItem;
