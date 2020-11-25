import React, { useEffect, useState } from "react";

interface Props {
  loadMore: () => void;
  hasMore: boolean;
  bottomOffset?: number;
}

const InfiniteLoader: React.FC<Props> = ({ children, bottomOffset = 50, loadMore, hasMore }) => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      if (scrollTop + window.innerHeight + bottomOffset >= scrollHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isBottom || isFetching || !hasMore) return;

    setIsFetching(true);
    loadMore();
    setIsFetching(false);
  }, [isBottom]);

  return (
    <React.Fragment>
      {children}
      {isFetching ? <div className="mt-8 flex justify-center text-sm text-gray-400">Ładowanie...</div> : null}
    </React.Fragment>
  );
};

export default InfiniteLoader;
