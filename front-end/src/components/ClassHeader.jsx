import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from './AddClassButton';
import NotesCard from './NotesCard';

const ClassHeader = props => {
    const router = useRouter();

    const notes = [
        {
          title: 'First lecture notes!',
          description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
        },
        {
            title: 'First lecture notes!',
            description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
          },
        {
          title: 'First lecture notes!',
          description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
        },
        {
            title: 'First lecture notes!',
            description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
          },
        {
          title: 'First lecture notes!',
          description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
        },
        {
            title: 'First lecture notes!',
            description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
          },
        {
          title: 'First lecture notes!',
          description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
        },
        {
            title: 'First lecture notes!',
            description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
          },
        {
          title: 'First lecture notes!',
          description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
        },
        {
            title: 'First lecture notes!',
            description: 'Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class.',
          },
      ];

    return (
        <div className="grid place-items-center ">
            <div className={`${props.color} relative h-auto rounded-3xl text-white p-5 content-center min-w-[500] max-w-[60%] relative`}>
                <div>
                  <h1 className={`text-3xl font-extrabold inline-block mr-5 mt-5`}>{props.name}</h1>
                  <AddClassButton className="inline-block mt-2"/>
                  <h2 className={`text-2xl -mt-5 mb-5`}>{props.code}</h2>

                  <div className="inline-block mb-20">
                    <span className="mr-5 font-bold text-purple-700 drop-shadow-md">Enrolled: {props.enrolled}</span>
                    <span className="font-bold text-purple-700 drop-shadow-md">Total Posts: {props.posts}</span>
                  </div>
                  {notes.map((note, i) => (
                    <NotesCard
                      key={i.toString()}
                      title={note.title}
                      description={note.description}
                    />
                  ))}
                </div>
                
            </div>
        </div>
    )
}

ClassHeader.propTypes = {};
export default ClassHeader;