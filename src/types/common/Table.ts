import { LinkType } from "./Link";
import { TitleType } from "./Title";

export type TableType = {
  data: {
    title: TitleType;
    link: LinkType;
  }[];
};
