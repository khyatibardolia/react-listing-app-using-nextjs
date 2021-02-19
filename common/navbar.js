import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';

const Navbar = () => {
  return (<nav>
    <div className="logo">
      <Image src={'/logo.png'} width={100} height={77}/>
    </div>
    <Link href={'/'}><a>Home</a></Link>
    <Link href={'/about'}><a>About</a></Link>
    <Link href={'/listings'}><a>UserListing</a></Link>
  </nav>);
};
export default Navbar;
