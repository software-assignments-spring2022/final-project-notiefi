import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectClass from '../../components/ClassSelector';

const classes = [
    {
      classCode: 'CSCI-UA.0101',
      name: 'Introduction to Computer Science',
      color: 'bg-teal-400',
      hover: 'hover:bg-teal-300',
    },
    {
      classCode: 'CSCI-UA.0201',
      name: 'Computer Systems Organization',
      color: 'bg-cyan-400',
      hover: 'hover:bg-cyan-300',
    },
    {
      classCode: 'CSCI-UA.0465',
      name: 'Introduction to Robotics',
      color: 'bg-indigo-400',
      hover: 'hover:bg-indigo-300',
    },
    {
      classCode: 'CSCI-UA.0478',
      name: 'Introduction to Cryptography',
      color: 'bg-pink-400',
      hover: 'hover:bg-pink-300',
    },
    {
      classCode: 'CSCI-UA.0102',
      name: 'Data Structures',
      color: 'bg-cyan-400',
      hover: 'hover:bg-cyan-300',
    },
    {
      classCode: 'CSCI-UA.0421',
      name: 'Numerical Computing',
      color: 'bg-pink-400',
      hover: 'hover:bg-pink-300',
    },
    {
      classCode: 'CSCI-UA.0436',
      name: 'Computer Architecture',
      color: 'bg-teal-400',
      hover: 'hover:bg-teal-300',
    },
    {
      classCode: 'CSCI-UA.0467',
      name: 'Applied Internet Technology',
      color: 'bg-indigo-400',
      hover: 'hover:bg-indigo-300',
    },
    {
      classCode: 'CSCI-UA.0101',
      name: 'Introduction to Computer Science',
      color: 'bg-teal-400',
      hover: 'hover:bg-teal-300',
    },
    {
      classCode: 'CSCI-UA.0201',
      name: 'Computer Systems Organization',
      color: 'bg-cyan-400',
      hover: 'hover:bg-cyan-300',
    },
    {
      classCode: 'CSCI-UA.0465',
      name: 'Introduction to Robotics',
      color: 'bg-indigo-400',
      hover: 'hover:bg-indigo-300',
    },
    {
      classCode: 'CSCI-UA.0478',
      name: 'Introduction to Cryptography',
      color: 'bg-pink-400',
      hover: 'hover:bg-pink-300',
    },
    {
      classCode: 'CSCI-UA.0102',
      name: 'Data Structures',
      color: 'bg-cyan-400',
      hover: 'hover:bg-cyan-300',
    },
    {
      classCode: 'CSCI-UA.0421',
      name: 'Numerical Computing',
      color: 'bg-pink-400',
      hover: 'hover:bg-pink-300',
    },
    {
      classCode: 'CSCI-UA.0436',
      name: 'Computer Architecture',
      color: 'bg-teal-400',
      hover: 'hover:bg-teal-300',
    },
    {
      classCode: 'CSCI-UA.0467',
      name: 'Applied Internet Technology',
      color: 'bg-indigo-400',
      hover: 'hover:bg-indigo-300',
    },
  ];

function upload(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("note uploaded");
    }
    return (
            <div className="text-base mx-auto mt-20 p-4 max-w-screen-lg">
                <div className="text-center text-2xl pb-2">
                    <p> Upload Notes </p> 
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-2">
                        <SelectClass classes={classes} />
                    </div>
                    <div className="p-2">
                        <textarea required rows="2" maxLength="220" placeholder="Add a title..." className="resize-none p-3 shadow-md hover:shadow-lg w-full bg-white rounded-xl placeholder:italic placeholder:text-slate-500 border focus:outline-none"/> 
                    </div>
                    <div className="p-2">
                    <textarea required rows="15" maxLength="4000" placeholder="Add text..." className="p-3 shadow-md hover:shadow-lg w-full bg-white rounded-xl placeholder:italic placeholder:text-slate-500 focus:outline-none"/> 
                    </div>
                    <div className="p-2">
                        <input type="file" multiple/>
                    </div>
                    <button type="submit" className="ml-2 bg-white rounded-xl px-5 p-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition-colors duration-200 transform-gpu">
                        Post
                    </button>
                </form>
            </div>

    );

}

upload.propTypes = {};
export default upload;