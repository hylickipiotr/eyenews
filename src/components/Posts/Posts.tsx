import React from "react";
import { PostType } from "../../types/Post";
import Post from "../Post/Post";

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-6">
      {posts.map((post) => (
        <Post key={post.title} {...post} />
      ))}
    </div>
  );
};

export default Posts;
