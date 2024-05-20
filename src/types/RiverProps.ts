import { DescriptionType } from "./common/Description";
import { ImageType } from "./common/Image";
import { LinkType } from "./common/Link";
import { TitleType } from "./common/Title";

export interface RiverProps {
  id: string;
  class: string;
  title: TitleType;
  description: DescriptionType;
  link?: LinkType;
  image: ImageType;
}
