import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { PostType } from "../../types/Post";
import PostSkeleton from "./PostSkeleton";

type Props = PostType;

const Post: React.FC<Props> = ({ title, url, date, excerpt, thumb }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <React.Fragment>
      <div
        key={title}
        className={classNames(
          "relative col-span-2 md:col-span-3 lg:col-span-4 bg-white rounded-md shadow-lg overflow-hidden",
          {
            block: !isLoading,
            hidden: isLoading,
          },
        )}
      >
        <div className="relative">
          <a href={url} title={title} tabIndex={-1}>
            <div className="aspect-ratio-21/9">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover"
                src={thumb}
                alt={title}
                title={title}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(true)}
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col p-6 pb-16 h-full">
          <div className="flex flex-col">
            <a
              className="font-serif font-bold text-lg text-gray-800 hover:underline focus:underline focus:outline-none"
              href={url}
              title={title}
            >
              {title}
            </a>
            <p className="mt-4 text-sm text-gray-500">{excerpt}</p>
          </div>
          <div className="absolute bottom-0 mb-6">
            <span className="text-xs text-gray-400">Opublikowano: {moment(date).format("DD.MM.YYYY o hh:mm")}</span>
          </div>
        </div>
      </div>
      {isLoading ? <PostSkeleton /> : null}
    </React.Fragment>
  );
};

export default Post;
