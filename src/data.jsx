import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpeg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Vincent',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kabiagnen',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Cameroonian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Douala',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+237670605655',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'vincentkabe40@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'Vincent.Kabiagnen',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '22+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '7+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Responsive Web Design <span> FreeCodeCamp </span>',
    // desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Front End Development Libraries <span> FreeCodeCamp </span>',
    // desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'Consultant <span> Videohive </span>',
    // desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Front End Development Libraries <span> FreeCodeCamp </span>',
    // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Responsive Web Design <span> High Tech Trainig Center </span>',
    // desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'informative license <span> University Of Douala </span>',
    // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Java',
    percentage: '61',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '85',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '20',
  },

  {
    id: 8,
    title: 'React',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Js Code',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Map Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Random Quote',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'City Skyline',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Tic-tac Game',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        title: 'Language : ',
        desc: 'Html, Js',
      },
      {
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Wiki Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeCodeCamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Css JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/VincentDev237',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
