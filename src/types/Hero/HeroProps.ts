import { FeatureProps } from "../FeatureProps";
import { DescriptionType } from "../common/Description";
import { LinkType } from "../common/Link";
import { TitleType } from "../common/Title";

export interface HeroProps {
  title?: TitleType;
  description?: DescriptionType;
  features: FeatureProps[];
  links?: LinkType[];
}
