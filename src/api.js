export async function fetchVans(id) {
  const url = id ? `/api/vans/${id}` : '/api/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function fetchHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch host vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
