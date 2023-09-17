import { DescriptionType } from '../common/Description';
import { TitleType } from '../common/Title';
import { TagProps } from './TagProps';

export interface TagListProps {
  title: TitleType;
  description?: DescriptionType;
  tags: TagProps[];
}
