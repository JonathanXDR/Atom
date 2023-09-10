import { LinkType } from './Link';

export type DescriptionType = {
  description: {
    paragraphs: {
      text: string;
      links?: LinkType[];
    }[];
  };
};
