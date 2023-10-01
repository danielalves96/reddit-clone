import React from 'react';
import { PostItemProps } from 'src/types/general';
import Divider from '../Divider';
import FeedVideo from '../FeedVideo';
import PostBadge from '../PostBadge';
import PostButtons from '../PostButtons';
import PostHeader from '../PostHeader';
import PostImage from '../PostImage';
import PostLink from '../PostLink';
import PostSelfText from '../PostSelfText';
import styles from './styles.module.scss';

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postContainer}>
        <PostHeader post={post} />
        <div>
          <span className={styles.postTitle}>{post.title}</span>
          {post.link_flair_text && (
            <PostBadge
              text={post.link_flair_text}
              color={post.link_flair_background_color}
            />
          )}
          {post.selftext && <PostSelfText text={post.selftext} />}
          {post.is_video && <FeedVideo media={post.media} />}
          {post.post_hint === 'image' && (
            <PostImage thumbnail={post.thumbnail} />
          )}
          {post.post_hint === 'link' && <PostLink url={post.url} />}
        </div>
        <PostButtons ups={post.ups} num_comments={post.num_comments} />
      </div>
      <div className={styles.dividerSpacing}>
        <Divider />
      </div>
    </div>
  );
};

export default PostItem;
