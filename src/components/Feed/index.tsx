/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { mapPosts } from 'src/mappers/mapPosts';
import RedditApi from 'src/services/api';
import { Post } from 'src/types/general';
import { removeQueryStringFromURL } from 'src/utils/utils';
import FeedHeader from '../FeedHeader';
import PostItem from '../PostItem';
import styles from './styles.module.scss';

export const revalidate = 3600;

const Feed: React.FC = async () => {
  const redditUrl = `r/${process.env.NEXT_PULIC_COMMUNITY_NAME}.json?limit=${process.env.NEXT_PULIC_RESULTS_LIMIT}`;
  const { data } = await RedditApi.get(redditUrl);

  const mappedPosts = mapPosts(data.data.children) as Post[];

  const postList: Post[] = mappedPosts.map((post: Post) => post);

  const mappedPostsFinal: Post[] = await Promise.all(
    postList.map(async (post) => {
      const { data } = await RedditApi.get(`/user/${post.author}/about.json`);
      return {
        ...post,
        author_image:
          removeQueryStringFromURL(data.data.subreddit.icon_img) || '',
      };
    }),
  );

  return (
    <div className={styles.feedContainer}>
      <FeedHeader />
      <div>
        {mappedPostsFinal.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
