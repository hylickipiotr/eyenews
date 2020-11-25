import "moment/locale/pl";
import React, { useEffect, useState } from "react";
import { getPosts } from "./api/posts/getPosts";
import InfiniteLoader from "./components/InfiniteLoader/InfiniteLoader";
import Posts from "./components/Posts/Posts";
import Layout from "./layouts/Layout";
import { PostType } from "./types/Post";

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [isMorePosts, setIsMorePosts] = useState<boolean>(true);

  const nextPage = () => setPage((currentPage) => currentPage + 1);

  const handleLoadPosts = async () => {
    const [_posts, { limit }] = await getPosts({
      page,
    });
    if (_posts.length < limit) {
      console.log("tak");
      setIsMorePosts(false);
    }
    setPosts((currentPosts) => [...currentPosts, ..._posts]);
    nextPage();
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  return (
    <Layout title="Aktualności">
      <InfiniteLoader loadMore={handleLoadPosts} hasMore={isMorePosts}>
        <Posts posts={posts} />
      </InfiniteLoader>
    </Layout>
  );
};

export default App;
