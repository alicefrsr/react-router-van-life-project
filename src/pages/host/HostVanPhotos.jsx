import { useOutletContext } from 'react-router-dom';

function HostPhotosPage() {
  const { currentVan } = useOutletContext();
  return <img src={currentVan.imageUrl} className='host-van-detail-image' />;
}

export default HostPhotosPage;
