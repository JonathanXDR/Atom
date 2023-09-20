import { HighlightType } from './Highlight';
import { LinkType } from './Link';

export type DescriptionType = {
  paragraphs: {
    text?: string;
    class?: string;
    links?: LinkType[];
    highlights?: HighlightType[];
  }[];
};
