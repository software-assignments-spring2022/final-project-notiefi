import React, { useState } from 'react';
import PropTypes from 'prop-types';

function upload(props) {
  return (
    <div className="mx-auto mt-20 max-w-screen-lg p-4 text-base">
      <div className="pb-2 text-center text-2xl">
        <p> Upload Notes </p>
      </div>
      <form action="http://localhost:3001/api/notes/create" method="post" enctype="multipart/form-data">
        <div className="p-2">
          <select
            required
            className="rounded-xl border px-1 text-center hover:border-slate-500 hover:shadow-lg"
            name="class">
            <option>Introduction to Computer Science</option>
            <option>Computer Systems Organization</option>
            <option>Introduction to Robotics</option>
            <option>Introduction to Cryptography</option>
          </select>
        </div>
        <div className="p-2">
          <textarea
            required
            rows="2"
            maxLength="220"
            placeholder="Add a title..."
            className="w-full resize-none rounded-xl border bg-white pl-1 shadow-md placeholder:italic placeholder:text-slate-500 hover:shadow-lg"
            name="title"
          />
        </div>
        <div className="p-2">
          <textarea
            required
            rows="15"
            maxLength="4000"
            placeholder="Add text..."
            className="w-full rounded-xl bg-white pl-1 shadow-md placeholder:italic placeholder:text-slate-500 hover:shadow-lg"
            name="text"
          />
        </div>
        <div className="p-2">
          <input type="file" multiple />
        </div>
        <div className="p-2">
          <input
            type="submit"
            value="Post"
            className="rounded-xl border bg-white p-2 px-5 hover:cursor-pointer hover:border-slate-500 hover:shadow-lg"
          />
        </div>
      </form>
    </div>
  );
}

upload.propTypes = {};
export default upload;
