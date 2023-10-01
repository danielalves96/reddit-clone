import {
  IconAnnouncement,
  IconBook,
  IconBusiness,
  IconCripto,
  IconHelp,
  IconHome,
  IconJoystick,
  IconMicrophone,
  IconPopular,
  IconReddit,
  IconSports,
  IconStar,
  IconTelevison,
  IconWrench,
} from 'src/components/Icons';
import { SidebarImageItem, SidebarItem } from 'src/types/general';

export const sidebarItems: SidebarItem[] = [
  { icon: <IconHome size={20} />, text: 'Página inicial' },
  { icon: <IconPopular size={20} />, text: 'Popular' },
];

export const recentItems: SidebarImageItem[] = [
  { imageSrc: 'images/png/pokemon.png', text: 'r/pokemon' },
  { imageSrc: 'images/jpg/psytrance.jpg', text: 'r/psytrance' },
  { imageSrc: 'images/jpg/games.jpg', text: 'r/games' },
];

export const subjectsItems: SidebarItem[] = [
  { icon: <IconJoystick size={20} />, text: 'Jogos' },
  { icon: <IconSports size={20} />, text: 'Esportes' },
  { icon: <IconBusiness size={20} />, text: 'Negócios' },
  { icon: <IconCripto size={20} />, text: 'Cripto' },
  { icon: <IconTelevison size={20} />, text: 'Televisão' },
  { icon: <IconStar size={20} />, text: 'Curiosidades' },
];

export const resourcesItems: SidebarItem[] = [
  { icon: <IconReddit size={20} />, text: 'Sobre o Reddit' },
  { icon: <IconAnnouncement size={20} />, text: 'Anuncie' },
  { icon: <IconHelp size={20} />, text: 'Ajuda' },
  { icon: <IconBook size={20} />, text: 'Blog' },
  { icon: <IconWrench size={20} />, text: 'Carreiras' },
  { icon: <IconMicrophone size={20} />, text: 'Imprensa' },
];
