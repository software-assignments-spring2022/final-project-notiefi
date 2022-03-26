import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';
import Link from 'next/link';

const NotesCard = props => {
  const router = useRouter();

  return (
    <div className={`group px-10 py-5 rounded-3xl bg-slate-100 last:mb-10 ${props.className} hover:bg-neutral-300`}>
        <div className='flex justify-between text-blue-600 align-top group-hover:text-black'>
            <Link href={`/notes/${props.title}`}>
              <h1 className="text-xl font-bold my-3 cursor-pointer hover:text-neutral-600">{props.title}</h1>
            </Link>
            <HeartButton className="" />
        </div>
        <p className="text-slate-800">{props.description}</p>
    </div>
  )
}

NotesCard.propTypes = {};
export default NotesCard;
