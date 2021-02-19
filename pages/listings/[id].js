import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {id: user.id.toString()}
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {user: data}
  };
};

const UserDetails = ({user}) => {
  console.log('singleuser', user);
  return (<div>
    <h1>{user.name}</h1>
    <p><b>Email : </b> {user.email}</p>
    <p><b>Website : </b> {user.website}</p>
    <p><b>Phone : </b> {user.phone}</p>
    <p><b>City : </b> {user.address.city}</p>
  </div>);
};
export default UserDetails;
