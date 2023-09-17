import { HighlightType } from './Highlight';
import { LinkType } from './Link';

export type TitleType = {
  text: string;
  links?: LinkType[];
  highlights?: HighlightType[];
};
