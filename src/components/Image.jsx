import React from 'react';
import { FaDownload, FaHeart, FaEye } from 'react-icons/fa';

const Image = ({ likes, downloads, views, user, tags, webformatURL }) => {
  const tagsArray = tags.split(',');

  return (
    <div>
      <div className="card w-96 bg-zinc-900/50 shadow-xl rounded-md">
        <figure>
          <img src={webformatURL} alt="shoe" />
        </figure>
        <div className="card-body p-0">
          <div className="btn-group mb-3">
            <button className="btn btn-secondary rounded-none w-1/3">
              <FaEye className="mr-2" /> {views}
            </button>
            <button className="btn btn-secondary rounded-none w-1/3">
              <FaHeart className="mr-2" /> {likes}
            </button>
            <button className="btn btn-secondary rounded-none w-1/3 ">
              <FaDownload className="mr-2" /> {downloads}
            </button>
          </div>

          <h2 className="card-title text-white text-lg p-2 ">
            Author: <span className="text-secondary uppercase">{user}</span>
            {downloads < 100000 ? (
              <div className="badge badge-primary ">NEW</div>
            ) : (
              <div className="badge badge-accent ">POPULAR</div>
            )}
          </h2>

          <div className="card-actions justify-start p-2 mb-3">
            {tagsArray.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="badge badge-accent badge-outline "
                >{`#${tag}`}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
