import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  return <div>Error! {error.message}</div>;
}

export default Error;
