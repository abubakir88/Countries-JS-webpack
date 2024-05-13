const request = async (reource) => {
  const req = await fetch(reource);
  const data = await req.json();
  return data;
};

export default request;
