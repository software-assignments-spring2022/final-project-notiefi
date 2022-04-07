import React, { useState } from 'react';
import { RiSettings4Fill } from 'react-icons/ri';
import Image from 'next/image';
import axios from 'axios';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import process from 'process';

export default function Profile({ picture, user, userNotes, userSavedNotes }) {
  let [notes] = useState({
    saved: [
      {
        title: 'Note 1 saved',
        classCode: 'PSYCH101',
        upvotes: 0,
      },
      {
        title: 'Note 2 saved',
        classCode: 'CS101',
        upvotes: 0,
      },
    ],
    posted: [
      {
        title: 'Note 1 posted',
        classCode: 'PSYCH101',
        upvotes: 0,
      },
    ],
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="grid place-items-center">
      <div className={`relative h-auto w-[28%] rounded-3xl bg-sky-500 text-lg`}>
        <div className="text p-5">
          <Image
            src={`data:image/jpeg;charset=utf-8;base64,${picture}`}
            width={150}
            height={150}
            alt="profile picture"
            className="float-left rounded-full pr-11"
          />
          <Link href="settings">
            <a>
              <RiSettings4Fill
                size={42}
                className="float-right"
                color="white"
              />
            </a>
          </Link>
        </div>

        <div className="p-5 text-center text-white">
          <h1 className="text-left ">Foo</h1>
          <p className="flex text-right">New York University</p>

          <p>204 Upvotes</p>
          <p>Joined {user.createdAt}</p>
        </div>
        <div className="px-6 pb-10">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 ">
              {Object.keys(notes).map((note) => (
                <Tab
                  key={note}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }>
                  {note}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(notes).map((type, code) => (
                <Tab.Panel key={code} className="grid grid-cols-2  gap-4 p-5">
                  {type.map((note) => (
                    <a
                      key={note.id}
                      className="ring-blue mx-2 rounded-xl bg-sky-400 p-5 text-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 hover:bg-indigo-500 focus:outline-none focus:ring-2"
                      href="1">
                      <h2 className="text-lg font-medium leading-7">
                        {note.title}
                        <br />
                        {note.classCode}
                      </h2>
                      <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>{note.upvotes} upvotes</li>
                      </ul>
                    </a>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const picture = await axios
    .get(process.env.PICTURE_API, {
      responseType: 'arraybuffer',
    })
    .then((response) =>
      Buffer.from(response.data, 'binary').toString('base64')
    );

  const user = await JSON.stringify(
    axios.get(
      'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6'
    )
  );

  const userNotes = await JSON.stringify(
    axios.get(
      'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/notes'
    )
  );

  const userSavedNotes = await JSON.stringify(
    axios.get(
      'http://localhost:3001/api/notes/saved'
    )
  );

  return { props: { picture, user, userNotes, userSavedNotes } };
}
