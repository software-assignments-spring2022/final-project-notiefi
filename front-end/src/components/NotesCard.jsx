import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';
import { FaRegHeart } from 'react-icons/fa'

const NotesCard = props => {
  const router = useRouter();

  const [liked, setLiked] = useState(false)
  const [fill, setFill] = useState("none")

  const handleClick = ev => {
    ev.preventDefault();
    const nextLiked = liked ? false : true;
    const nextFill = fill === "none" ? "currentColor" : "none"
    setLiked(nextLiked)
    setFill(nextFill)
  }

  return (
    <div className={` px-10 py-5 rounded-3xl bg-slate-100 mb-10`}>
        <div className='flex justify-between text-purple-600 align-top'>
            <h1 className="text-xl font-bold my-3">{props.title}</h1>
            <FaRegHeart onClick={handleClick} value={{color: `${fill}`}}/>
        </div>
        <p className="text-slate-800">{props.description}</p>
    </div>
  )
}

NotesCard.propTypes = {};
export default NotesCard;
