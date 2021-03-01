import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageNotFound = () => {

  const router = useRouter();

  useEffect(() => {
    //redirect user to home page after 3 sec
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (<div className="not-found">
    <h1>Ooops...</h1>
    <h2>That page cannot be found :(</h2>
    <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
  </div>);
};
export default PageNotFound;
