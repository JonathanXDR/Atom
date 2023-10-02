import { DescriptionType } from './common/Description';
import { ImageType } from './common/Image';
import { LinkType } from './common/Link';
import { TitleType } from './common/Title';
import { UserType } from './common/User';

export interface PostProps {
  title: TitleType;
  date: Date;
  description: DescriptionType;
  image?: ImageType;
  user: UserType;
  links?: LinkType[];
}
