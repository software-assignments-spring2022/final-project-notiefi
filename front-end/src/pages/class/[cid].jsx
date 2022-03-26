import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router'
import NotesCard from '../../components/NotesCard';

const notes = [
  {
    id: 234,
    color:"bg-sky-500",
    name:"Intro to Computer Science" ,
    title:"First lecture notes!",
    text:"Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class."
  },
  {
    id: 693,
    color:"bg-sky-500",
    name:"Intro to Computer Science" ,
    title:"First lecture notes!",
    text:"Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class."
  }
];

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

const Post = () => {
  const router = useRouter()
  const { cid } = router.query;
  const [ department, level ] = cid?.split('.')[0].split('-') || [];
  const code = cid?.split('.')[1] || '';

  return (
    <div className="w-full -mt-8">
      <div className="bg-blue-500 text-white">
        <div className="w-full sm:max-w-[85%] mx-auto lg:max-w-[70%] px-4 py-8">
        <h1 className="text-3xl font-bold">{classes.find((c) => c.classCode.toLowerCase() === cid?.toLowerCase())?.name}</h1>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-x-4">
          <h2 className="col-span- text-xl font-bold text-neutral-300">{department}-{level} {code}</h2>
            <span className="text-gray-200 md:ml-auto">Enrolled: 50</span>
            <span className="text-gray-200 md:justify-self-end">Total Posts: 20</span>
          </div>
        </div>
      </div>
      <div className="w-full sm:max-w-[85%] mx-auto lg:max-w-[70%] px-4 py-8 flex flex-col items-center justify-start gap-y-2">
        {Array.from({length: 10}, () => notes[0]).map((note, i) => (
          <NotesCard
            key={note.id}
            className="my-0 shadow-2xl"
            description={note.text}
            title={note.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;