import { DescriptionType } from "../common/Description";
import { LinkType } from "../common/Link";
import { TitleType } from "../common/Title";

export interface DownloadProps {
  title?: TitleType;
  description?: DescriptionType;
  links?: LinkType[];
}
