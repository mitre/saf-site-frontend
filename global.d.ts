declare module '@tailwindcss/forms';
declare module '@tailwindcss/typography';
declare module '@tailwindcss/line-clamp';
declare module '@tailwindcss/aspect-ratio';

type ApplicationPageFeature =
{
    name: string | undefined,
    description: string| undefined,
    imageSrc: string| undefined,
    imageAlt: string| null| undefined
  }

  type SocialMediaLinkMapping = {
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    github: string | null,
    linkedin: string | null,
    displayEmail: string | null,
    other: string | null
  }

  type BlogPost = {
    title: string,
    description: string,
    category: { name: string },
    author: string,
    date: string,
    id: string,
    content: string
  }

  type Author = {
    name: string,
    fields: {
      title: string,
      company: string
    },
    description: string,
    photo: {
      name: string | null,
      url: string | null
    }
  }
