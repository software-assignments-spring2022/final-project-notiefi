import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from './AddClassButton';
import Link from 'next/link';

function BrowseClassCard(props) {
  const router = useRouter();

  return (
    <div
      className={`min-w-150 h-64 min-h-fit w-full rounded-xl shadow-lg ${props.color} ${props.hover} relative cursor-pointer`}>  
      <div className="min-h-fit min-w-full">
        <Link href="class">
          <h2 className="mt-5 ml-5 text-xl hover:text-gray-600">{props.name}</h2>
        </Link>
        
        <p className="ml-5">{props.classCode}</p>
      </div>
      <div className="absolute bottom-0 right-0">
        <AddClassButton className="mt-50" />
      </div>
    </div>
  );
}

BrowseClassCard.propTypes = {};

export default BrowseClassCard;
