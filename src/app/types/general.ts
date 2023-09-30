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
  textStyle?: React.CSSProperties;
  onClick?: () => void;
}
