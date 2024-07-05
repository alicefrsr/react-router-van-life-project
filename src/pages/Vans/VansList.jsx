import VanItem from './VanItem';
import {
  useSearchParams,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';
import { fetchVans } from '../../api';

export function loader() {
  return fetchVans();
}

function VansList() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString()); // type=simple |  type=luxury |  type=rugged
  const typeFilter = searchParams.get('type');
  // console.log(typeFilter); //  simple | luxury | rugged

  const vans = useLoaderData();
  console.log('from loader ', vans);

  const error = useRouteError();

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  if (error) {
    return <p>An unexpected error has occurred : {error.message}</p>;
  }

  return (
    <div className='van-list-container'>
      <h1 className='vans-list-title'>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        <span>Filters:</span>

        <button
          className={`van-type simple ${
            typeFilter === 'simple' ? 'selected' : ''
          }`}
          // onClick={() => setSearchParams('type=simple')}  // works
          onClick={() => setSearchParams({ type: 'simple' })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === 'luxury' ? 'selected' : ''
          }`}
          // onClick={() => setSearchParams('type=luxury')}  // works
          onClick={() => setSearchParams({ type: 'luxury' })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === 'rugged' ? 'selected' : ''
          } `}
          // onClick={() => setSearchParams('type=rugged')} // works
          onClick={() => setSearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>
        {typeFilter !== null && (
          <button
            className='van-type clear-filters'
            // onClick={() => setSearchParams('')} // works
            // onClick={() => setSearchParams('.')} // works // will go to current path
            onClick={() => setSearchParams({})} // more commonly we'll pass in an object
          >
            Show all
          </button>
        )}
      </div>
      <ul className='van-list'>
        {filteredVans.map((van) => (
          <VanItem
            van={van}
            key={van.id}
            typeFilter={typeFilter}
            searchParams={searchParams}
          />
        ))}
      </ul>
    </div>
  );
}

//       <button
//         className='van-type clear-filters'
//         onClick={() => setSearchParams('')}
//       >
//         Show all
//       </button>
//       <button
//         className='van-type simple'
//         onClick={() => setSearchParams('type=simple')}
//       >
//         Simple
//       </button>
//       <button
//         className='van-type luxury'
//         onClick={() => setSearchParams('type=luxury')}
//       >
//         Luxury
//       </button>
//       <button
//         className='van-type rugged'
//         onClick={() => setSearchParams('type=rugged')}
//       >
//         Rugged
//       </button>

// <Link to='.' className='van-type clear-filters'>
//   Show all
// </Link>
// <Link to='?type=simple' className='van-type simple'>
//   Simple
// </Link>
// <Link to='?type=luxury' className='van-type luxury'>
//   Luxury
// </Link>
// <Link to='?type=rugged' className='van-type rugged'>
//   Rugged
// </Link>

export default VansList;
