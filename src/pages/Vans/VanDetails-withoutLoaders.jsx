import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fetchVans } from '../../api';

function VanDetails() {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  console.log(location.state); // {filtersUrlState: 'type=rugged', type: 'rugged'}
  console.log(location.state.type); // 'rugged'

  const filtersInUrlState = location.state?.filtersInUrlState || ''; // ? = app doesn't break if no state is passsed through link
  // to access selected filter:
  // console.log(appliedFilters); // nothing | type=simple |  type=luxury |  type=rugged
  // const type = appliedFilters.slice(5); // chop off 'type=' : index 0-4

  // OR (better) pass in the type is urlState
  const type = location.state.type || 'all';

  // useEffect(() => {
  //   const fetchVanDetails = async () => {
  //     const res = await fetch(`/api/vans/${id}`);
  //     const data = await res.json();
  //     //   console.log(data.vans);
  //     setVanDetails(data.vans);
  //   };
  //   fetchVanDetails();
  // }, [id]);

  // REFACTORED - fetchVans moved to api
  useEffect(() => {
    async function getVans() {
      setLoading(true);
      try {
        const data = await fetchVans(id);
        // console.log(data);
        setVanDetails(data);
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
    <div className='van-detail-container'>
      {
        <Link
          className='back-button'
          to={`..${filtersInUrlState}`}
          relative='path'
          // to={'/vans'} // will ignore our filters
        >
          {' '}
          &larr; Back to {type} vans
        </Link>
      }
      {vanDetails ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetails;
