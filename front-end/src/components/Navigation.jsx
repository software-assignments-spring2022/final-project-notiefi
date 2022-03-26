import { React, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { VscAccount } from 'react-icons/vsc';

import Link from 'next/link';
import NavigationBell from './NotificationsBell';
import Search from './SearchBar';

function Navigation(props) {
  const router = useRouter();

  

  return (
    <nav className="relative top-0 z-10 mt-0 mb-8 w-full bg-indigo-800 p-2">
    <div className="w-full grid grid-cols-12 items-center">
      <div className="col-span-4 flex justify-start lg:justify-center font-extrabold text-white lg:col-span-2">
      <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span className="pl-4 lg:pl-2 text-2xl">
                <i className="em em-grinning"></i> Notiefi
              </span>
            </a>
          </Link>
      </div>
      <div className="col-span-8 lg:col-span-5 mr-3 lg:mr-0">
        <Search />
      </div>
      <div className="col-span-full flex content-center justify-between pt-2 lg:col-span-5 lg:justify-end">
        <ul className="list-reset flex flex-1 items-center justify-between lg:flex-none">
          <li className="mr-3">
          <Link href="/notes/upload">
            <a className="link">Upload Notes</a>
          </Link>
          </li>
          <li className="mr-3">
          <Link href="/browse">
                <a className={`link ${props.bold}`}>Browse Classes</a>
              </Link>
          </li>
          <li className="mr-3">
          <NavigationBell/>
          </li>
          <li className="mr-3 last:mr-0">
          <Link href="/profile">
                <a className="link">
                  <VscAccount size={28} />
                </a>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
