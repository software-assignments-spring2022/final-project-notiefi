import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axios from 'axios';

const HeartButton = (props) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const handleClick = async (e) => {
    e.preventDefault();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    await axios.put(`http://localhost:3001/api/notes/${props.id}/like`, {
      liked: !liked,
    });

    if (liked) {
      await axios.post('http://localhost:3001/api/notes/saved', props)
    }
  };

  return (
    <button>
      <p>{likes}</p>
      {liked ? (
        <AiFillHeart onClick={handleClick} className="fill-purple-600" />
      ) : (
        <AiOutlineHeart onClick={handleClick} />
      )}
    </button>
  );
};

HeartButton.propTypes = {};
export default HeartButton;
