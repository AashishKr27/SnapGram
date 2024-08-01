// import React from 'react'

const PostStats = () => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/like.svg"
          className="cursor-pointer"
          alt="like"
          width={20}
          height={20}
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/icons/save.svg"
          className="cursor-pointer"
          alt="like"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default PostStats;
