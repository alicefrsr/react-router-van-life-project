import {
  Link,
  useLocation,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';
import { fetchVans } from '../../api';

export function loader({ params }) {
  return fetchVans(params.id);
}

function VanDetails() {
  // const { id } = useParams();

  const vanDetails = useLoaderData();
  const error = useRouteError();

  const location = useLocation();
  // console.log(location.state); // {filtersUrlState: 'type=rugged', type: 'rugged'}
  // console.log(location.state.type); // 'rugged'

  const filtersInUrlState = location.state?.filtersInUrlState || ''; // ? = app doesn't break if no state is passsed through link
  // to access selected filter:
  // console.log(appliedFilters); // nothing | type=simple |  type=luxury |  type=rugged
  // const filterType = appliedFilters.slice(5); // chop off 'type=' : index 0-4

  // OR (better) pass in the type is urlState
  const filterType = location.state.type || 'all';

  if (error) {
    return <p>An unexpected error has occurred : {error.message}</p>;
  }

  return (
    <div className='van-detail-container'>
      {
        <Link
          className='back-button'
          to={`..${filtersInUrlState}`}
          relative='path'
          // to={'/vans'} // will ignore our filters
        >
          {' '}
          &larr; Back to {filterType} vans
        </Link>
      }

      <div className='van-detail'>
        <img src={vanDetails.imageUrl} />
        <i className={`van-type ${vanDetails.type} selected`}>
          {vanDetails.type}
        </i>
        <h2>{vanDetails.name}</h2>
        <p className='van-price'>
          <span>${vanDetails.price}</span>/day
        </p>
        <p>{vanDetails.description}</p>
        <button className='link-button'>Rent this van</button>
      </div>
    </div>
  );
}

export default VanDetails;
