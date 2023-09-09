export interface RiverProps {
  id: string;
  class: string;
  title: string;
  description: {
    text: string;
    link?: {
      title: string;
      url: string;
    };
  };
  link?: {
    title: string;
    url: string;
  };
  image: {
    url: string;
    alt: string;
  };
}
