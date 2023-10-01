/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';
import RedditApi from 'src/services/api';
import { mapPosts } from 'src/mappers/mapPosts';
import FeedHeader from '../FeedHeader';
import PostItem from '../PostItem';
import { removeQueryStringFromURL } from 'src/utils/utils';
import { Post } from 'src/types/general';

export const revalidate = 3600;

const Feed: React.FC = async () => {
  const { data } = await RedditApi.get(`r/cyberpunkgame.json?limit=1`);

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
