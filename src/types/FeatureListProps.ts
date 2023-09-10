import { FeatureProps } from './FeatureProps';
import { DescriptionType } from './common/Description';
import { TitleType } from './common/Title';

export interface FeatureListProps {
  title: TitleType;
  description?: DescriptionType;
  features: FeatureProps[];
}
