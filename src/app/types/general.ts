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
