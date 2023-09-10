import { LinkType } from './Link';

export type DescriptionType = {
  paragraphs: {
    text: string;
    links?: LinkType[];
  }[];
};
