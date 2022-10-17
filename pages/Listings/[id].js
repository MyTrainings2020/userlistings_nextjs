export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { usr: data },
  };
};

const Details = ({ usr }) => {
  return (
    <div>
      <h1>Details Page for the user: {usr.name} </h1>
      <p>User Name: {usr.username}</p>
      <p>Email: {usr.email}</p>
      <p>Website: {usr.website}</p>
      <p>City: {usr.address.city}</p>
      <p>ZipCode: {usr.address.zipcode}</p>
    </div>
  );
};

export default Details;
