import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <h1>You&#39;ve got the plans, we&#39;ve got the vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van for your perfect road trip.
      </p>
      <Link to='vans'>Find your van</Link>
    </div>
  );
}
