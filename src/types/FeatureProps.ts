import { DescriptionType } from "./common/Description";
import { IconType } from "./common/Icon";
import { LinkType } from "./common/Link";
import { TitleType } from "./common/Title";

export interface FeatureProps {
  icon: IconType;
  title?: TitleType;
  description: DescriptionType;
  links?: LinkType[];
}
