import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function VanDetails() {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    const fetchVanDetails = async () => {
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      //   console.log(data.vans);
      setVanDetails(data.vans);
    };
    fetchVanDetails();
  }, [id]);

  return (
    <div className='van-detail-container'>
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
