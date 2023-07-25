import {FunctionalComponent} from 'vue';

declare module '@tailwindcss/forms';
declare module '@tailwindcss/typography';
declare module '@tailwindcss/line-clamp';
declare module '@tailwindcss/aspect-ratio';

type ApplicationPageFeature = {
  name: string | undefined;
  description: string | undefined;
  imageSrc: string | undefined;
  imageAlt: string | null | undefined;
};

type SocialMediaLinkMapping = {
  facebook: string | null;
  twitter: string | null;
  instagram: string | null;
  github: string | null;
  linkedin: string | null;
  displayEmail: string | null;
  other: string | null;
};

type BlogPost = {
  title: string;
  description: string;
  category: {name: string};
  author: string;
  date: string;
  id: string;
  content: string;
};

type Author = {
  name: string;
  fields: {
    title: string;
    company: string;
  };
  description: string;
  photo: {
    name: string | null;
    url: string | null;
  };
};

type FAQ = {
  questionNumber: number;
  question: string;
  answer: string;
};

type CourseSchedule = {
  title: string;
  date: string;
  link: string;
  index: number;
};

type Course = {name: string; description: string; index: number};

type LinkObject = {
  name: string;
  description: string;
  href: string;
  icon: FunctionalComponent;
};

type Capability = {
  name: string;
  description: string;
  orderID: number;
  link: string;
  icon: {
    name: string | null;
    url: string | null;
    alt: string | null;
  };
};

type LogoCloudEntry = {
  id: number;
  name: string;
  nameLong: string;
  link: string;
  coummunity: string;
  icon: {
    name: string | null;
    url: string | null;
    alt: string | null;
  };
};

type Tenet = {
  name: string;
  description: string;
  orderID: number;
};

type Toolset = {
  name: string;
  description: string;
  orderID: number;
  link: string;
  icon: {
    name: string | null;
    url: string | null;
    alt: string | null;
  };
};

type UserStory = {
  question: string;
  answer: string;
  orderID: number;
};
