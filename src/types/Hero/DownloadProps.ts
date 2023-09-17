import { LinkType } from '../common/Link';
import { TitleType } from '../common/Title';

export interface DownloadProps {
  title: TitleType;
  links?: LinkType[];
}
