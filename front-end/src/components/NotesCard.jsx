import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';
import Link from 'next/link';

const NotesCard = props => {
  const router = useRouter();

  return (
    <div className={` px-10 py-5 rounded-3xl bg-slate-100 mb-10`}>
        <div className='flex justify-between text-purple-600 align-top'>
            <Link href='note'>
              <h1 className="text-xl font-bold my-3 cursor-pointer hover:text-purple-700">{props.title}</h1>
            </Link>
            <HeartButton/>
        </div>
        <p className="text-slate-800">{props.description}</p>
    </div>
  )
}

NotesCard.propTypes = {};
export default NotesCard;
