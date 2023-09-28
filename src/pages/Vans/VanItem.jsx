import { Link } from 'react-router-dom';

function VanItem({ van }) {
  return (
    <li>
      <Link to={`/vans/${van.id}`} key={van.id} className='van-tile'>
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
