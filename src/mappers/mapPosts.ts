import { RedditPost } from 'src/types/general';
import _ from 'lodash';

export const mapPosts = (posts: RedditPost[]) => {
  const fieldsToPick: (keyof RedditPost['data'])[] = [
    'link_flair_text',
    'link_flair_background_color',
    'num_comments',
    'author',
    'title',
    'ups',
    'selftext',
    'created',
    'is_video',
    'media',
    'media_metadata',
    'post_hint',
    'url',
    'thumbnail',
  ];

  return posts.map((post) =>
    _.pick(post.data, fieldsToPick),
  ) as RedditPost['data'][];
};
