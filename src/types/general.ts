export interface SidebarItem {
  icon: JSX.Element;
  text: string;
}

export interface SidebarImageItem {
  imageSrc: string;
  text: string;
}

export interface ButtonProps {
  text: string;
  color?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  onClick?: () => void;
}

export interface CommunityInfoProps {
  members: string;
  online: string;
  rank: string;
}

export interface MenuSectionProps {
  title: string;
  items: string[];
}

export interface ComunityMainDataProps {
  title: string;
  description: string;
  subtitle: string;
}

export interface RedditPost {
  data: Post;
}

export interface Post {
  link_flair_text: string;
  link_flair_background_color: string;
  num_comments: number;
  author: string;
  title: string;
  ups: number;
  selftext: string;
  created: number;
  is_video: boolean;
  media?: {
    reddit_video?: {
      fallback_url?: string;
    };
  };
  post_hint: string;
  url: string;
  author_image?: string;
  thumbnail: string;
}

export interface PostItemProps {
  post: Post;
}

export interface PostButtonsProps {
  ups: number;
  num_comments: number;
}

export interface PostBadgeProps {
  text: string;
  color: string;
}
