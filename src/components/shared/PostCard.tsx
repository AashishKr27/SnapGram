// import { Models } from "appwrite"

import PostStats from "./PostStats";

// import React from 'react'
// type PostCardProps = {
//     post: Models.Document;
// }

// const PostCard = ({ post }: PostCardProps) => {
//   return (
//     <div className="post-card">
//       <div className="flex-between">
//         <div className="flex items-center gap-3">
//           <img
//             src="/assets/images/profile.jpeg"
//             alt="post"
//             className="rounded-full w-12 lg:h-12"
//           />
//           <div className="flex flex-col">
//              <p></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const PostCard = ({value}: {value: string}) => {
  return (
    <>
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/profile.jpeg"
            alt="post"
            className="rounded-full w-12 lg:h-12"
          />
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              Ashish Kumar
            </p>
            <div className="flex-center text-light-3 gap-2">
              <p className="subtle-semibold lg:small-regular">1 day ago</p>-
              <p className="subtle-semibold lg:small-regular">INDIA</p>
            </div>
          </div>
        </div>
        <img src="/assets/icons/edit.svg" alt="Edit" width={25} height={25} />
      </div>
      <div className="small-medium lg:base-medium py-5">
        <p>Living my best life, one smile at a time.</p>
        <ul className="flex gap-1 mt-2">
          <li className="text-light-3">#Tag</li>
        </ul>
      </div>
      <img src={value} alt="" className="post-card_img" />
      <PostStats />
    </div>

    
    </>
  );
};

export default PostCard;
