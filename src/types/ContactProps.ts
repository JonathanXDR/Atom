import { DescriptionType } from './common/Description';
import { LinkType } from './common/Link';
import { TableType } from './common/Table';
import { TitleType } from './common/Title';

export interface ContactProps {
  title: TitleType;
  description: DescriptionType;
  tables?: TableType[];
  links?: LinkType[];
}
