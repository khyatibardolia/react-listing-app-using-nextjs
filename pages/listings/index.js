import React from 'react';
import styles from '../../styles/listings.module.css';
import Link from 'next/link';

//This method runs before the component loads and pre-fetchs the data
//and then pumps that data into the compoenent so that it can be rendered with that data inside it.
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {list: data}
  };
};
const Listings = ({list}) => {
  return (<div>
    <h1>All Listings</h1>
    <div className={styles.listHeight}>
      {list.map((user) => <Link href={`/listings/${user.id}`} key={user.id}>
        <a className={styles.single}>
          <h3>{user.name}</h3>
        </a>
      </Link>)}
    </div>
  </div>);
};
export default Listings;
