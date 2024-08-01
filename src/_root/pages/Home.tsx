// import React from 'react'

import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:m2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              <li>
                <PostCard value="/assets/images/profile.jpeg" />
              </li>
              <li>
                <PostCard value="/assets/images/post1.jpg" />
              </li>
              <li>
                <PostCard value="/assets/images/post2.jpg" />
              </li>
              <li>
                <PostCard value="/assets/images/post3.jpeg" />
              </li>
              <li>
                <PostCard value="/assets/images/post4.jpg" />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

// Add the following type definition for the 'post' prop in the 'PostCard' component
export interface PostCardProps {
  post: Models.Document;
}
