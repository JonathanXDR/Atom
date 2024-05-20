import { HighlightType } from "./Highlight";
import { LinkType } from "./Link";

export type TitleType = {
  text: string;
  class?: string;
  links?: LinkType[];
  highlights?: HighlightType[];
};
