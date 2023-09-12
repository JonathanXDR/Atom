import { LinkType } from './Link';
import { TableType } from './Table';

export type DescriptionType = {
  paragraphs: {
    text?: string;
    tables?: TableType[];
    links?: LinkType[];
  }[];
};
