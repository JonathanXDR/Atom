import { DescriptionType } from './common/Description';
import { LinkType } from './common/Link';
import { TitleType } from './common/Title';

export interface ContactProps {
  title: TitleType;
  description: DescriptionType;
  links?: LinkType[];
}
